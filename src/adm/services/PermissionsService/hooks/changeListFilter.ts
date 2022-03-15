import {Context} from '../../types';
import {QueryAllPermissionsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllPermissionsArgs = QueryAllPermissionsArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
