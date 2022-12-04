import {CronItem} from 'graphile-worker';
import {Job} from '../../clients/queue/Job';
import {hourlyCron, onceInSixHoursCron} from '../utils';

export const generalCronJobs: CronItem[] = [
  // hourly
  hourlyCron(Job.Hello),
  hourlyCron(Job.RecalculateStats),

  // Once in six hours
  onceInSixHoursCron(Job.DbHousekeeping),
];
