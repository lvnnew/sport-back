import {log} from '../log';

export const hello = async (payload: {name: string}) => {
  const {name} = payload;
  log.info(`name: ${name}`);
};
