import {Context} from '../../types';
import {QueryAllGlossariesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllGlossariesArgs = QueryAllGlossariesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
