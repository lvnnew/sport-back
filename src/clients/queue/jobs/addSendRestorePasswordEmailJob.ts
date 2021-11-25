import log from '../../../log';
import {SendEmailLocals} from './addSendEmailJob';
import {addSendEmailToUserJob} from './addSendEmailToUserJob';
import {Context} from '../../../adm/services/context';
import {MessageTemplate} from '../../../types/enums';

export interface RestorePasswordEmailLocals extends SendEmailLocals {
  password: string;
  loginUrl: string;
}

export const addSendRestorePasswordEmailJob = async (ctx: Context, userId: number, locals: RestorePasswordEmailLocals) => {
  log.info('addSendRestorePasswordEmailJob');
  log.info(`to userId: ${userId}`);

  // log.info(locals);

  await addSendEmailToUserJob(
    ctx,
    userId,
    {
      locals,
      template: MessageTemplate.RestorePassword,
    },
  );
};
