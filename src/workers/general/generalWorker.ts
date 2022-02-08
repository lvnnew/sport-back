import log from '../../log';
import exitHook from 'exit-hook';
import express from 'express';
import {collectDefaultMetrics, register} from 'prom-client';
import {run, parseCronItems} from 'graphile-worker';
import {getConfig} from '../../config';
import generalJobs from './generalJobs';
import {generalCronJobs} from './generalCronJobs';
import {createContext} from '../../adm/services/context';
import {addParamsToDatabaseUri} from '../../utils/addParamsToPgUri';
import jobsFromFunctions from '../../jobs/jobsFromFunctions';
import {graphileLogger} from '../utils';
import healthRouter from '../../rest/healthRouter';

// yarn ts-node src/workers/general/generalWorker.ts

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

const generalWorker = async (appName = 'someBack_generalWorker') => {
  const config = await getConfig();
  if (!config.databaseUri) {
    throw new Error('Database Uri is not provided');
  }

  const runner = await run({
    connectionString: addParamsToDatabaseUri(config.databaseUri, {
      application_name: appName,
      ...(process.env.NODE_ENV === 'production' ? {} : {connection_limit: '1'}),
    }),
    concurrency: 3,
    noHandleSignals: false,
    pollInterval: 1000,
    taskList: jobsFromFunctions(generalJobs),
    parsedCronItems: parseCronItems(generalCronJobs),
    logger: graphileLogger,
  });
  log.info('start');
  await runner.promise;
};

generalWorker();
