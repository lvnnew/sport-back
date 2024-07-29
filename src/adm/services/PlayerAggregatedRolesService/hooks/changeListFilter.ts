import {Context} from '../../types';
import {QueryAllPlayerAggregatedRolesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllPlayerAggregatedRolesArgs = QueryAllPlayerAggregatedRolesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
