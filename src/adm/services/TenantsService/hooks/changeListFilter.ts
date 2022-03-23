import {Context} from '../../types';
import {QueryAllTenantsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllTenantsArgs = QueryAllTenantsArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
