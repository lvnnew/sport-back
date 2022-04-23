import {Context} from '../../types';
import {QueryAllAggregateTrackingsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllAggregateTrackingsArgs = QueryAllAggregateTrackingsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
