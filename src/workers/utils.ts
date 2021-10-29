import {getQueue} from '../clients/queue/getQueue';
import {CronItem} from 'graphile-worker';
import {Job} from '../clients/queue/jobs/Job';
import * as R from 'ramda';
import {log} from '../log';
import {Logger, LogScope} from 'graphile-worker/dist/logger';

export const getHourlyCronPattern = () => `${Math.floor(Math.random() * 59)} * * * *`;

export const getFiveMinsCronPattern = () => '*/5 * * * *';

export const getTenMinsCronPattern = () => '*/5 * * * *';

export const getOneMinCronPattern = () => '* * * * *';

export const getSixHoursCronPattern = () => '0 */6 * * *';

export const constructCron = (
  name: string,
  identifier: string,
  pattern: string,
  queued = false,
): CronItem => ({
  task: name,
  pattern,
  options: {
    queueName: queued ? name : undefined,
    backfillPeriod: 0,
  },
  payload: {},
  identifier,
});

export const hourlyCron = (name: string, queued = false): CronItem =>
  constructCron(name, `${name}Hourly`, getHourlyCronPattern(), queued);

export const fiveMinsCron = (name: string, queued = false): CronItem =>
  constructCron(name, `${name}FiveMins`, getFiveMinsCronPattern(), queued);

export const tenMinsCron = (name: string, queued = false): CronItem =>
  constructCron(name, `${name}TenMins`, getTenMinsCronPattern(), queued);

export const oneMinCron = (name: string, queued = false): CronItem =>
  constructCron(name, `${name}OneMin`, getOneMinCronPattern(), queued);

export const onceInSixHoursCron = (name: string, queued = false): CronItem =>
  constructCron(name, `${name}OnceInSixHours`, getSixHoursCronPattern(), queued);

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
    log[level]({
      message,
      scope,
      meta,
    });
  };
}

export const graphileLogger = new Logger(logFactory);
