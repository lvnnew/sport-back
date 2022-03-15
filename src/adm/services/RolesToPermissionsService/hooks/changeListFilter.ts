import {Context} from '../../types';
import {QueryAllRolesToPermissionsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllRolesToPermissionsArgs = QueryAllRolesToPermissionsArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
