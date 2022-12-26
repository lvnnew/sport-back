import * as R from 'ramda';
import {Context} from '../adm/services/types';
import {workersConfig} from '../workers/configs';
import {KafkaWorkerConfig, TopicConfig} from '../types/configs';
import {KafkaJob} from '../clients/queue/Job';
import {configureTopics, getJobPrefix} from '../clients/kafka/queue/utils';
import log from '../log';
import {getConfig} from '../config';

const kafkaConfigs: KafkaWorkerConfig['jobs'][] = Object.values(workersConfig).map(c => c.jobs).filter(Boolean);

export const bootstrapKafkaWorkers = async (ctx: Context) => {
  const {kafkaEnabled} = await getConfig();

  if (kafkaEnabled) {
    const admin = await ctx.kafka.getAdmin();

    const mergedConfigs = R.compose(R.toPairs, R.mergeAll)(kafkaConfigs) as [KafkaJob, TopicConfig][];
    const initJobsSize = R.compose(R.flatten, R.map(R.keys))(kafkaConfigs);
    if (mergedConfigs.length !== initJobsSize.length) {
      throw new Error('Jobs cannot be repeated');
    }

    for (const [job, config] of mergedConfigs) {
      let localConfig = {
        main: 1,
        retry: 1,
        waiting: 1,
        dead: 1,
      };

      if (R.is(Object, config) && config.partition) {
        localConfig = R.mergeRight(localConfig, config.partition);
      }

      const groupId = await getJobPrefix(job);
      const topics = configureTopics(groupId);

      for (const [queue, topicName] of Object.entries(topics)) {
        let metadata;
        let tipicExist = false;
        try {
          metadata = await admin.admin.fetchTopicMetadata({topics: [topicName]});
          tipicExist = true;
        } catch (error_: any) {
          log.warn(error_?.toString());
        }

        if (tipicExist) {
          const meta = metadata && metadata.topics.find((m) => m.name === topicName);
          if (!meta || meta.partitions.length < localConfig[queue]) {
            // количество партиций только увеличивается
            const success = await admin.admin.createPartitions({
              topicPartitions: [{
                topic: topicName,
                count: localConfig[queue],
              }],
            });

            if (success) {
              log.info(`Updated topic: ${topicName} partition size: ${localConfig[queue]}`);
            } else {
              log.warn(`Does not updated topic: ${topicName} need partition size: ${localConfig[queue]}`);
            }
          }
        } else {
          const success = await admin.admin.createTopics({
            topics: [{
              topic: topicName,
              numPartitions: localConfig[queue],
            }],
          });

          if (success) {
            log.info(`Created topic: ${topicName} partition size: ${localConfig[queue]}`);
          } else {
            log.warn(`Does not created topic: ${topicName}`);
          }
        }
      }
    }

    await admin.close();
  }
};
