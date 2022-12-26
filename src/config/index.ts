import {constantCase} from 'change-case';
import nconf from 'nconf';
import {exists, read} from 'fs-jetpack';
import getConfigUtils from './getConfigUtils';

// DO NOT EDIT! THIS IS GENERATED FILE

nconf
  .argv()
  .env()
  .file({file: './config/default.json'});

const developerRunlifyConfig = read('runlify.developer.json', 'json') || 'dev';

const envName = process.env.ENV || developerRunlifyConfig?.defaultEnvironment;
const file = `./config/${envName}.json`;

if (exists(file)) {
  nconf.file({file});
}

export const isLocalEnv = envName === 'local';

type ValueBasedOnRequired<Req extends boolean, Val extends number | string | boolean | Date | bigint>
  = Req extends true ? Val : Val | undefined

export const getFromNconf = <T extends boolean>(name: string, required: T): ValueBasedOnRequired<T, string> => {
  const value = nconf.get(constantCase(name)) || nconf.get(name);

  if (required && value === undefined) {
    throw new Error(`Config var "${name}" is required`);
  }

  return value;
};

const utils = getConfigUtils(getFromNconf);

const envConfig = {
  admJwtSecret: utils.getStringConfig('adm.jwt.secret', true),
  adminRecaptchaRequiredScore: utils.getFloatConfig('admin.recaptcha.requiredScore', true),
  adminRecaptchaSecretKey: utils.getStringConfig('admin.recaptcha.secretKey', true),
  appEnvironment: utils.getStringConfig('app.environment', true),
  appJwtSecret: utils.getStringConfig('app.jwt.secret', true),
  appName: utils.getStringConfig('app.name', true),
  appTitle: utils.getStringConfig('app.title', true),
  customerRecaptchaRequiredScore: utils.getStringConfig('customer.recaptcha.requiredScore', true),
  customerRecaptchaSecretKey: utils.getStringConfig('customer.recaptcha.secretKey', true),
  databaseUri: utils.getStringConfig('database.uri', true),
  esCloudId: utils.getStringConfig('es.cloudId', false),
  esNode: utils.getStringConfig('es.node', false),
  esPassword: utils.getStringConfig('es.password', false),
  esTlsRejectUnauthorized: utils.getBooleanConfig('es.tls.rejectUnauthorized', false),
  esUsername: utils.getStringConfig('es.username', false),
  graphqlPlaygroundEnabled: utils.getBooleanConfig('graphql.playground.enabled', true),
  kafkaBrokers: utils.getStringConfig('kafka.brokers', false),
  kafkaEnabled: utils.getBooleanConfig('kafka.enabled', false),
  kafkaPassword: utils.getStringConfig('kafka.password', false),
  kafkaQueueAcks: utils.getIntConfig('kafka.queue.acks', false),
  kafkaQueueDefaultRetryTime: utils.getIntConfig('kafka.queue.defaultRetryTime', false),
  kafkaQueueMaxAttemptsSize: utils.getIntConfig('kafka.queue.maxAttemptsSize', false),
  kafkaQueueStackSize: utils.getIntConfig('kafka.queue.stackSize', false),
  kafkaQueueSupportedVersion: utils.getStringConfig('kafka.queue.supportedVersion', false),
  kafkaQueueWaitingInterruptTime: utils.getIntConfig('kafka.queue.waitingInterruptTime', false),
  kafkaSslRejectUnauthorized: utils.getBooleanConfig('kafka.ssl.rejectUnauthorized', false),
  kafkaUsername: utils.getStringConfig('kafka.username', false),
  logsFormat: utils.getStringConfig('logs.format', true),
  lokiUrl: utils.getStringConfig('loki.url', true),
  s3AccessKeyId: utils.getStringConfig('s3.accessKeyId', true),
  s3SecretAccessKey: utils.getStringConfig('s3.secretAccessKey', true),
  smtpFrom: utils.getStringConfig('smtp.from', false),
  smtpHost: utils.getStringConfig('smtp.host', false),
  smtpPass: utils.getStringConfig('smtp.pass', false),
  smtpPort: utils.getIntConfig('smtp.port', false),
  smtpUser: utils.getStringConfig('smtp.user', false),
};

export type Config = typeof envConfig;

export const getConfig = async (): Promise<Config> => envConfig;
