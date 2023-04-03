import getQueue from '../clients/queue/getQueue';
import {CronItem, JobHelpers} from 'graphile-worker';
import {Job} from '../clients/queue/Job';
import * as R from 'ramda';
import log from '../log';
import {fromPairs, toPairs} from 'ramda';
import {Summary} from 'prom-client';
import {Logger, LogScope} from 'graphile-worker/dist/logger';
import {getConfig} from '../config';

export const getHourlyCronPattern = () => `${Math.floor(Math.random() * 59)} * * * *`;

export const getFiveMinsCronPattern = () => '*/5 * * * *';

export const getTenMinsCronPattern = () => '*/5 * * * *';

export const getOneMinCronPattern = () => '* * * * *';

export const getSixHoursCronPattern = () => `${Math.floor(Math.random() * 59)} */6 * * *`;

export const getTwiceADayCronPattern = () => `${Math.floor(Math.random() * 59)} */12 * * *`;

export const getOnceADayCronPattern = () => `${Math.floor(Math.random() * 59)} ${Math.floor(Math.random() * 23)} * * *`;

export const getFiveHoursEveryFirstToFifthDayOfMonthCronPattern = () => '0 */5 1-5 * *';

export const getEveryHourEveryFirstToFifthDayOfMonthCronPattern = () => '0 */1 1-5 * *';

export const getEveryThreeHoursEveryFirstToFifthDayOfMonthCronPattern = () => '0 */3 1-5 * *';

export const constructCron = (
  name: string,
  identifier: string,
  pattern: string,
  queued = false,
  priority = 0, // jobs with a numerically smaller priority are run first
  maxAttempts = 25,
): CronItem => ({
  task: name,
  pattern,
  options: {
    queueName: queued ? name : undefined,
    backfillPeriod: 0,
    priority,
    maxAttempts,
  },
  payload: {},
  identifier,
});

export const hourlyCron = (name: string, queued = false, priority = 0, maxAttempts = 25): CronItem =>
  constructCron(name, `${name}Hourly`, getHourlyCronPattern(), queued, priority, maxAttempts);

export const fiveMinsCron = (name: string, queued = false, priority = 0, maxAttempts = 25): CronItem =>
  constructCron(name, `${name}FiveMins`, getFiveMinsCronPattern(), queued, priority, maxAttempts);

export const tenMinsCron = (name: string, queued = false, priority = 0, maxAttempts = 25): CronItem =>
  constructCron(name, `${name}TenMins`, getTenMinsCronPattern(), queued, priority, maxAttempts);

export const oneMinCron = (name: string, queued = false, priority = 0, maxAttempts = 25): CronItem =>
  constructCron(name, `${name}OneMin`, getOneMinCronPattern(), queued, priority, maxAttempts);

export const onceInSixHoursCron = (name: string, queued = false, priority = 0, maxAttempts = 25): CronItem =>
  constructCron(name, `${name}OnceInSixHours`, getSixHoursCronPattern(), queued, priority, maxAttempts);

export const twiceADayPatternCron = (name: string, queued = false, priority = 0, maxAttempts = 25): CronItem =>
  constructCron(name, `${name}TwiceADay`, getTwiceADayCronPattern(), queued, priority, maxAttempts);

export const onceADayPatternCron = (name: string, queued = false, priority = 0, maxAttempts = 25): CronItem =>
  constructCron(name, `${name}OnceADay`, getOnceADayCronPattern(), queued, priority, maxAttempts);

export const everyFiveHoursEveryFirstToFifthDayOfMonthPatternCron = (name: string, queued = false, priority = 0): CronItem =>
  constructCron(
    name,
    `${name}EveryFiveHoursEveryFirstToFifthDayOfMonth`,
    getFiveHoursEveryFirstToFifthDayOfMonthCronPattern(),
    queued,
    priority,
  );

export const everyHourEveryFirstToFifthDayOfMonthPatternCron = (name: string, queued = false, priority = 0): CronItem =>
  constructCron(
    name,
    `${name}EveryHourEveryFirstToFifthDayOfMonth`,
    getEveryHourEveryFirstToFifthDayOfMonthCronPattern(),
    queued,
    priority,
  );

export const everyThreeHoursEveryFirstToFifthDayOfMonthPatternCron = (name: string, queued = false, priority = 0): CronItem =>
  constructCron(
    name,
    `${name}EveryThreeHoursEveryFirstToFifthDayOfMonth`,
    getEveryThreeHoursEveryFirstToFifthDayOfMonthCronPattern(),
    queued,
    priority,
  );

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
