import {Context} from '../../types';
import {QueryAllManagersToPermissionsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllManagersToPermissionsArgs = QueryAllManagersToPermissionsArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
