import {Context} from '../../types';
import {QueryAllManagersToRolesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllManagersToRolesArgs = QueryAllManagersToRolesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
