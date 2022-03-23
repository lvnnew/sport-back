import {Context} from '../../types';
import {QueryAllTenantsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllTenantsArgs = QueryAllTenantsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
