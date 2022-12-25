import {KafkaMessage} from 'kafkajs';
import {v4 as uuidv4} from 'uuid';

import {configureTopics, getJobPrefix, getValidatedConfig} from './utils';
import {waitingMessages} from './waitingMessages';
import {processMessages} from './processMessages';
import {JobType} from '../../queue/jobsTypes';
import {KafkaJob} from '../../queue/Job';
import {createContext} from '../../../adm/services/context';

export const getAttempts = (message: KafkaMessage) => Number(message.headers?.attempts || 0);
export const getVersion = (message: KafkaMessage) => message.headers?.version?.toString() ?? '';
export const getCallTime = (message: KafkaMessage): number | undefined => {
  const callTime = message.headers?.callTime?.toString();

  return callTime ? Number(callTime) : undefined;
};

export const kafkaQueue = async <S extends KafkaJob>(task: JobType<S>, jobName: S) => {
  const ctx = await createContext();

  const config = await getValidatedConfig();

  const groupId = await getJobPrefix(jobName);

  const topics = configureTopics(groupId);

  const consumer = await ctx.kafka.getConsumer({
    groupId,
    heartbeatInterval: 5_000,
    rebalanceTimeout: 75_000,
    sessionTimeout: 90_000,
    minBytes: 5,
    maxBytes: 5e5, // 0.5 mb
  });
  await consumer.subscribe({
    topics: [topics.main, topics.retry, topics.waiting],
    fromBeginning: true,
  });

  const uuid = uuidv4();
  const needMarkNextTime = {val: true};
  let lastMarkCheck: number | undefined;
  const currentlyInWorkPromises: Promise<void>[] = [];

  await consumer.run({
    partitionsConsumedConcurrently: 1,
    // autoCommitInterval: config.autoCommitInterval, // todo: delete from environment
    // autoCommitThreshold: config.autoCommitThreshold,
    eachBatch: async (payload) => {
      let heartbeatId = setTimeout(async function heartbeat() {
        if (payload.isRunning() && !payload.isStale()) {
          await payload.heartbeat();
          heartbeatId = setTimeout(heartbeat, 5_000);
        }
      }, 5_000);

      if (payload.batch.topic === topics.waiting) {
        await waitingMessages(
          consumer,
          ctx.kafka.producer.producer,
          payload,
          topics,
          config,
          uuid,
          needMarkNextTime,
          lastMarkCheck,
        );
      } else if ([topics.main, topics.retry].includes(payload.batch.topic)) {
        await processMessages<S>(
          ctx.kafka.producer.producer,
          payload,
          topics,
          config,
          task,
          currentlyInWorkPromises,
        );
      }

      clearTimeout(heartbeatId);
      if (payload.isRunning() && !payload.isStale()) {
        await payload.heartbeat();
      }
    },
  });
};

export const kafkaQueues = async (
  tasks: Partial<{[key in KafkaJob]: JobType<key>}>,
) => {
  const promises = Object.entries(tasks).map(<S extends KafkaJob>(entry: any) => {
    const [taskName, runner] = entry as [S, JobType<S>];
    return kafkaQueue(runner, taskName);
  });

  await Promise.all(promises);
};
