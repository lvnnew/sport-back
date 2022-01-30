import {
  MutationUpdateAutogenerationHistoryEntryArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateAutogenerationHistoryEntryArgs,
): Promise<MutationUpdateAutogenerationHistoryEntryArgs> => data;
