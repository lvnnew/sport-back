import {Admin, Consumer, Kafka} from 'kafkajs';

import getKafka from './kafkaClient';
import {getProducer, ProducerUtils} from './producer';
import {ContextAdmin, getKafkaAdmin} from './admin';
import {getConsumer, GetConsumer} from './consumer';
import {getConfig} from '../../config';
import log from '../../log';

// todo: add to generating

export type KafkaContext = {
  kafka: Kafka;
  producer: ProducerUtils;
  getAdmin: () => Promise<ContextAdmin>;
  getConsumer: GetConsumer;
  close: () => Promise<void>;
}

type Instance = Consumer | Admin;

export type RegisterService = {
  register: (i: Instance) => void;
  unregister: (i: Instance) => Promise<void>;
}

const getKafkaContext = async (): Promise<KafkaContext> => {
  const {kafkaEnabled} = await getConfig();

  if (kafkaEnabled) {
    const kafka = await getKafka();

    const producer = await getProducer(kafka);

    const listOfKafkaInstances: Instance[] = [];

    const register = (instance: Instance) => {
      const index = listOfKafkaInstances.indexOf(instance);
      if (index === -1) {
        listOfKafkaInstances.push(instance);
      }
    };

    const disconnectPromisesForExit: Promise<void>[] = [];

    const unregister = async (consumer: Instance) => {
      const index = listOfKafkaInstances.indexOf(consumer);

      if (index !== -1) {
        const disconnectPromise = consumer.disconnect();

        listOfKafkaInstances.splice(index, 1);

        disconnectPromisesForExit.push(disconnectPromise);

        await disconnectPromise;

        const idx = disconnectPromisesForExit.indexOf(disconnectPromise);

        disconnectPromisesForExit.splice(idx, 1);
      }
    };

    const close = async () => {
      const localList = [...listOfKafkaInstances];

      for (const instance of localList) {
        unregister(instance);
      }

      await Promise.all(disconnectPromisesForExit);

      await producer.close();
    };

    const rs: RegisterService = {register, unregister};

    const admin: {ref: ContextAdmin | null} = {ref: null};

    const getAdmin = async () => {
      if (!admin.ref) {
        const localAdmin = await getKafkaAdmin(rs, kafka);
        // eslint-disable-next-line require-atomic-updates
        admin.ref = {
          ...localAdmin,
          close: () => {
            const promise = localAdmin?.close() ?? Promise.resolve();
            admin.ref = null;
            return promise;
          },
        };
      }

      return admin.ref;
    };

    return {
      kafka,
      producer,
      getAdmin,
      getConsumer: getConsumer(rs, kafka),
      close,
    };
  } else {
    const fake = () => {
      const reason = 'Kafka cannot be used with the kafka.enabled is not true';
      log.error(reason);
      return Promise.reject(reason);
    };

    return {
      kafka: null,
      producer: {sender: fake},
      getAdmin: fake,
      getConsumer: fake,
      close: () => Promise.resolve(),
    } as any as KafkaContext;
  }
};

export default getKafkaContext;
