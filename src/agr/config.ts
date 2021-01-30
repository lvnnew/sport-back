import {merge} from 'lodash';
import {readJson} from 'fs-extra';

import dotenv from 'dotenv';

dotenv.config();

const envConfig = {
  database: {
    uri: process.env.AGR_PG_URI || '',
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
