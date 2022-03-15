import {Context} from '../../types';
import {QueryAllTagsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllTagsArgs = QueryAllTagsArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
