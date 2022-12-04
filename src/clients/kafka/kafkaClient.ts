import {Kafka, KafkaConfig, logCreator as kafkaLogCreator, logLevel} from 'kafkajs';
import {getConfig, isLocalEnv} from '../../config';
import logger from '../../log';
import {getClientPrefix} from './queue/utils';

const mapLogLevel = (level: logLevel) => {
  switch (level) {
  case logLevel.ERROR:
  case logLevel.NOTHING:
    return 'error';
  case logLevel.WARN:
    return 'warn';
  case logLevel.INFO:
    return 'info';
  case logLevel.DEBUG:
    return 'debug';
  }
};

const logCreator: kafkaLogCreator = () => {
  return ({level, log}) => {
    const {message, ...extra} = log;
    logger[mapLogLevel(level)](
      message,
      extra,
    );
  };
};

const getKafka = async (): Promise<Kafka> => {
  const {kafkaBrokers, kafkaUsername, kafkaPassword} = await getConfig();

  const brokers = kafkaBrokers?.split(';');

  if (!Array.isArray(brokers) || brokers.length === 0) {
    throw new Error('Config variable kafkaBrokers is empty!');
  }

  let kafkaConfig: KafkaConfig = {
    clientId: await getClientPrefix(),
    brokers,
    logCreator,
  };

  if (!isLocalEnv) {
    if (!(kafkaUsername && kafkaPassword)) {
      throw new Error('The configuration variables kafkaUsername and kafkaPassword cannot be empty!');
    }

    kafkaConfig = {
      ...kafkaConfig,
      ssl: true,
      sasl: {
        mechanism: 'plain',
        username: kafkaUsername,
        password: kafkaPassword,
      },
    };
  }

  return new Kafka(kafkaConfig);
};

export default getKafka;
