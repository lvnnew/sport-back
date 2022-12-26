import {EachBatchPayload, IHeaders, KafkaMessage, Message as KMessage, Producer, Consumer} from 'kafkajs';
import log from '../../../log';
import {getCallTime} from './kafkaQueue';
import {Config, TopicsConfig} from './types';

export const waitingMessages = async (
  consumer: Consumer,
  producer: Producer,
  payload: EachBatchPayload,
  topics: TopicsConfig,
  config: Config,
  uuid: string,
  needMarkNextTime: {ref: boolean},
  lastMarkCheck: {ref: number | undefined},
) => {
  let needInterrupt = false;
  let needMarkNewMessage = needMarkNextTime.ref;
  needMarkNextTime.ref = false;

  const waitMessages: KMessage[] = [];
  const retryMessages: KMessage[] = [];
  const deadMessages: KMessage[] = [];

  payload.batch.messages.forEach((message) => {
    const isMarked = message.headers?.interruptMark?.toString() === uuid;
    if (isMarked) {
      needInterrupt = true;
      if (lastMarkCheck.ref) {
        needInterrupt = Date.now() - lastMarkCheck.ref < config.waitingInterruptTime;
      }

      lastMarkCheck.ref = Date.now();
    }

    const callTime = getCallTime(message);
    if (!callTime) {
      deadMessages.push({
        ...message,
        headers: {
          ...message.headers,
          error: 'waiting queue cannot include the messages without a next call time',
        },
      } as KafkaMessage);
    } else if (callTime > Date.now()) {
      if (isMarked) {
        needMarkNewMessage = false;
        message.key = null;
      }

      waitMessages.push(message);
    } else {
      if (isMarked) {
        needMarkNewMessage = true;
      }

      retryMessages.push(message);
    }
  });

  if (needMarkNewMessage) {
    const firstWaitingMessage = waitMessages?.[0];
    if (firstWaitingMessage) {
      firstWaitingMessage.headers = {
        ...firstWaitingMessage.headers,
        interruptMark: uuid,
      } as IHeaders;
      firstWaitingMessage.partition = payload.batch.partition;
    } else {
      needMarkNextTime.ref = true;
    }
  }

  const promises = [];

  if (retryMessages.length) {
    promises.push(producer.send({
      topic: topics.retry,
      messages: retryMessages,
      acks: config.acks,
    }));
  }

  if (waitMessages.length) {
    promises.push(producer.send({
      topic: topics.waiting,
      messages: waitMessages,
      acks: config.acks,
    }));
  }

  if (deadMessages.length) {
    promises.push(producer.send({
      topic: topics.dead,
      messages: deadMessages,
      acks: config.acks,
    }));
  }

  try {
    await payload.commitOffsetsIfNecessary({topics: [{
      topic: payload.batch.topic,
      partitions: payload.batch.messages.map(message => ({
        partition: payload.batch.partition,
        offset: message.offset,
      })),
    }]});
    await Promise.all(promises);
  } catch (error: any) {
    log.error(`FATAL ERROR IN ${payload.batch.topic} QUEUE: ${error?.toString()}`);
  }

  await payload.heartbeat();

  const isInterrupted = consumer.paused().findIndex((topic) => topic.topic === topics.waiting) !== -1;
  if (!isInterrupted && needInterrupt) {
    const pauseTopic = [{topic: topics.waiting}];
    consumer.pause(pauseTopic);

    setTimeout(() => {
      consumer.resume(pauseTopic);
    }, config.waitingInterruptTime);
  }
};
