import {Context} from '../../types';
import {QueryAllWscMessagesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllWscMessagesArgs = QueryAllWscMessagesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
