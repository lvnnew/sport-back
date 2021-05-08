import {log} from '../../../log';
import {SendEmailLocals} from './addSendEmailJob';
import {addSendEmailToUserJob} from './addSendEmailToUserJob';
import {AgrContext} from '../../../agr/services/context';

export interface RestorePasswordEmailLocals extends SendEmailLocals {
  password: string;
  loginUrl: string;
}

export const addSendRestorePasswordEmailJob = async (ctx: AgrContext, userId: number, locals: RestorePasswordEmailLocals) => {
  log.info('addSendRestorePasswordEmailJob');
  log.info(`to userId: ${userId}`);

  // log.info(locals);

  await addSendEmailToUserJob(
    ctx,
    userId,
    {
      locals,
      template: 'restorePassword',
    },
  );
};
