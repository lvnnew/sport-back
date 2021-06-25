/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {readJson} from 'fs-extra';
import dotenv from 'dotenv';
import R from 'ramda';

// DO NOT EDIT! THIS IS GENERATED FILE

dotenv.config();

const envConfig = {
  appName: process.env.APP_NAME || '',
  pgUri: process.env.AGR_PG_URI || '',
  smtpHost: process.env.AGR_SMTP_HOST || '',
  smtpPort: process.env.AGR_SMTP_PORT || '',
  smtpUser: process.env.AGR_SMTP_USER || '',
  smtpPass: process.env.AGR_SMTP_PASS || '',
  smtpFrom: process.env.AGR_SMTP_FROM || '',
};

export type Config = typeof envConfig;

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const getConfig = async (): Promise<Config> => {
  if (process.env.AGR_CONFIG_PATH) {
    const fromFile = await readJson(process.env.AGR_CONFIG_PATH);

    return R.merge(envConfig, fromFile) as typeof envConfig;
  } else {
    return envConfig;
  }
};
