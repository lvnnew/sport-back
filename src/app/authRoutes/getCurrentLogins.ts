import {Context} from '../../adm/services/types';
import {AuthenticatedRequest} from '../../types/AuthenticatedRequest';

export const getCurrentLogins = async (ctx: Context, req: AuthenticatedRequest) => {
  if (!req.user) {
    throw new Error('There is no user payload in request');
  }

  const logins = await ctx.service('appLogins').all({filter: {userId: req.user.id}});
  if (logins.length === 0) {
    throw new Error('Login not found');
  }

  return logins;
};
