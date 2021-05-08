import {AloyalContext} from '../../aloyal/services/context';
import {AuthenticatedRequest} from '../../types/AuthenticatedRequest';

export const getCurrentMember = async (ctx: AloyalContext, req: AuthenticatedRequest) => {
  if (!req.user) {
    throw new Error('There is no user payload in request');
  }
  const member = await ctx.members.get(req.user.id);
  if (!member) {
    throw new Error('User not found');
  }

  return member;
};
