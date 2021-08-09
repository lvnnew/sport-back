import {Context} from '../../../adm/services/context';
import {log} from '../../../log';
import {addSendEmailJob, AddSendEmailJobArgs} from './addSendEmailJob';

export const addSendEmailToManagerJob = async (ctx: Context, adminId: number, {template, locals}: Omit<AddSendEmailJobArgs, 'to'>) => {
  log.info('addSendEmailToManagerJob');

  const manager = await ctx.managers.get(adminId);
  if (!manager) {
    throw new Error(`There is no admin with id "${adminId}"`);
  }
  if (!manager.email) {
    throw new Error('Manager does not have email');
  }

  await addSendEmailJob(
    {
      to: manager.email,
      template,
      locals: {
        ...manager,
        ...locals,
      },
    },
  );
};
