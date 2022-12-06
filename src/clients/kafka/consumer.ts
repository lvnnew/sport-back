import {Consumer, ConsumerConfig, Kafka} from 'kafkajs';

import {RegisterService} from './getKafkaContext';
// import log from '../../log';

export type GetConsumer = (config: ConsumerConfig) => Promise<Consumer>;

export const getConsumer = (rs: RegisterService, kafka: Kafka): GetConsumer => async (config: ConsumerConfig) => {
  const consumer = kafka.consumer(config);

  await consumer.connect();

  // consumer.on('consumer.start_batch_process', ({payload}) => {
  // eslint-disable-next-line max-len
  //   log.info(`${payload.topic} ${payload.firstOffset} ${+payload.highWatermark - 1 - +payload.firstOffset} ${+payload.lastOffset - +payload.firstOffset}`);
  // });

  rs.register(consumer);

  return consumer;
};
