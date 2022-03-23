import {Context} from '../../types';
import {QueryAllTagsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllTagsArgs = QueryAllTagsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
