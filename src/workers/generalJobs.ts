import {jobsFromFunctions} from '../jobs/jobsFromFunctions';
import {hello} from '../jobs/hello';
import {sendEmail} from '../jobs/sendEmail';
import {recalculateStats} from '../jobs/recalculateStats';

export const generalJobs = jobsFromFunctions({
  hello,
  sendEmail,
  recalculateStats,
});
