import log from '../log';
import {RequestHandler, Express} from 'express';
import passport from 'passport';
import {initAdmPassport} from './config/passport';
import admAuthRouter from './authRouter';
import {graphqlUploadExpress} from 'graphql-upload';
import expressPlayground from 'graphql-playground-middleware-express';
import getAdmServer from './getAdmServer';
import {Context} from './services/types';

const initAdmEndpoints = async (
  app: Express,
  ctx: Context,
  port: number,
  production: boolean,
) => {
  log.info('initAdmEndpoints');

  const endpoints: string[] = [];

  initAdmPassport();

  app.use('/adm/rest', admAuthRouter);

  const admServer = getAdmServer();

  const admGraphPath = '/adm/graph';
  app.use(admGraphPath, passport.authenticate('admJwt', {session: false}));
  app.use(admGraphPath, graphqlUploadExpress({maxFiles: 10, maxFileSize: 50 * 1024 * 1024}) as RequestHandler);

  await admServer.start();

  admServer.applyMiddleware({app, path: admGraphPath});

  ctx.service('stats').updateGauges();

  const graphEndpoint = `http://localhost:${port}${admServer.graphqlPath}`;

  endpoints.push(graphEndpoint);

  if (!production) {
    app.get(
      '/playground',
      expressPlayground({
        endpoint: graphEndpoint,
      }),
    );

    endpoints.push(`http://localhost:${port}/playground`);
  }

  return endpoints;
};

export default initAdmEndpoints;
