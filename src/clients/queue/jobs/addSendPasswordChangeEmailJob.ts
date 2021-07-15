/* eslint-disable sort-keys-fix/sort-keys-fix */
import {log} from '../../../log';
import {SendEmailLocals} from './addSendEmailJob';
import {addSendEmailToUserJob} from './addSendEmailToUserJob';
import {Context} from '../../../adm/services/context';

export interface PasswordChangeEmaiLocals extends SendEmailLocals {
  password: string;
  loginUrl: string;
}

export const addSendPasswordChangeEmailJob = async (ctx: Context, userId: number, locals: PasswordChangeEmaiLocals) => {
  log.info('addSendPasswordChangeEmailJob');
  log.info(`to userId: ${userId}`);

  // log.info(locals);

  await addSendEmailToUserJob(
    ctx,
    userId,
    {
      template: 'passwordChange',
      locals,
    },
  );
};
