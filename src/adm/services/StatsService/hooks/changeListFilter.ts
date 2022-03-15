import {Context} from '../../types';
import {QueryAllStatsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllStatsArgs = QueryAllStatsArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
