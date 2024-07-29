import {Context} from '../../types';
import {QueryAllMatchStatusesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllMatchStatusesArgs = QueryAllMatchStatusesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
