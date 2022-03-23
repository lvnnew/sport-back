import hello from './jobs/hello';
import recalculateStats from './jobs/recalculateStats';
import dbHousekeeping from './jobs/dbHousekeeping';
import {getQueueJobs} from '../utils';

const generalJobs = {
  hello,
  recalculateStats,
  dbHousekeeping,
};

export type GeneralJobs = typeof generalJobs;
export type GeneralJob = keyof GeneralJobs;

export const generalJobsByQueue = getQueueJobs(generalJobs);

export default generalJobs;
