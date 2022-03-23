import {Context} from '../../types';
import {QueryAllFilesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllFilesArgs = QueryAllFilesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
