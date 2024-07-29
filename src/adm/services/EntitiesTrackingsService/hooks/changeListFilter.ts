import {Context} from '../../types';
import {QueryAllEntitiesTrackingsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllEntitiesTrackingsArgs = QueryAllEntitiesTrackingsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
