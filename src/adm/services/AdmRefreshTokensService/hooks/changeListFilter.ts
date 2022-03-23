import {Context} from '../../types';
import {QueryAllAdmRefreshTokensArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllAdmRefreshTokensArgs = QueryAllAdmRefreshTokensArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
