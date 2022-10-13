import {Context} from '../../types';
import {QueryAllMailingMessageStatusesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllMailingMessageStatusesArgs = QueryAllMailingMessageStatusesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
