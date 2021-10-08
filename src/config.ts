import {constantCase} from 'change-case';
import nconf from 'nconf';

// DO NOT EDIT! THIS IS GENERATED FILE

nconf
  .argv()
  .env()
  .file({file: './config/default.json'})
  .file({file: `./config/${process.env.ENV || 'dev'}.json`});

const getFromNconf = (name: string) => nconf.get(constantCase(name)) || nconf.get(name) || '';

const envConfig = {
  admJwtSecret: getFromNconf('adm.jwt.secret'),
  appJwtSecret: getFromNconf('app.jwt.secret'),
  appName: getFromNconf('appName'),
  appTitle: getFromNconf('appTitle'),
  databaseUri: getFromNconf('database.uri'),
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
