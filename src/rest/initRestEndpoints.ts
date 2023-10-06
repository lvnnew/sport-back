import log from '../log';
import {Express} from 'express';
import restRouter from './restRouter';
import {Context} from '../adm/services/types';

const initRestEndpoints = async (
  app: Express,
  _ctx: Context,
  _port: number,
  _production: boolean,
) => {
  log.info('initRestEndpoints');

  const endpoints: string[] = [];

  app.use('/rest', restRouter);

  return endpoints;
};

export default initRestEndpoints;
