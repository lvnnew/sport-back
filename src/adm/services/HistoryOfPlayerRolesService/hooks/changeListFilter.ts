import {Context} from '../../types';
import {QueryAllHistoryOfPlayerRolesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllHistoryOfPlayerRolesArgs = QueryAllHistoryOfPlayerRolesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
