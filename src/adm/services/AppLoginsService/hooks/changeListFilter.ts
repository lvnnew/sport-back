import {Context} from '../../types';
import {QueryAllAppLoginsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllAppLoginsArgs = QueryAllAppLoginsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
