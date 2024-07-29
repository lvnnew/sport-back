import {Context} from '../../types';
import {QueryAllPlayerCompetitionRatingsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllPlayerCompetitionRatingsArgs = QueryAllPlayerCompetitionRatingsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
