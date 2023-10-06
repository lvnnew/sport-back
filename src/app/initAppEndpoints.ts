import log from '../log';
import {RequestHandler, Express} from 'express';
import passport from 'passport';
import {initAppPassport} from './config/passport';
import appAuthRouter from './authRouter';
import getAppServer from './getAppServer';
import {graphqlUploadExpress} from 'graphql-upload';
import {Context} from '../adm/services/types';

const initAppEndpoints = async (
  app: Express,
  _ctx: Context,
  _port: number,
  _production: boolean,
) => {
  log.info('initRestEndpoints');

  const endpoints: string[] = [];

  initAppPassport();

  app.use('/app/rest', appAuthRouter);

  app.use('/app/graph', passport.authenticate('appJwt', {session: false}));
  app.use('/app/graph', graphqlUploadExpress({maxFiles: 10, maxFileSize: 50 * 1024 * 1024}) as RequestHandler);

  const appServer = getAppServer();
  await appServer.start();
  appServer.applyMiddleware({app, path: '/app/graph'});

  return endpoints;
};

export default initAppEndpoints;
