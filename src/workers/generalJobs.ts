import {hello} from '../jobs/hello';
import {sendEmail} from '../jobs/sendEmail';
import {recalculateStats} from '../jobs/recalculateStats';
import {getQueueJobs} from './utils';

export const generalJobs = {
  hello,
  sendEmail,
  recalculateStats,
};

export type GeneralJobs = typeof generalJobs;
export type GeneralJob = keyof GeneralJobs;

export const generalJobsByQueue = getQueueJobs(generalJobs);
