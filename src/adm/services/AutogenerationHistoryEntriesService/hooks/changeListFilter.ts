import {Context} from '../../types';
import {QueryAllAutogenerationHistoryEntriesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllAutogenerationHistoryEntriesArgs = QueryAllAutogenerationHistoryEntriesArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
