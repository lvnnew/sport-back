import {Context} from '../../types';
import {QueryAllAppRefreshTokensArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllAppRefreshTokensArgs = QueryAllAppRefreshTokensArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
