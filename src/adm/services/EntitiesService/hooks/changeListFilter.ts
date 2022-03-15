import {Context} from '../../types';
import {QueryAllEntitiesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllEntitiesArgs = QueryAllEntitiesArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
