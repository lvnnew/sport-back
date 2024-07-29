import {Context} from '../../types';
import {QueryAllMatchVideosArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllMatchVideosArgs = QueryAllMatchVideosArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
