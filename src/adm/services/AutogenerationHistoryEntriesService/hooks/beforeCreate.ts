import {
  MutationCreateAutogenerationHistoryEntryArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateAutogenerationHistoryEntryArgs,
): Promise<MutationCreateAutogenerationHistoryEntryArgs> => data;
