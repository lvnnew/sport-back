import {Context} from '../../types';
import {StrictUpdateAutogenerationHistoryEntryArgs, StrictCreateAutogenerationHistoryEntryArgs} from '../AutogenerationHistoryEntriesService';

type Data = {createData: StrictCreateAutogenerationHistoryEntryArgs, updateData: StrictUpdateAutogenerationHistoryEntryArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
