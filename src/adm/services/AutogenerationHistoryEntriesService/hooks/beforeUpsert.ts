import {Context} from '../../types';
import {StrictUpdateAutogenerationHistoryEntryArgs, StrictCreateAutogenerationHistoryEntryArgs} from '../AutogenerationHistoryEntriesService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateAutogenerationHistoryEntryArgs,
  updateData: StrictUpdateAutogenerationHistoryEntryArgs,
): Promise<{createData: StrictCreateAutogenerationHistoryEntryArgs, updateData: StrictUpdateAutogenerationHistoryEntryArgs}> => {
  return {createData, updateData};
};
