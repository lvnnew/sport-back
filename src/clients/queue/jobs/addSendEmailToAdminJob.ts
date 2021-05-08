/* eslint-disable sort-keys-fix/sort-keys-fix */
import {AgrContext} from '../../../agr/services/context';
import {log} from '../../../log';
import {addSendEmailJob, AddSendEmailJobArgs} from './addSendEmailJob';

export const addSendEmailToAdminJob = async (ctx: AgrContext, adminId: number, {template, locals}: Omit<AddSendEmailJobArgs, 'to'>) => {
  log.info('addSendEmailToAdminJob');

  const admin = await ctx.admins.get(adminId);
  if (!admin) {
    throw new Error(`There is no admin with id "${adminId}"`);
  }

  await addSendEmailJob(
    {
      to: admin.email,
      template,
      locals: {
        ...admin,
        ...locals,
      },
    },
  );
};
