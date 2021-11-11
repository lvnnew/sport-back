import {
  MutationUpdateAutogenerationHistoryEntryArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateAutogenerationHistoryEntryArgs,
): Promise<MutationUpdateAutogenerationHistoryEntryArgs> => data;
