import {Context} from '../../types';
import {QueryAllMessageTypesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllMessageTypesArgs = QueryAllMessageTypesArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
