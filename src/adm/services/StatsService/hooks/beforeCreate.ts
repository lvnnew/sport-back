import {
  MutationCreateStatArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateStatArgs,
): Promise<MutationCreateStatArgs> => data;
