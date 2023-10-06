import log from './log';
import {RequestHandler, Express} from 'express';
import cors from 'cors';
import passport from 'passport';
import {json, raw} from 'body-parser';
import helmet from 'helmet';
import healthRouter from './rest/healthRouter';
import getMetricsHandler from './rest/getMetricsHandler';
import {Context} from './adm/services/types';

const initEndpointsCommon = async (
  app: Express,
  ctx: Context,
  _port: number,
  production: boolean,
) => {
  log.info('initEndpointsCommon');

  const endpoints: string[] = [];

  app.use(cors());
  app.use(raw({limit: '50mb'}) as RequestHandler);
  app.use(json({limit: '1mb'}) as RequestHandler);
  app.use(
  helmet(
    {
      contentSecurityPolicy: production ? undefined : false,
      crossOriginEmbedderPolicy: production ? undefined : false,
    },
  ) as RequestHandler,
  );
  app.use(passport.initialize() as RequestHandler);

  app.use('/health', healthRouter);

  app.get('/metrics', getMetricsHandler(ctx));

  return endpoints;
};

export default initEndpointsCommon;
