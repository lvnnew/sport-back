import {Context} from '../../types';
import {QueryAllRolesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllRolesArgs = QueryAllRolesArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
