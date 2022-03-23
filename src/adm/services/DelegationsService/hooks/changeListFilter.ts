import {Context} from '../../types';
import {QueryAllDelegationsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllDelegationsArgs = QueryAllDelegationsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
