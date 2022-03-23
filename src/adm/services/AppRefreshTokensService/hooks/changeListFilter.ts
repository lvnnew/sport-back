import {Context} from '../../types';
import {QueryAllAppRefreshTokensArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllAppRefreshTokensArgs = QueryAllAppRefreshTokensArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
