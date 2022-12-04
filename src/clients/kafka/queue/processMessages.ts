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
  currentlyInWorkPromises: Promise<void>[],
) => {
  const currentBatchPromises: Promise<void>[] = [];
  let heartbeatId;

  for (const message of payload.batch.messages) {
    const run = async () => {
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

        payload.resolveOffset(message.offset);
      } catch (error_: any) {
        const attempts = getAttempts(message) + 1;

        const resRetryTime = message.headers?.retryTime;
        const retryTime = calculateRetryTime(resRetryTime ? Number(resRetryTime) : config.defaultRetryTime);
        const nextCallTime = (getCallTime(message) ?? Date.now()) + retryTime;

        let unsuccessfulTopic: string;
        let error: string = message.headers?.error?.toString() ?? '';
        // const version = getVersion(message);

        if (attempts >= config.maxAttemptsSize) { // errors without error text replacement
          unsuccessfulTopic = topics.dead;
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

          payload.resolveOffset(message.offset);
        } catch (error_: any) {
          log.error(`FATAL ERROR IN ${payload.batch.topic} QUEUE: ${error_?.toString()}`);
        }
      }
    };

    if (currentlyInWorkPromises.length >= config.stackSize) {
      await Promise.any(currentlyInWorkPromises).then(() => {
        // @ts-ignore
        const idx = currentlyInWorkPromises.findIndex((prom) => !prom?.pending);
        if (idx !== -1) {
          currentlyInWorkPromises.splice(idx, 1);
        }
      });
    }

    if (!payload.isRunning() || payload.isStale()) {
      // heartbeat every 10 sec, this is for long tasks
      heartbeatId = setTimeout(async function heartbeat() {
        await payload.heartbeat();
        heartbeatId = setTimeout(heartbeat, 10 * 1000);
      }, 10 * 1000);
      break;
    }

    const promise = run();
    currentBatchPromises.push(promise);
    currentlyInWorkPromises.push(promise);
  }

  await Promise.all(currentBatchPromises);

  clearTimeout(heartbeatId);
};
