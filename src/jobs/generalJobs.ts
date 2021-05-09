/* eslint-disable sort-keys-fix/sort-keys-fix */
import {jobsFromFunctions} from './jobsFromFunctions';
import {hello} from './hello';
import {sendEmail} from './sendEmail';

const rawGeneralJobs = {
  hello,
  sendEmail,
};

export const generalJobs = jobsFromFunctions(rawGeneralJobs);
