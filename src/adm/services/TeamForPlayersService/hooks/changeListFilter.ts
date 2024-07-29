import {Context} from '../../types';
import {QueryAllTeamForPlayersArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllTeamForPlayersArgs = QueryAllTeamForPlayersArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
