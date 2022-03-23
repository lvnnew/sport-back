import {Context} from '../../types';
import {QueryAllManagersToPermissionsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllManagersToPermissionsArgs = QueryAllManagersToPermissionsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
