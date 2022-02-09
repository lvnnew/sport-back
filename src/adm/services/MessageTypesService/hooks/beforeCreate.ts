import {
  MutationCreateMessageTypeArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateMessageTypeArgs,
): Promise<MutationCreateMessageTypeArgs> => data;
