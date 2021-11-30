import {fromPairs, toPairs} from 'ramda';
import {Summary} from 'prom-client';
import {JobHelpers} from 'graphile-worker';
import {getConfig} from '../config';
import log from '../log';

const jobSummary = new Summary({
  name: 'job_summary',
  help: 'job_summary',
  labelNames: ['appName', 'jobName', 'status', 'queue'],
});

const jobsFromFunctions = (
  fns: Record<string, (payload: any, helpers: JobHelpers) => Promise<void>>,
) => fromPairs(
  toPairs(fns).map(([name, handler]) => {
    const overridedHandler = async (payload: any, helpers: JobHelpers): Promise<void> => {
      const {appName} = await getConfig();
      const end = jobSummary.startTimer({
        appName,
        jobName: helpers.job.task_identifier,
        queue: helpers.job.queue_name || undefined,
      });
      try {
        log.info(`job: ${name}`);
        await handler(payload, helpers);
      } catch (error: any) {
        end({status: 'error'});
        log.error(
          error.message,
          {
            jobName: name,
          },
        );
        throw error;
      }

      end({status: 'success'});
    };

    return [name, overridedHandler];
  }),
);

export default jobsFromFunctions;
