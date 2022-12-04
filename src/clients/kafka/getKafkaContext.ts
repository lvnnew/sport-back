import {Kafka} from 'kafkajs';

import getKafka from './kafkaClient';
import {getProducer, ProducerUtils} from './producer';
import {ContextAdmin, getKafkaAdmin} from './admin';
import {getConsumer} from './consumer';

// todo: add to generating
// DO NOT EDIT! THIS IS GENERATED FILE

export type KafkaContext = {
  kafka: Kafka;
  producer: ProducerUtils;
  getAdmin: () => Promise<ContextAdmin>;
  getConsumer: typeof getConsumer;
}

const getKafkaContext = async (): Promise<KafkaContext> => {
  const kafka = await getKafka();

  const producer = await getProducer(kafka);

  return {
    kafka,
    producer,
    getAdmin: getKafkaAdmin(kafka),
    getConsumer,
  };
};

export default getKafkaContext;
