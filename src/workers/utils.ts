import {getQueue} from '../clients/queue/getQueue';
import {log} from '../log';
import {Job} from '../clients/queue/jobs/Job';
import * as R from 'ramda';

export const getQueueJobs = <T extends Record<string, any>>(jobs: T) => R.fromPairs(
  R.toPairs(
    jobs,
  ).map(
    ([jobName]) => [jobName, async (payload: any) => {
      log.info(`jobName: ${jobName}`);
      const queue = await getQueue();

      await queue.addJob(jobName as unknown as Job, payload);
    }],
  ),
) as T;
