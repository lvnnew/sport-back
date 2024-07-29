import {Context} from '../../types';
import {QueryAllEventTypesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllEventTypesArgs = QueryAllEventTypesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
