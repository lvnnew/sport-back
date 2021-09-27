import {readJson} from 'fs-extra';
import dotenv from 'dotenv';
import * as R from 'ramda';

// DO NOT EDIT! THIS IS GENERATED FILE

dotenv.config();

const envConfig = {
  appName: process.env.APP_NAME || '',
  databaseUri: process.env.AGR_DATABASE_URI || '',
  admJwtSecret: process.env.AGR_ADM_JWT_SECRET || '',
  appJwtSecret: process.env.AGR_APP_JWT_SECRET || '',
  s3AccessKeyId: process.env.AGR_S3_ACCESS_KEY_ID || '',
  s3SecretAccessKey: process.env.AGR_S3_SECRET_ACCESS_KEY || '',
  smtpHost: process.env.AGR_SMTP_HOST || '',
  smtpPort: process.env.AGR_SMTP_PORT || '',
  smtpUser: process.env.AGR_SMTP_USER || '',
  smtpPass: process.env.AGR_SMTP_PASS || '',
  smtpFrom: process.env.AGR_SMTP_FROM || '',
};

export type Config = typeof envConfig;

export const getConfig = async (): Promise<Config> => {
  if (process.env.AGR_CONFIG_PATH) {
    const fromFile = await readJson(process.env.AGR_CONFIG_PATH);

    return R.merge(envConfig, fromFile) as typeof envConfig;
  } else {
    return envConfig;
  }
};
