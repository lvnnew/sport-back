import {Context} from '../../types';
import {QueryAllWscUsersArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllWscUsersArgs = QueryAllWscUsersArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
