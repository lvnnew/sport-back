import log from './log';
import {createContext} from './adm/services/context';
import express from 'express';
import defaultContainer from './adm/services/defaultContainer';
import initEndpoints from './initEndpoints';

// DO NOT EDIT! THIS IS GENERATED FILE

const app = express();

const start = async () => {
  const ctx = await createContext(defaultContainer);
  const port = 3000;

  const production = process.env.NODE_ENV === 'production';
  log.info(`production: ${production}`);

  const endpoints = await initEndpoints(app, ctx, port, production);

  app.listen({port}, () => {
    log.info('\n' + endpoints.map(e => `🚀 Server ready at ${e}`).join('\n'));
  });
};

start().catch(error => {
  // eslint-disable-next-line no-console
  console.error(error);

  throw error;
});
