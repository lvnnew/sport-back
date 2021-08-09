/* eslint-disable promise/prefer-await-to-callbacks */
import {log} from '../log';
import exitHook from 'exit-hook';
import express, {Request, Response} from 'express';
import {collectDefaultMetrics, register} from 'prom-client';
import {run, parseCronItems} from 'graphile-worker';
import {getConfig} from '../config';
import {generalJobs} from './generalJobs';
import {cronJobs} from './cronJobs';
import {closeCtx} from '../adm/services/context';
import {addParamsToPgUri} from '../utils/addParamsToPgUri';

// yarn ts-node src/cli/generalWorker.ts

exitHook(async () => {
  await closeCtx();
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
  } catch (error) {
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

const generalWorker = async (appName = 'someBack_generalWorker') => {
  const config = await getConfig();
  const runner = await run({
    connectionString: addParamsToPgUri(config.pgUri, {
      application_name: appName,
      ...(process.env.NODE_ENV === 'production' ? {} : {connection_limit: '1'}),
    }),
    concurrency: 3,
    noHandleSignals: false,
    pollInterval: 1000,
    taskList: generalJobs,
    parsedCronItems: parseCronItems(cronJobs),
  });
  log.info('start');
  await runner.promise;
};

generalWorker();
