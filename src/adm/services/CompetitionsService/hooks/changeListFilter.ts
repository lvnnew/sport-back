import {Context} from '../../types';
import {QueryAllCompetitionsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllCompetitionsArgs = QueryAllCompetitionsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
