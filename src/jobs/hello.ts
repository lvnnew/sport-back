import {JobHelpers} from 'graphile-worker';

export const hello = async (payload: any, helpers: JobHelpers) => {
  const {name} = payload;
  helpers.logger.info(`Hello, ${name}`);
};
