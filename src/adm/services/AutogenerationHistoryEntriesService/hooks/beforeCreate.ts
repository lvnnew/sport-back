import {Context} from '../../types';
import {
  ReliableAutogenerationHistoryEntryCreateUserInput,
  StrictCreateAutogenerationHistoryEntryArgs,
} from '../AutogenerationHistoryEntriesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableAutogenerationHistoryEntryCreateUserInput,
): Promise<StrictCreateAutogenerationHistoryEntryArgs> => data;
