import {Context} from '../../types';
import {QueryAllMailingMessagesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllMailingMessagesArgs = QueryAllMailingMessagesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
