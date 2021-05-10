/* eslint-disable sort-keys-fix/sort-keys-fix */
import {jobsFromFunctions} from './jobsFromFunctions';
import {hello} from './hello';
import {sendEmail} from './sendEmail';
import {recalculateStats} from './recalculateStats';

const rawGeneralJobs = {
  hello,
  sendEmail,
  recalculateStats,
};

export const generalJobs = jobsFromFunctions(rawGeneralJobs);
