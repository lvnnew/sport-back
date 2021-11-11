import {
  MutationCreateAutogenerationHistoryEntryArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateAutogenerationHistoryEntryArgs,
): Promise<MutationCreateAutogenerationHistoryEntryArgs> => data;
