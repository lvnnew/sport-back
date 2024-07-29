import {Context} from '../../types';
import {QueryAllMatchesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllMatchesArgs = QueryAllMatchesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
