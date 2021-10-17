import {hello} from '../jobs/hello';
import {sendEmail} from '../jobs/sendEmail';
import {recalculateStats} from '../jobs/recalculateStats';
import dbHousekeeping from '../jobs/dbHousekeeping';
import {getQueueJobs} from './utils';

export const generalJobs = {
  hello,
  sendEmail,
  recalculateStats,
  dbHousekeeping,
};

export type GeneralJobs = typeof generalJobs;
export type GeneralJob = keyof GeneralJobs;

export const generalJobsByQueue = getQueueJobs(generalJobs);
