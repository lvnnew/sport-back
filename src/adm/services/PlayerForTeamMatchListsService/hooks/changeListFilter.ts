import {Context} from '../../types';
import {QueryAllPlayerForTeamMatchListsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllPlayerForTeamMatchListsArgs = QueryAllPlayerForTeamMatchListsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
