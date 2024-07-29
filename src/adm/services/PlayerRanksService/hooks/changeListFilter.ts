import {Context} from '../../types';
import {QueryAllPlayerRanksArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllPlayerRanksArgs = QueryAllPlayerRanksArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
