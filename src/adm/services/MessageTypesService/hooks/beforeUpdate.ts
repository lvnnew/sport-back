import {
  MutationUpdateMessageTypeArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateMessageTypeArgs,
): Promise<MutationUpdateMessageTypeArgs> => data;
