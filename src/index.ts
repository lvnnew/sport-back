import * as dotenv from 'dotenv';
import {ApolloServer} from 'apollo-server-express';
import {log} from './log';
import schema from './graph/schema';
import {getAgrContext} from './agr/services/context';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import restRouter from './restRouter';
import {collectDefaultMetrics, register} from 'prom-client';

// DO NOT EDIT! THIS IS GENERATED FILE

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

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

const init = async () => {
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

init()
  .catch(error => log.error(error));
