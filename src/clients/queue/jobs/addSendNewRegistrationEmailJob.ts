import {log} from '../../../log';
import {SendEmailLocals} from './addSendEmailJob';
import {Context} from '../../../adm/services/context';
import {addSendEmailToUserJob} from './addSendEmailToUserJob';

export interface NewRegistrationEmailLocals extends SendEmailLocals {
  password: string;
  loginUrl: string;
}

export const addSendNewRegistrationEmailJob = async (ctx: Context, userId: number, locals: NewRegistrationEmailLocals) => {
  log.info('addSendNewRegistrationEmailJob');
  log.info(`to userId: ${userId}`);

  // log.info(locals);

  await addSendEmailToUserJob(
    ctx,
    userId,
    {
      locals,
      template: 'newRegistration',
    },
  );
};
