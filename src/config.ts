// DO NOT EDIT! THIS IS GENERATED FILE

const envConfig = {
  appName: process.env.APP_NAME || '',
  admJwtSecret: process.env.ADM_JWT_SECRET || '',
  appJwtSecret: process.env.APP_JWT_SECRET || '',
  databaseUri: process.env.DATABASE_URI || '',
  s3AccessKeyId: process.env.S3_ACCESS_KEY_ID || '',
  s3SecretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
  smtpFrom: process.env.SMTP_FROM || '',
  smtpHost: process.env.SMTP_HOST || '',
  smtpPass: process.env.SMTP_PASS || '',
  smtpPort: process.env.SMTP_PORT || '',
  smtpUser: process.env.SMTP_USER || '',
};

export type Config = typeof envConfig;

export const getConfig = async (): Promise<Config> => envConfig;
