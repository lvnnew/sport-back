import {getQueue} from '../clients/queue/getQueue';
import {CronItem, JobHelpers} from 'graphile-worker';
import {Job} from '../clients/queue/jobs/Job';
import * as R from 'ramda';
import log from '../log';
import {fromPairs, toPairs} from 'ramda';
import {Summary} from 'prom-client';
import {Logger, LogScope} from 'graphile-worker/dist/logger';
import {getConfig} from '../config';
import {jobsCount} from '../clients/queue/jobsCount';
import paginateArray from '../utils/paginateArray';
import {Context} from '../adm/services/types';

export const getHourlyCronPattern = () => `${Math.floor(Math.random() * 59)} * * * *`;

export const getFiveMinsCronPattern = () => '*/5 * * * *';

export const getTenMinsCronPattern = () => '*/5 * * * *';

export const getOneMinCronPattern = () => '* * * * *';

export const getSixHoursCronPattern = () => `${Math.floor(Math.random() * 59)} */6 * * *`;

export const getTwiceADayCronPattern = () => `${Math.floor(Math.random() * 59)} */12 * * *`;

export const getOnceADayCronPattern = () => `${Math.floor(Math.random() * 59)} ${Math.floor(Math.random() * 23)} * * *`;

export const constructCron = (
  name: string,
  identifier: string,
  pattern: string,
  queued = false,
  priority = 0, // jobs with a numerically smaller priority are run first
): CronItem => ({
  task: name,
  pattern,
  options: {
    queueName: queued ? name : undefined,
    backfillPeriod: 0,
    priority,
  },
  payload: {},
  identifier,
});

export const hourlyCron = (name: string, queued = false, priority = 0): CronItem =>
  constructCron(name, `${name}Hourly`, getHourlyCronPattern(), queued, priority);

export const fiveMinsCron = (name: string, queued = false, priority = 0): CronItem =>
  constructCron(name, `${name}FiveMins`, getFiveMinsCronPattern(), queued, priority);

export const tenMinsCron = (name: string, queued = false, priority = 0): CronItem =>
  constructCron(name, `${name}TenMins`, getTenMinsCronPattern(), queued, priority);

export const oneMinCron = (name: string, queued = false, priority = 0): CronItem =>
  constructCron(name, `${name}OneMin`, getOneMinCronPattern(), queued, priority);

export const onceInSixHoursCron = (name: string, queued = false, priority = 0): CronItem =>
  constructCron(name, `${name}OnceInSixHours`, getSixHoursCronPattern(), queued, priority);

export const twiceADayPatternCron = (name: string, queued = false, priority = 0): CronItem =>
  constructCron(name, `${name}TwiceADay`, getTwiceADayCronPattern(), queued, priority);

export const onceADayPatternCron = (name: string, queued = false, priority = 0): CronItem =>
  constructCron(name, `${name}OnceADay`, getOnceADayCronPattern(), queued, priority);

export const getQueueJobs = <T extends Record<string, any>>(jobs: T) => R.fromPairs(
  R.toPairs(
    jobs,
  ).map(
    ([jobName]) => [jobName, async (payload: any) => {
      // log.info(`jobName: ${jobName}`);
      const queue = await getQueue();

      await queue.addJob(jobName as unknown as Job, payload);
    }],
  ),
) as T;

function logFactory(scope: LogScope) {
  return (level: any, message: any, meta: any) => {
    log[level](
      message, {
        scope,
        meta,
      },
    );
  };
}

export const graphileLogger = new Logger(logFactory);

const jobSummary = new Summary({
  name: 'job_summary',
  help: 'job_summary',
  labelNames: ['appName', 'jobName', 'status', 'queue'],
});

export const jobsFromFunctions = (
  fns: Record<string, (payload: any, helpers: JobHelpers) => Promise<void>>,
) => fromPairs(
  toPairs(fns).map(([name, handler]) => {
    const overridedHandler = async (payload: any, helpers: JobHelpers): Promise<void> => {
      const {appName} = await getConfig();
      const end = jobSummary.startTimer({
        appName,
        jobName: helpers.job.task_identifier,
        queue: helpers.job.queue_name || undefined,
      });
      try {
        log.info(`job: ${name}`);
        await handler(payload, helpers);
      } catch (error: any) {
        end({status: 'error'});
        log.error(
          error.message,
          {
            jobName: name,
          },
        );
        throw error;
      }

      end({status: 'success'});
    };

    return [name, overridedHandler];
  }),
);

export const schedule = async <Payload>(ctx: Context, jobName: Job, job: (payload: Payload) => void, ifLessThan: number, scheduleUpTo: number, payloads: Payload[]) => {
  const currentCount = await jobsCount(ctx, jobName);
  // log.info(`currentCount: ${currentCount}`);

  if (currentCount >= ifLessThan) {
    return;
  }

  const countOfJobsToAdd = Math.max(scheduleUpTo - currentCount, 0);
  // log.info(`countOfJobsToAdd: ${countOfJobsToAdd}`);

  const slicedPayloads = payloads.slice(0, countOfJobsToAdd);
  // log.info(`slicedPayloads count: ${slicedPayloads.length}`);

  const batchSize = 10000;
  // log.info(`batchSize: ${batchSize}`);
  const batchCount = Math.ceil(slicedPayloads.length / batchSize);
  // log.info(`batchCount: ${batchCount}`);

  const handle = async (payloads: Payload[]) => {
    for (const payload of payloads) {
      await job(payload);
    }
  };

  const pageBatches: Payload[][] = [];
  for (let batchNum = 1; batchNum <= batchCount; batchNum++) {
    const batch = paginateArray(slicedPayloads, batchNum, batchSize).data;
    pageBatches.push(batch);
  }

  await Promise.all(pageBatches.map(batch => handle(batch)));
};
