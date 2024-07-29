import {Context} from '../../types';
import {QueryAllMatchRequestsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllMatchRequestsArgs = QueryAllMatchRequestsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
