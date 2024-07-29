import {Context} from '../../types';
import {QueryAllTeamMatchListsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllTeamMatchListsArgs = QueryAllTeamMatchListsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
