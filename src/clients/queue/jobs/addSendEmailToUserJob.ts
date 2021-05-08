/* eslint-disable sort-keys-fix/sort-keys-fix */
import {AgrContext} from '../../../agr/services/context';
import {log} from '../../../log';
import {addSendEmailJob, AddSendEmailJobArgs} from './addSendEmailJob';

export const addSendEmailToUserJob = async (ctx: AgrContext, userId: number, {template, locals}: Omit<AddSendEmailJobArgs, 'to'>) => {
  log.info('addSendEmailToUserJob');

  const user = await ctx.users.get(userId);
  if (!user) {
    throw new Error(`There is no user with id "${userId}"`);
  }

  await addSendEmailJob(
    {
      to: user.email,
      template,
      locals: {
        ...user,
        ...locals,
      },
    },
  );
};
