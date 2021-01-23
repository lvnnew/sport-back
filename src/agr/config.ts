import {merge} from 'lodash';
import {readJson} from 'fs-extra';

import dotenv from 'dotenv';

dotenv.config();

const envConfig = {
  database: {
    host: process.env.AGR_PG_HOST || '',
    name: process.env.AGR_PG_DATABASE || '',
    password: process.env.AGR_PG_PASSWORD || '',
    port: process.env.AGR_PG_PORT || '',
    uri: process.env.AGR_PG_URI || '',
    user: process.env.AGR_PG_USER || '',
  },
};

export type AgrConfig = typeof envConfig;

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const getAgrConfig = async (): Promise<AgrConfig> => {
  if (process.env.AGR_CONFIG_PATH) {
    const fromFile = readJson(process.env.AGR_CONFIG_PATH);

    return merge(envConfig, fromFile) as typeof envConfig;
  } else {
    return envConfig;
  }
};
