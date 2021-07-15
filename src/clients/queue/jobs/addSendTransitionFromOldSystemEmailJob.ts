/* eslint-disable sort-keys-fix/sort-keys-fix */
import {log} from '../../../log';
import {SendEmailLocals} from './addSendEmailJob';
import {addSendEmailToUserJob} from './addSendEmailToUserJob';
import {Context} from '../../../adm/services/context';

export interface TransitionFromOldSystemEmaiLocals extends SendEmailLocals {
  password: string;
  loginUrl: string;
}

export const addSendTransitionFromOldSystemEmailJob = async (ctx: Context, userId: number, locals: TransitionFromOldSystemEmaiLocals) => {
  log.info('addSendTransitionFromOldSystemEmailJob');
  log.info(`to userId: ${userId}`);

  // log.info(locals);

  await addSendEmailToUserJob(
    ctx,
    userId,
    {
      template: 'transitionFromOldSystem',
      locals,
    },
  );
};
