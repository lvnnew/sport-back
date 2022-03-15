import {Context} from '../../types';
import {QueryAllAppLoginsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllAppLoginsArgs = QueryAllAppLoginsArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
