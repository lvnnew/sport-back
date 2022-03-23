import {Context} from '../../types';
import {QueryAllStatsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllStatsArgs = QueryAllStatsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
