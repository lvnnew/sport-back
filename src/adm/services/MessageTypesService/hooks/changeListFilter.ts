import {Context} from '../../types';
import {QueryAllMessageTypesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllMessageTypesArgs = QueryAllMessageTypesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
