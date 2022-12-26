import {EachBatchPayload, IHeaders, Producer} from 'kafkajs';
import log from '../../../log';
import {
  getCallTime,
  getVersion,
  getAttempts,
} from './kafkaQueue';
import {calculateRetryTime} from './utils';
import {Config, TopicsConfig} from './types';
import {JobType} from '../../queue/jobsTypes';
import {KafkaJob} from '../../queue/Job';

class VersionError extends Error {
  constructor(version: string) {
    super(`ERROR: unsupported version ${version}`);
  }
}

const unsolvableError = (error: any) => {
  if (error instanceof SyntaxError) { // json validation error
    return true;
  }

  return false;
};

export const processMessages = async <S extends KafkaJob>(
  producer: Producer,
  payload: EachBatchPayload,
  topics: TopicsConfig,
  config: Config,
  task: JobType<S>,
) => {
  for (const message of payload.batch.messages) {
    try {
      const version = getVersion(message);
      if (!config.supportedVersion.includes(version)) {
        throw new VersionError(version);
      }

      const attempts = getAttempts(message);

      if (attempts >= config.maxAttemptsSize) {
        throw new Error(`ERROR: attempt limit reached ${attempts}`);
      }

      const value = message.value ? JSON.parse(message.value.toString()) : undefined;

      await task(value?.payload);
    } catch (error_: any) {
      const attempts = getAttempts(message) + 1;

      const resRetryTime = message.headers?.retryTime;
      const retryTime = calculateRetryTime(resRetryTime ? Number(resRetryTime) : config.defaultRetryTime);
      const nextCallTime = (getCallTime(message) ?? Date.now()) + retryTime;

      let unsuccessfulTopic: string;
      let error: string = error_?.toString() ?? '';

      if (attempts >= config.maxAttemptsSize) { // errors without error text replacement
        unsuccessfulTopic = topics.dead;
        error = message.headers?.error?.toString() ?? '';
      } else if (error_ instanceof VersionError) {
        unsuccessfulTopic = topics.waiting;
        error = error_.toString();
      } else if (unsolvableError(error_)) { // check if error will be processed more time
        error = error_?.toString();
        unsuccessfulTopic = topics.dead;
      } else if (nextCallTime > Date.now()) {
        unsuccessfulTopic = topics.waiting;
      } else {
        unsuccessfulTopic = topics.retry;
      }

      log.warn(error);

      try {
        await producer.send({
          topic: unsuccessfulTopic,
          messages: [{
            ...message,
            headers: {
              ...message.headers as IHeaders,
              attempts: attempts.toString(),
              callTime: nextCallTime.toString(),
              retryTime: retryTime.toString(),
              error,
            },
          }],
          acks: config.acks,
        });
      } catch (error_: any) {
        log.error(`FATAL ERROR IN ${payload.batch.topic} QUEUE: ${error_?.toString()}`);
      }
    }

    await payload.commitOffsetsIfNecessary({topics: [{
      topic: payload.batch.topic,
      partitions: [{
        partition: payload.batch.partition,
        offset: message.offset,
      }],
    }]});

    await payload.heartbeat();

    if (!payload.isRunning() || payload.isStale()) {
      break;
    }
  }
};
