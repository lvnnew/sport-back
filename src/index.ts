import * as dotenv from 'dotenv';
import {ApolloServer} from 'apollo-server-express';
import {log} from './log';
import schema from './graph/schema';
import {getAgrContext} from './agr/services/context';
import {getAgrConfig} from './agr/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import restRouter from './restRouter';

// DO NOT EDIT! THIS IS GENERATED FILE

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/rest', restRouter);

getAgrConfig().then(agrConfig => log.info(agrConfig));

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
