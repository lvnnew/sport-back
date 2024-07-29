import {Context} from '../../types';
import {QueryAllEventTypeCategoriesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllEventTypeCategoriesArgs = QueryAllEventTypeCategoriesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
