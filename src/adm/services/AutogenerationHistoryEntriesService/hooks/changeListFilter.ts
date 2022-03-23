import {Context} from '../../types';
import {QueryAllAutogenerationHistoryEntriesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllAutogenerationHistoryEntriesArgs = QueryAllAutogenerationHistoryEntriesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
