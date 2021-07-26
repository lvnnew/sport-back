/* eslint-disable sort-keys-fix/sort-keys-fix */
import {CronItem} from 'graphile-worker';
import {Job} from '../clients/queue/jobs/Job';

export const getHourlyCronPattern = () => `${Math.floor(Math.random() * 59)} * * * *`;

export const getFiveMinsCronPattern = () => '*/5 * * * *';

export const getOneMinCronPattern = () => '*/1 * * * *';

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

export const oneMinCron = (name: string, queued = false): CronItem =>
  constructCron(name, `${name}OneMin`, getOneMinCronPattern(), queued);

export const cronJobs: CronItem[] = [
  // hourly
  hourlyCron(Job.Hello),
  hourlyCron(Job.RecalculateStats),
];
