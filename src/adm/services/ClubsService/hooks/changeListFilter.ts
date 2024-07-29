import {Context} from '../../types';
import {QueryAllClubsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllClubsArgs = QueryAllClubsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
