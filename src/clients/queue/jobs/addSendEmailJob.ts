/* eslint-disable sort-keys-fix/sort-keys-fix */
import {log} from '../../../log';
import {whitelistedEmail} from '../../emaiSender';
import {getQueue} from '../getQueue';
import {Job} from './Job';

export type EmailTemplate = 'hello'
  | 'newRegistration'
  | 'transitionFromOldSystem'
  | 'passwordChange'
  | 'restorePassword'
  | 'resetPassword';

export interface AddSendEmailJobArgs {
  to: string;
  template: EmailTemplate;
  locals: SendEmailLocals;
}

export type SendEmailLocals = Record<string, any>;

export const addSendEmailJob = async ({to, template, locals}: AddSendEmailJobArgs) => {
  log.info('addSendEmailJob');
  const queue = await getQueue();

  await queue.addJob(
    Job.SendEmail,
    {
      to: whitelistedEmail(to),
      template,
      locals,
    },
  );
};
