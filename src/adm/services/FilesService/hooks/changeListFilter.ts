import {Context} from '../../types';
import {QueryAllFilesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllFilesArgs = QueryAllFilesArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
