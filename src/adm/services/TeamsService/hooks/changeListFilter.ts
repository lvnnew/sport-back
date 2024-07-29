import {Context} from '../../types';
import {QueryAllTeamsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllTeamsArgs = QueryAllTeamsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
