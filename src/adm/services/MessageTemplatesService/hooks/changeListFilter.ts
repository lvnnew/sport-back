import {Context} from '../../types';
import {QueryAllMessageTemplatesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllMessageTemplatesArgs = QueryAllMessageTemplatesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
