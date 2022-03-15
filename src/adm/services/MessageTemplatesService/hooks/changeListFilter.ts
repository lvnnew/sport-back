import {Context} from '../../types';
import {QueryAllMessageTemplatesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllMessageTemplatesArgs = QueryAllMessageTemplatesArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
