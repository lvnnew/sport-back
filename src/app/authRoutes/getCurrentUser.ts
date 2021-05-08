import {AgrContext} from '../../agr/services/context';
import {AuthenticatedRequest} from '../../types/AuthenticatedRequest';

export const getCurrentUser = async (ctx: AgrContext, req: AuthenticatedRequest) => {
  if (!req.user) {
    throw new Error('There is no user payload in request');
  }
  const user = await ctx.users.get(req.user.id);
  if (!user) {
    throw new Error('User not found');
  }

  return user;
};
