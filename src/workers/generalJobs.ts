import {hello} from '../jobs/hello';
import {sendEmail} from '../jobs/sendEmail';
import {recalculateStats} from '../jobs/recalculateStats';

export const generalJobs = {
  hello,
  sendEmail,
  recalculateStats,
};

export type GeneralJobs = typeof generalJobs;
export type GeneralJob = keyof GeneralJobs;
