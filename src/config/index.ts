/* eslint-disable max-len */
import {constantCase} from 'change-case';
import nconf from 'nconf';
import {exists, read} from 'fs-jetpack';
import getConfigUtils from './getConfigUtils';
import {ValueBasedOnRequired} from './types';

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

export const getFromNconf = <T extends boolean>(name: string, required?: T): ValueBasedOnRequired<T, string> => {
  const value = nconf.get(constantCase(name)) || nconf.get(name);

  if (required && value === undefined) {
    throw new Error(`Config var "${name}" is required`);
  }

  return value;
};

const utils = getConfigUtils(getFromNconf);

const envConfig = {
  admJwtSecret: utils.getStringConfig('adm.jwt.secret', false),
  adminRecaptchaRequiredScore: utils.getFloatConfig('admin.recaptcha.requiredScore', false),
  adminRecaptchaSecretKey: utils.getStringConfig('admin.recaptcha.secretKey', false),
  adminUiUrl: utils.getStringConfig('admin.ui.url', false),
  appEnvironment: utils.getStringConfig('app.environment', true),
  appJwtSecret: utils.getStringConfig('app.jwt.secret', false),
  appName: utils.getStringConfig('app.name', true),
  appTitle: utils.getStringConfig('app.title', false),
  appUiUrl: utils.getStringConfig('app.ui.url', false),
  authorizationBackendChecksEnabled: utils.getBooleanConfig('authorization.backendChecks.enabled', false),
  bootstrapEnabled: utils.getBooleanConfig('bootstrap.enabled', false),
  customerRecaptchaRequiredScore: utils.getStringConfig('customer.recaptcha.requiredScore', false),
  customerRecaptchaSecretKey: utils.getStringConfig('customer.recaptcha.secretKey', false),
  databaseMainMigrationUri: utils.getStringConfig('database.main.migration.uri', true),
  databaseMainReadOnlyEnabled: utils.getBooleanConfig('database.main.readOnly.enabled', true),
  databaseMainReadOnlyUri: utils.getStringConfig('database.main.readOnly.uri', false),
  databaseMainWriteUri: utils.getStringConfig('database.main.write.uri', true),
  esCloudId: utils.getStringConfig('es.cloudId', false),
  esEnabled: utils.getBooleanConfig('es.enabled', false),
  esNode: utils.getStringConfig('es.node', false),
  esPassword: utils.getStringConfig('es.password', false),
  esTlsRejectUnauthorized: utils.getBooleanConfig('es.tls.rejectUnauthorized', false),
  esUsername: utils.getStringConfig('es.username', false),
  graphqlPlaygroundEnabled: utils.getBooleanConfig('graphql.playground.enabled', false),
  kafkaAuthEnabled: utils.getBooleanConfig('kafka.auth.enabled', true),
  kafkaBrokers: utils.getStringConfig('kafka.brokers', false),
  kafkaEnabled: utils.getBooleanConfig('kafka.enabled', false),
  kafkaPassword: utils.getStringConfig('kafka.password', false),
  kafkaQueueAcks: utils.getIntConfig('kafka.queue.acks', false),
  kafkaQueueDefaultRetryTime: utils.getIntConfig('kafka.queue.defaultRetryTime', false),
  kafkaQueueMaxAttemptsSize: utils.getIntConfig('kafka.queue.maxAttemptsSize', false),
  kafkaQueueStackSize: utils.getIntConfig('kafka.queue.stackSize', false),
  kafkaQueueSupportedVersion: utils.getStringConfig('kafka.queue.supportedVersion', false),
  kafkaQueueWaitingInterruptTime: utils.getIntConfig('kafka.queue.waitingInterruptTime', false),
  kafkaSslEnabled: utils.getBooleanConfig('kafka.ssl.enabled', true),
  kafkaSslRejectUnauthorized: utils.getBooleanConfig('kafka.ssl.rejectUnauthorized', false),
  kafkaUsername: utils.getStringConfig('kafka.username', false),
  logsFormat: utils.getStringConfig('logs.format', false),
  lokiUrl: utils.getStringConfig('loki.url', false),
  s3AccessKeyId: utils.getStringConfig('s3.accessKeyId', true),
  s3BucketEmailFiles: utils.getStringConfig('s3.bucket.emailFiles', true),
  s3BucketTmpFilesToDownload: utils.getStringConfig('s3.bucket.tmpFilesToDownload', true),
  s3Endpoint: utils.getStringConfig('s3.endpoint', true),
  s3Region: utils.getStringConfig('s3.region', true),
  s3SecretAccessKey: utils.getStringConfig('s3.secretAccessKey', true),
  smtpFrom: utils.getStringConfig('smtp.from', false),
  smtpHost: utils.getStringConfig('smtp.host', false),
  smtpPass: utils.getStringConfig('smtp.pass', false),
  smtpPort: utils.getIntConfig('smtp.port', false),
  smtpUser: utils.getStringConfig('smtp.user', false),
};

export type Config = typeof envConfig;

export const getConfig = async (): Promise<Config> => envConfig;
