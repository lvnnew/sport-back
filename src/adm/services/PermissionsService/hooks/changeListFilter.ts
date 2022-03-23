import {Context} from '../../types';
import {QueryAllPermissionsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllPermissionsArgs = QueryAllPermissionsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
