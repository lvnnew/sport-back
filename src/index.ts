import * as dotenv from 'dotenv';
import exitHook from 'exit-hook';
import {ApolloServer} from 'apollo-server-express';
import {log} from './log';
import schema from './graph/schema';
import {getAgrContext, closeCtx} from './agr/services/context';
import express, {Request, Response} from 'express';
import cors from 'cors';
import passport from 'passport';
import bodyParser from 'body-parser';
import restRouter from './restRouter';
import helmet from 'helmet';
import {collectDefaultMetrics, register} from 'prom-client';
import {initAppPassport} from './app/config/passport';
import {initAdmPassport} from './adm/config/passport';
import appAuthRouter from './app/authRouter';
import admAuthRouter from './adm/authRouter';
import getAppServer from './app/getAppServer';

// DO NOT EDIT! THIS IS GENERATED FILE

dotenv.config();

exitHook(async () => {
  await closeCtx();
});

const app = express();

initAppPassport();
initAdmPassport();

app.use(cors());
app.use(bodyParser.json());
app.use(helmet({contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false}));
app.use(passport.initialize());

app.use('/app/rest', appAuthRouter);
app.use('/adm/rest', admAuthRouter);

app.get('/health', (_: Request, res: Response) => {
  res
    .status(200)
    .send({message: 'Ok'});
});

collectDefaultMetrics();

app.get('/metrics', async (_req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (error) {
    res.status(500).end(error);
  }
});

app.use('/rest', restRouter);

const start = async () => {
  const context = await getAgrContext();

  app.use('/app/graph', passport.authenticate('appJwt', {session: false}));

  getAppServer(context).applyMiddleware({app, path: '/app/graph'});

  const server = new ApolloServer({
    context: ({req}) => ({
      user: req.user,
    }),
    dataSources: () => ({
      ...(context as any),
    }),
    engine: {
      reportSchema: false,
    },
    introspection: true,
    playground: true,
    schema,
  });

  const admGraphPath = '/adm/graph';
  app.use(admGraphPath, passport.authenticate('admJwt', {session: false}));
  server.applyMiddleware({app, path: admGraphPath});

  const port = 3000;
  app.listen({port}, () => {
    log.info(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
  });
};

try {
  start();
} catch (error) {
  log.error(error);
} finally {
  closeCtx();
}
