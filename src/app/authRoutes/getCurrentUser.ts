import {Context} from '../../adm/services/types';
import {AuthenticatedRequest} from '../../types/AuthenticatedRequest';

export const getCurrentUser = async (ctx: Context, req: AuthenticatedRequest) => {
  if (!req.user) {
    throw new Error('There is no user payload in request');
  }

  const user = await ctx.service('users').get(req.user.id);
  if (!user) {
    throw new Error('User not found');
  }

  return user;
};
