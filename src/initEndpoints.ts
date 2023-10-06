import {Express} from 'express';
import {Context} from './adm/services/types';
import initAdmEndpoints from './adm/initAdmEndpoints';
import initRestEndpoints from './rest/initRestEndpoints';
import initAppEndpoints from './app/initAppEndpoints';
import initEndpointsCommon from './initEndpointsCommon';

const initEndpoints = async (
  app: Express,
  ctx: Context,
  port: number,
  production: boolean,
) => [
  ...await initEndpointsCommon(app, ctx, port, production),
  ...await initAdmEndpoints(app, ctx, port, production),
  ...await initRestEndpoints(app, ctx, port, production),
  ...await initAppEndpoints(app, ctx, port, production),
];

export default initEndpoints;
