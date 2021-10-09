import {CronItem} from 'graphile-worker';
import {Job} from '../clients/queue/jobs/Job';
import {hourlyCron} from './utils';

export const generalCronJobs: CronItem[] = [
  // hourly
  hourlyCron(Job.Hello),
  hourlyCron(Job.RecalculateStats),
];
