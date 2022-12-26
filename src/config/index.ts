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
  esCloudId: utils.getStringConfig('es.cloudId', true),
  esNode: utils.getStringConfig('es.node', true),
  esPassword: utils.getStringConfig('es.password', true),
  esTlsRejectUnauthorized: utils.getBooleanConfig('es.tls.rejectUnauthorized', true),
  esUsername: utils.getStringConfig('es.username', true),
  graphqlPlaygroundEnabled: utils.getBooleanConfig('graphql.playground.enabled', true),
  kafkaBrokers: utils.getStringConfig('kafka.brokers', true),
  kafkaEnabled: utils.getBooleanConfig('kafka.enabled', true),
  kafkaPassword: utils.getStringConfig('kafka.password', true),
  kafkaQueueAcks: utils.getIntConfig('kafka.queue.acks', true),
  kafkaQueueDefaultRetryTime: utils.getIntConfig('kafka.queue.defaultRetryTime', true),
  kafkaQueueMaxAttemptsSize: utils.getIntConfig('kafka.queue.maxAttemptsSize', true),
  kafkaQueueStackSize: utils.getIntConfig('kafka.queue.stackSize', true),
  kafkaQueueSupportedVersion: utils.getStringConfig('kafka.queue.supportedVersion', true),
  kafkaQueueWaitingInterruptTime: utils.getIntConfig('kafka.queue.waitingInterruptTime', true),
  kafkaSslRejectUnauthorized: utils.getBooleanConfig('kafka.ssl.rejectUnauthorized', true),
  kafkaUsername: utils.getStringConfig('kafka.username', true),
  logsFormat: utils.getStringConfig('logs.format', true),
  lokiUrl: utils.getStringConfig('loki.url', true),
  s3AccessKeyId: utils.getStringConfig('s3.accessKeyId', true),
  s3SecretAccessKey: utils.getStringConfig('s3.secretAccessKey', true),
  smtpFrom: utils.getStringConfig('smtp.from', ),
  smtpHost: utils.getStringConfig('smtp.host', ),
  smtpPass: utils.getStringConfig('smtp.pass', ),
  smtpPort: utils.getIntConfig('smtp.port', ),
  smtpUser: utils.getStringConfig('smtp.user', ),
};

export type Config = typeof envConfig;

export const getConfig = async (): Promise<Config> => envConfig;
