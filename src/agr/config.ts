/* eslint-disable sort-keys-fix/sort-keys-fix */
import {merge} from 'lodash';
import {readJson} from 'fs-extra';

// DO NOT EDIT! THIS IS GENERATED FILE

import dotenv from 'dotenv';

dotenv.config();

const envConfig = {
  pgUri: process.env.AGR_PG_URI || '',
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
