import {Context} from '../../types';
import {QueryAllPlayerRolesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllPlayerRolesArgs = QueryAllPlayerRolesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
