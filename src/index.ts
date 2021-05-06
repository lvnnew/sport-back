import * as dotenv from 'dotenv';
import exitHook from 'exit-hook';
import {ApolloServer} from 'apollo-server-express';
import {log} from './log';
import schema from './graph/schema';
import {getAgrContext, closeCtx} from './agr/services/context';
import express, {Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import restRouter from './restRouter';
import {collectDefaultMetrics, register} from 'prom-client';

// DO NOT EDIT! THIS IS GENERATED FILE

dotenv.config();

exitHook(async () => {
  await closeCtx();
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

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

  const server = new ApolloServer({
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

  server.applyMiddleware({app, path: '/'});

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
