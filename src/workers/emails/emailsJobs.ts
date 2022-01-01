import sendEmail from '../../jobs/sendEmail';
import {getQueueJobs} from '../utils';

const emailsJobs = {
  sendEmail,
};

export type EmailsJobs = typeof emailsJobs;
export type EmailsJob = keyof EmailsJobs;

export const emailsJobsByQueue = getQueueJobs(emailsJobs);

export default emailsJobs;
