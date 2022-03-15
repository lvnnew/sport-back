import {Context} from '../../types';
import {QueryAllAdmRefreshTokensArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllAdmRefreshTokensArgs = QueryAllAdmRefreshTokensArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
