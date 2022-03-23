import {Context} from '../../types';
import {QueryAllManagerLoginsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllManagerLoginsArgs = QueryAllManagerLoginsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
