import nconf from 'nconf';

// DO NOT EDIT! THIS IS GENERATED FILE

nconf
  .argv()
  .env()
  .file({file: './config/default.json'})
  .file({file: `./config/${process.env.ENV || 'dev'}.json`});

const envConfig = {
  admJwtSecret: nconf.get('ADM_JWT_SECRET') || nconf.get('adm.jwt.secret') || '',
  appJwtSecret: nconf.get('APP_JWT_SECRET') || nconf.get('app.jwt.secret') || '',
  databaseUri: nconf.get('DATABASE_URI') || nconf.get('database.uri') || '',
  s3AccessKeyId: nconf.get('S3_ACCESS_KEY_ID') || nconf.get('s3.accessKeyId') || '',
  s3SecretAccessKey: nconf.get('S3_SECRET_ACCESS_KEY') || nconf.get('s3.secretAccessKey') || '',
  smtpFrom: nconf.get('SMTP_FROM') || nconf.get('smtp.from') || '',
  smtpHost: nconf.get('SMTP_HOST') || nconf.get('smtp.host') || '',
  smtpPass: nconf.get('SMTP_PASS') || nconf.get('smtp.pass') || '',
  smtpPort: nconf.get('SMTP_PORT') || nconf.get('smtp.port') || '',
  smtpUser: nconf.get('SMTP_USER') || nconf.get('smtp.user') || '',
};

export type Config = typeof envConfig;

export const getConfig = async (): Promise<Config> => envConfig;
