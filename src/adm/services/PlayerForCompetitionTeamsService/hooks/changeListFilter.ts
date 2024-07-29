import {Context} from '../../types';
import {QueryAllPlayerForCompetitionTeamsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllPlayerForCompetitionTeamsArgs = QueryAllPlayerForCompetitionTeamsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
