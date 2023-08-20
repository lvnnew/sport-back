import {ElasticJobs} from './type';
import * as R from 'ramda';
import {genJobs} from './genJobs';

export const customJobs: ElasticJobs = {};

// here I copy it only for two levels deep
export const jobs: ElasticJobs = Object.keys({...customJobs, ...genJobs})
  .reduce<ElasticJobs>((accum, key: string) => {
    accum[key] = R.mergeLeft(customJobs[key] ?? {}, genJobs[key]);

    return accum;
  }, {});
