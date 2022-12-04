import {ConsumerConfig} from 'kafkajs';

import getKafka from './kafkaClient';
import {registerInstance} from './disconnectService';
// import log from "../../log";

export const getConsumer = async (config: ConsumerConfig) => {
  const kafka = await getKafka();

  const consumer = kafka.consumer(config);

  await consumer.connect();

  // consumer.on('consumer.start_batch_process', ({payload}) => {
  // eslint-disable-next-line max-len
  //   log.info(`${payload.topic} ${payload.firstOffset} ${+payload.highWatermark - 1 - +payload.firstOffset} ${+payload.lastOffset - +payload.firstOffset}`);
  // });

  registerInstance(consumer);

  return consumer;
};
