import {Context} from '../../types';
import {QueryAllManagerLoginsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllManagerLoginsArgs = QueryAllManagerLoginsArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
