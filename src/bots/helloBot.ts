import log from '../log';
import exitHook from 'exit-hook';
import express from 'express';
import {collectDefaultMetrics, register} from 'prom-client';
import {createContext} from '../adm/services/context';
import healthRouter from '../rest/healthRouter';

// yarn ts-node src/bots/helloBot.ts

exitHook(async () => {
  createContext().then(ctx => ctx.close());
});

const app = express();

app.use('/health', healthRouter);

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
