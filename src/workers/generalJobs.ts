/* eslint-disable sort-keys-fix/sort-keys-fix */
import {jobsFromFunctions} from '../jobs/jobsFromFunctions';
import {hello} from '../jobs/hello';
import {sendEmail} from '../jobs/sendEmail';
import {recalculateStats} from '../jobs/recalculateStats';

const rawGeneralJobs = {
  hello,
  sendEmail,
  recalculateStats,
};

export const generalJobs = jobsFromFunctions(rawGeneralJobs);
