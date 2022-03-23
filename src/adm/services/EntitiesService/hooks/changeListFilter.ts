import {Context} from '../../types';
import {QueryAllEntitiesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllEntitiesArgs = QueryAllEntitiesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
