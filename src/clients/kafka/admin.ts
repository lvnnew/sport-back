import {Admin, Kafka} from 'kafkajs';

// import {registerInstance, unregisterInstance} from './disconnectService';
import log from '../../log';
import {KafkaJob} from '../queue/Job';
import {configureTopics, getJobPrefix} from './queue/utils';
import {Topics} from './queue/types';
import {RegisterService} from './getKafkaContext';

type CountMessages = Awaited<ReturnType<Admin['fetchTopicOffsets']>>[number] & {
  size: number;
};

type CountRawMessagesByPartition = CountMessages & {raw: number};

type CountRawMessages = Record<'size'|'raw', number>;

type CountJobRawMessages = Record<Topics, CountRawMessages>;

export type ContextAdmin = {
  admin: Admin;
  countMessagesByPartition: (topic: string) => Promise<CountMessages[]>;
  countRawMessagesByPartition: (groupId: string, topic: string) => Promise<CountRawMessagesByPartition[]>;
  countMessages: (topic: string) => Promise<number>;
  countRawMessages: (groupId: string, topic: string) => Promise<CountRawMessages>;
  countJobRawMessages: (job: KafkaJob) => Promise<CountJobRawMessages>;
  countJobsRawMessages: (jobs: KafkaJob[]) => Promise<Record<(typeof jobs)[number], CountJobRawMessages>>;
  close: () => Promise<void>;
};

export const getKafkaAdmin = (is: RegisterService, kafka: Kafka) => async (): Promise<ContextAdmin> => {
  const admin = kafka.admin();
  await admin.connect();

  is.register(admin);

  const countMessagesByPartition: ContextAdmin['countMessagesByPartition'] = async (topic) => {
    try {
      const mainTopicOffsets = await admin.fetchTopicOffsets(topic);

      return mainTopicOffsets.map((partition) => ({
        ...partition,
        size: Number(partition.high) - Number(partition.low),
      }));
    } catch (error) {
      log.error(error?.toString());
      return [];
    }
  };

  const countMessages: ContextAdmin['countMessages'] = async (topic) => {
    const countedMsgByPartition = await countMessagesByPartition(topic);

    return countedMsgByPartition.reduce((accum, partition) => {
      return accum + partition.size;
    }, 0);
  };

  // if you don't need raw number of messages, use the two methods above in the code,
  // because there one doesn't make connection to the kafka group
  const countRawMessagesByPartition: ContextAdmin['countRawMessagesByPartition'] = async (groupId, topic) => {
    try {
      const [countedMessages, offsets] = await Promise.all([
        countMessagesByPartition(topic),
        admin.fetchOffsets({groupId}),
      ]);
      return countedMessages.map((partition) => {
        const offset = offsets.find((ofs) => ofs.topic === topic)?.partitions?.find((par) => par.partition === partition.partition)?.offset;
        return {
          ...partition,
          raw: Number(partition.high) - (offset ? Number(offset) : 0),
        };
      });
    } catch (error) {
      log.error(error?.toString());
      return [];
    }
  };

  const countRawMessages: ContextAdmin['countRawMessages'] = async (groupId, topic) => {
    const countedRawMsgByPartition = await countRawMessagesByPartition(groupId, topic);

    return countedRawMsgByPartition.reduce((accum, partition) => {
      accum.size += partition.size;
      accum.raw += partition.raw;
      return accum;
    }, {size: 0, raw: 0});
  };

  const countJobRawMessages: ContextAdmin['countJobRawMessages'] = async (job) => {
    const groupId = await getJobPrefix(job);
    const topics = configureTopics(groupId);

    const entries = Object.values(topics);

    const promises = entries.map(([_key, topic]) => countRawMessages(groupId, topic));

    const res = await Promise.all(promises);

    return entries.reduce((accum, [key], idx) => {
      accum[key] = res[idx];

      return accum;
    }, {} as CountJobRawMessages);
  };

  const countJobsRawMessages: ContextAdmin['countJobsRawMessages'] = async (jobs) => {
    const promises = jobs.map((job) => countJobRawMessages(job));

    const res = await Promise.all(promises);

    return jobs.reduce((accum, job, idx) => {
      accum[job] = res[idx];

      return accum;
    }, {} as Awaited<ReturnType<ContextAdmin['countJobsRawMessages']>>);
  };

  const close = () => is.unregister(admin);

  return {
    admin,
    countMessagesByPartition,
    countRawMessagesByPartition,
    countMessages,
    countRawMessages,
    countJobRawMessages,
    countJobsRawMessages,
    close,
  };
};
