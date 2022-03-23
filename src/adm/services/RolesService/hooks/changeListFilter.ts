import {Context} from '../../types';
import {QueryAllRolesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllRolesArgs = QueryAllRolesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
