import log from '../../log';
import {exitHook} from '../../utils/exitHook';
import express from 'express';
import {collectDefaultMetrics, register} from 'prom-client';
import {run} from 'graphile-worker';
import {getConfig} from '../../config';
import emailsJobs from './emailsJobs';
import {createContext} from '../../adm/services/context';
import {addParamsToDatabaseUri} from '../../utils/addParamsToPgUri';
import {jobsFromFunctions, graphileLogger} from '../utils';
import healthRouter from '../../rest/healthRouter';

// yarn ts-node src/workers/emails/emailsWorker.ts
// yarn ts-node src/workers/emails/emailsWorker.ts

exitHook(() => createContext().then(ctx => ctx.close()));

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
  app
    .listen({port}, () => {
      log.info(`🚀 Server ready at http://localhost:${port}`);
    })
    .on('error', (error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      throw error;
    });
};

startExpress()
  .catch(error => log.error(error));

const emailsWorker = async (appName = 'someBack_emailsWorker') => {
  const {databaseMainWriteUri} = await getConfig();
  if (!databaseMainWriteUri) {
    throw new Error('Database Uri is not provided');
  }

  const runner = await run({
    connectionString: addParamsToDatabaseUri(databaseMainWriteUri, {
      application_name: appName,
      ...(process.env.NODE_ENV === 'production' ? {} : {connection_limit: '1'}),
    }),
    concurrency: 1,
    noHandleSignals: false,
    pollInterval: 1000,
    taskList: jobsFromFunctions(emailsJobs),
    logger: graphileLogger,
    noPreparedStatements: true,
  });
  log.info('start');
  await runner.promise;
};

emailsWorker();
