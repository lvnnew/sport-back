import {Context} from '../../types';
import {QueryAllPlayerForMatchRequestsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllPlayerForMatchRequestsArgs = QueryAllPlayerForMatchRequestsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
