import log from '../../../log';
import {SendEmailLocals} from './addSendEmailJob';
import {addSendEmailToUserJob} from './addSendEmailToUserJob';
import {Context} from '../../../adm/services/types';
import {MessageTemplate} from '../../../types/enums';

export interface ResetPasswordEmaiLocals extends SendEmailLocals {
  password: string;
  loginUrl: string;
}

export const addSendResetPasswordEmailJob = async (ctx: Context, userId: number, locals: ResetPasswordEmaiLocals) => {
  log.info('addSendResetPasswordEmailJob');
  log.info(`to userId: ${userId}`);

  // log.info(locals);

  await addSendEmailToUserJob(
    ctx,
    {
      userId,
      template: MessageTemplate.ResetPassword,
      locals,
    },
  );
};
