import {Context} from '../../types';
import {QueryAllPlayerMatchRatingsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllPlayerMatchRatingsArgs = QueryAllPlayerMatchRatingsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
