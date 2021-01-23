import dotenv from 'dotenv';
import core from '@instants/core';
import {log} from './log';

export const getConfig = () => {
  log.info(`config: ${core.jstr(dotenv.config())}`);

  return dotenv.config().parsed || {};
};
