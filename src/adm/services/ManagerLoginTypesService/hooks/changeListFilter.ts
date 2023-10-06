import {Context} from '../../types';
import {QueryAllManagerLoginTypesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllManagerLoginTypesArgs = QueryAllManagerLoginTypesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
