import {Config, TopicsConfig} from './types';
import {getConfig} from '../../../config';
import {KafkaJob} from '../../queue/Job';

export const randomRange = (min: number, max: number): number => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const calculateRetryTime = (previousRetryTime: number): number => {
  const factor = 0.2;

  return randomRange(previousRetryTime * (1 - factor), previousRetryTime * (1 + factor)) * 2; // multiplier might be changed
};

export const configureTopics = (prefix: string): TopicsConfig => ({
  main: `${prefix}-main`,
  retry: `${prefix}-retry`,
  waiting: `${prefix}-waiting`,
  dead: `${prefix}-dead`,
});

export const getClientPrefix = async () => {
  const {appName, appEnvironment} = await getConfig();

  if (!(appName || appEnvironment)) {
    throw new Error('At least one of appName or appEnvironment configuration variables must be filled');
  }

  return `${appName}-${appEnvironment}`;
};

export const getJobPrefix = async (jobName: KafkaJob | string) => {
  const prefix = await getClientPrefix();

  return `${prefix}_${jobName}`;
};

export const getValidatedKafkaAsks = async (): Promise<Config['acks']> => {
  const {kafkaQueueAcks} = await getConfig();

  if (kafkaQueueAcks && [0, 1, -1].includes(Number(kafkaQueueAcks))) {
    return Number(kafkaQueueAcks) as Config['acks'];
  } else {
    throw new Error('Kafka config validation failed at field "acks"');
  }
};

export const getValidatedConfig = async (): Promise<Config> => {
  const {
    kafkaQueueMaxAttemptsSize,
    kafkaQueueDefaultRetryTime,
    kafkaQueueWaitingInterruptTime,
    kafkaQueueStackSize,
    kafkaQueueSupportedVersion,
    kafkaQueueAutoCommitInterval,
    kafkaQueueAutoCommitThreshold,
  } = await getConfig();

  const config: Partial<Config> = {};
  let errorInField: string | undefined;

  if (kafkaQueueMaxAttemptsSize && !Number.isNaN(Number(kafkaQueueMaxAttemptsSize))) {
    config.maxAttemptsSize = Number(kafkaQueueMaxAttemptsSize);
  } else {
    errorInField = 'maxAttemptsSize';
  }

  if (kafkaQueueDefaultRetryTime && !Number.isNaN(Number(kafkaQueueDefaultRetryTime))) {
    config.defaultRetryTime = Number(kafkaQueueDefaultRetryTime);
  } else {
    errorInField = 'defaultRetryTime';
  }

  if (kafkaQueueWaitingInterruptTime && !Number.isNaN(Number(kafkaQueueWaitingInterruptTime))) {
    config.waitingInterruptTime = Number(kafkaQueueWaitingInterruptTime);
  } else {
    errorInField = 'waitingInterruptTime';
  }

  if (kafkaQueueStackSize && !Number.isNaN(Number(kafkaQueueStackSize))) {
    config.stackSize = Number(kafkaQueueStackSize);
  } else {
    errorInField = 'stackSize';
  }

  const supportedVersion = kafkaQueueSupportedVersion?.split(';');
  if (Array.isArray(supportedVersion)) {
    config.supportedVersion = supportedVersion;
  } else {
    errorInField = 'supportedVersion';
  }

  if (kafkaQueueAutoCommitInterval && ['null', 'undefined'].includes(kafkaQueueAutoCommitInterval)) {
    config.autoCommitInterval = kafkaQueueAutoCommitInterval === 'null' ? null : undefined;
  } else if (kafkaQueueAutoCommitInterval && !Number.isNaN(Number(kafkaQueueAutoCommitInterval))) {
    config.autoCommitInterval = Number(kafkaQueueAutoCommitInterval);
  } else {
    errorInField = 'autoCommitInterval';
  }

  if (kafkaQueueAutoCommitThreshold && ['null', 'undefined'].includes(kafkaQueueAutoCommitThreshold)) {
    config.autoCommitThreshold = kafkaQueueAutoCommitThreshold === 'null' ? null : undefined;
  } else if (kafkaQueueAutoCommitThreshold && !Number.isNaN(Number(kafkaQueueAutoCommitThreshold))) {
    config.autoCommitThreshold = Number(kafkaQueueAutoCommitThreshold);
  } else {
    errorInField = 'autoCommitThreshold';
  }

  config.acks = await getValidatedKafkaAsks();

  if (errorInField) {
    throw new Error(`Kafka config validation failed at field "${errorInField}"`);
  }

  return config as Config;
};

export const timeoutCycle = (callback: () => any, time = 5 * 1000) => {
  const handle = async () => {
    await callback();

    setTimeout(handle, time);
  };

  setTimeout(handle, time);
};
