import {Context} from '../../types';
import {QueryAllUsersArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllUsersArgs = QueryAllUsersArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
