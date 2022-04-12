import {
  StrictUpdateAutogenerationHistoryEntryArgs,
} from '../AutogenerationHistoryEntriesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateAutogenerationHistoryEntryArgs,
): Promise<StrictUpdateAutogenerationHistoryEntryArgs> => data;
