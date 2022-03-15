import {Context} from '../../types';
import {QueryAllManagersToRolesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllManagersToRolesArgs = QueryAllManagersToRolesArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
