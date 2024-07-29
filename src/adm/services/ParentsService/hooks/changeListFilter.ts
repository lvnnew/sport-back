import {Context} from '../../types';
import {QueryAllParentsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllParentsArgs = QueryAllParentsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
