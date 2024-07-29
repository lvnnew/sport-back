import {Context} from '../../types';
import {QueryAllTeamForCompetitionsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllTeamForCompetitionsArgs = QueryAllTeamForCompetitionsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
