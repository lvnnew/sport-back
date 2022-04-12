import {Context} from '../../types';
import {MutationCreateAutogenerationHistoryEntryArgsWithAutoDefinable} from '../AutogenerationHistoryEntriesService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateAutogenerationHistoryEntryArgsWithAutoDefinable,
): Promise<MutationCreateAutogenerationHistoryEntryArgsWithAutoDefinable> => data;
