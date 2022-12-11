import {KafkaContext} from '../kafka/getKafkaContext';
import {QueueTypes} from './jobsTypes';
import {KafkaJob, Job} from './Job';
import log from '../../log';

export const getQueueContext = (kafkaContext: KafkaContext): QueueTypes => {
  const kafkaQueue: QueueTypes = Object.values(KafkaJob).reduce((accum, jobName) => {
    accum[jobName] = (payload?: any) => {
      if (!kafkaContext.kafka) {
        const msg = 'Kafka is disabled, you cannot send any messages to the queue!';
        log.error(msg);
        return Promise.reject(msg);
      }

      const arrayLikePayload = Array.isArray(payload) ? payload : [payload];
      return kafkaContext.producer.sender(jobName, arrayLikePayload.map((payload) => ({value: {payload}})));
    };

    return accum;
  }, {} as QueueTypes);

  const postgressQueue: QueueTypes = Object.values(Job).reduce((accum, jobName) => {
    accum[jobName] = (_payload?: any) => {
      throw new Error('I\'m gonna to implement it soon!'); // todo: https://gitlab.service.making.ventures/mv-projects/prj-back/-/issues/124
    };

    return accum;
  }, {} as QueueTypes);

  return {...kafkaQueue, ...postgressQueue};
};
