import {constantCase} from 'change-case';
import nconf from 'nconf';
import {exists, read} from 'fs-jetpack';

// DO NOT EDIT! THIS IS GENERATED FILE

nconf
  .argv()
  .env()
  .file({file: './config/default.json'});

const developerRunlifyConfig = read('runlify.developer.json', 'json');

const envName = process.env.ENV || developerRunlifyConfig.defaultEnvironment;
const file = `./config/${envName}.json`;

if (exists(file)) {
  nconf.file({file});
}

export const getFromNconf = (name: string): string | undefined => nconf.get(constantCase(name)) || nconf.get(name) || '';

const envConfig = {
  admJwtSecret: getFromNconf('adm.jwt.secret'),
  adminRecaptchaRequiredScore: getFromNconf('admin.recaptcha.requiredScore'),
  adminRecaptchaSecretKey: getFromNconf('admin.recaptcha.secretKey'),
  appJwtSecret: getFromNconf('app.jwt.secret'),
  appName: getFromNconf('appName'),
  appTitle: getFromNconf('appTitle'),
  cliToken: getFromNconf('cli.token'),
  clockifyApiKey: getFromNconf('clockify.apiKey'),
  credentialsSecretKey: getFromNconf('credentials.secretKey'),
  customerRecaptchaRequiredScore: getFromNconf('customer.recaptcha.requiredScore'),
  customerRecaptchaSecretKey: getFromNconf('customer.recaptcha.secretKey'),
  databaseUri: getFromNconf('database.uri'),
  gitlabApiToken: getFromNconf('gitlab.apiToken'),
  graphqlPlaygroundEnabled: getFromNconf('graphql.playground.enabled'),
  logsFormat: getFromNconf('logs.format'),
  lokiUrl: getFromNconf('loki.url'),
  notionDbId: getFromNconf('notion.dbId'),
  notionToken: getFromNconf('notion.token'),
  rancherStage01Token: getFromNconf('rancher.stage01.token'),
  rancherStage01Url: getFromNconf('rancher.stage01.url'),
  rancherWorkers01Token: getFromNconf('rancher.workers01.token'),
  rancherWorkers01Url: getFromNconf('rancher.workers01.url'),
  s3AccessKeyId: getFromNconf('s3.accessKeyId'),
  s3SecretAccessKey: getFromNconf('s3.secretAccessKey'),
  scalewayElementsGitlabRunnersAuthToken: getFromNconf('scaleway.elements.gitlabRunners.authToken'),
  scalewayElementsStageDatabasesAuthToken: getFromNconf('scaleway.elements.stageDatabases.authToken'),
  scalewayElementsStageDatabasesStageDbInstance: getFromNconf('scaleway.elements.stageDatabases.stageDbInstance'),
  scalewayElementsStageDatabasesStageDbRegion: getFromNconf('scaleway.elements.stageDatabases.stageDbRegion'),
  smtpFrom: getFromNconf('smtp.from'),
  smtpHost: getFromNconf('smtp.host'),
  smtpPass: getFromNconf('smtp.pass'),
  smtpPort: getFromNconf('smtp.port'),
  smtpUser: getFromNconf('smtp.user'),
  telegramAdminUserIds: getFromNconf('telegram.adminUserIds'),
  telegramAppApiHash: getFromNconf('telegram.app.apiHash'),
  telegramAppApiId: getFromNconf('telegram.app.apiId'),
  telegramAppSession: getFromNconf('telegram.app.session'),
  telegramToken: getFromNconf('telegram.token'),
};

export type Config = typeof envConfig;

export const getConfig = async (): Promise<Config> => envConfig;
