import {Context} from '../../types';
import {QueryAllDelegationsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllDelegationsArgs = QueryAllDelegationsArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
