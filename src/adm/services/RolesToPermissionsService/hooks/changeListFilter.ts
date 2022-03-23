import {Context} from '../../types';
import {QueryAllRolesToPermissionsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllRolesToPermissionsArgs = QueryAllRolesToPermissionsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
