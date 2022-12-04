import {Consumer, Admin} from 'kafkajs';

type Instance = Consumer | Admin;

const listOfKafkaInstances: Instance[] = [];

export const registerInstance = (instance: Instance) => {
  const index = listOfKafkaInstances.indexOf(instance);
  if (index === -1) {
    listOfKafkaInstances.push(instance);
  }
};

const disconnectPromisesForExit: Promise<void>[] = [];

export const unregisterInstance = async (consumer: Instance) => {
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

export const unregisterAllInstance = async () => {
  const localList = [...listOfKafkaInstances];

  for (const consumer of localList) {
    unregisterInstance(consumer);
  }

  await Promise.all(disconnectPromisesForExit);
};
