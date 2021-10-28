import {constantCase} from 'change-case';
import nconf from 'nconf';

// DO NOT EDIT! THIS IS GENERATED FILE

nconf
  .argv()
  .env()
  .file({file: './config/default.json'})
  .file({file: `./config/${process.env.ENV || 'dev'}.json`});

export const getFromNconf = (name: string) => nconf.get(constantCase(name)) || nconf.get(name) || '';

const envConfig = {
  admJwtSecret: getFromNconf('adm.jwt.secret'),
  adminRecaptchaSecretKey: getFromNconf('admin.recaptcha.secretKey'),
  appJwtSecret: getFromNconf('app.jwt.secret'),
  appName: getFromNconf('appName'),
  appTitle: getFromNconf('appTitle'),
  customerRecaptchaSecretKey: getFromNconf('customer.recaptcha.secretKey'),
  databaseUri: getFromNconf('database.uri'),
  logsFormat: getFromNconf('logs.format'),
  lokiUrl: getFromNconf('loki.url'),
  s3AccessKeyId: getFromNconf('s3.accessKeyId'),
  s3SecretAccessKey: getFromNconf('s3.secretAccessKey'),
  smtpFrom: getFromNconf('smtp.from'),
  smtpHost: getFromNconf('smtp.host'),
  smtpPass: getFromNconf('smtp.pass'),
  smtpPort: getFromNconf('smtp.port'),
  smtpUser: getFromNconf('smtp.user'),
};

export type Config = typeof envConfig;

export const getConfig = async (): Promise<Config> => envConfig;
