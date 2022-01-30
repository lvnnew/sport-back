/* eslint-disable promise/prefer-await-to-callbacks */
import log from '../log';
import exitHook from 'exit-hook';
import express, {Request, Response} from 'express';
import {collectDefaultMetrics, register} from 'prom-client';
import {createContext} from '../adm/services/context';

// yarn ts-node src/bots/helloBot.ts

exitHook(async () => {
  createContext().then(ctx => ctx.close());
});

const app = express();

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
  } catch (error: any) {
    res.status(500).end(error);
  }
});

const startExpress = async () => {
  const port = 3000;
  app.listen({port}, () => {
    log.info(`🚀 Server ready at http://localhost:${port}`);
  });
};

startExpress()
  .catch(error => log.error(error));
