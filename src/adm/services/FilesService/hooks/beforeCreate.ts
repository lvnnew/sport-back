import {
  MutationCreateFileArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateFileArgs,
): Promise<MutationCreateFileArgs> => data;
