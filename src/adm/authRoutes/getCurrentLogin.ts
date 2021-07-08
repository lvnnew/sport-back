import {AgrContext} from '../../agr/services/context';
import {AuthenticatedRequest} from '../../types/AuthenticatedRequest';

export const getCurrentLogin = async (ctx: AgrContext, req: AuthenticatedRequest) => {
  if (!req.user) {
    throw new Error('There is no user payload in request');
  }
  const login = await ctx.managerLogins.findOne({filter: {id: req.user.id}});
  if (!login) {
    throw new Error('Login not found');
  }

  return login;
};
