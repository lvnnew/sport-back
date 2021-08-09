import {log} from '../../../log';
import {SendEmailLocals} from './addSendEmailJob';
import {addSendEmailToUserJob} from './addSendEmailToUserJob';
import {Context} from '../../../adm/services/context';

export interface ResetPasswordEmaiLocals extends SendEmailLocals {
  password: string;
  loginUrl: string;
}

export const addSendResetPasswordEmailJob = async (ctx: Context, userId: number, locals: ResetPasswordEmaiLocals) => {
  log.info('addSendPasswordChangeEmailJob');
  log.info(`to userId: ${userId}`);

  // log.info(locals);

  await addSendEmailToUserJob(
    ctx,
    userId,
    {
      template: 'resetPassword',
      locals,
    },
  );
};
