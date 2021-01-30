import * as dotenv from 'dotenv';
import {ApolloServer} from 'apollo-server-express';
import {log} from './log';
import schema from './graph/schema';
import {getAgrContext} from './agr/services/context';
import {getAgrConfig} from './agr/config';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());

getAgrConfig().then(agrConfig => log.info(agrConfig));

const init = async () => {
  const context = await getAgrContext();

  const server = new ApolloServer({
    dataSources: () => ({
      // ...({} as any),

      ...(context as any),
    }),
    engine: {
      reportSchema: false,

      // reportSchema: true,
    },
    introspection: true,
    mockEntireSchema: false,
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
