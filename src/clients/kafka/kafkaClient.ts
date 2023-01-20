import {Kafka, KafkaConfig, logCreator as kafkaLogCreator, logLevel} from 'kafkajs';
import {v4 as uuidv4} from 'uuid';

import {getConfig} from '../../config';
import logger from '../../log';
import getAppEnvPrefix from '../../config/getAppEnvPrefix';

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
  default:
    return 'info';
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
  const {
    kafkaBrokers,
    kafkaUsername,
    kafkaPassword,
    kafkaSslRejectUnauthorized,
  } = await getConfig();

  const brokers = kafkaBrokers?.split(';');

  if (!Array.isArray(brokers) || brokers.length === 0) {
    throw new Error('Config variable kafkaBrokers is empty!');
  }

  const podName: string | undefined = process.env.K8S_POD_NAME;

  const clientId = podName ? podName : `${await getAppEnvPrefix()}-${uuidv4()}`;

  logger.info(`Kafka've run with clientId: ${clientId}`);

  let kafkaConfig: KafkaConfig = {
    clientId,
    brokers,
    logCreator,
    connectionTimeout: 60_000,
  };

  if (!(kafkaUsername && kafkaPassword)) {
    throw new Error('The configuration variables kafkaUsername and kafkaPassword cannot be empty!');
  }

  kafkaConfig = {
    ...kafkaConfig,
    ssl: {
      rejectUnauthorized: kafkaSslRejectUnauthorized,
    },
    sasl: {
      mechanism: 'plain',
      username: kafkaUsername,
      password: kafkaPassword,
    },
  };

  return new Kafka(kafkaConfig);
};

export default getKafka;
