import {Context} from '../../types';
import {QueryAllUsersArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllUsersArgs = QueryAllUsersArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
