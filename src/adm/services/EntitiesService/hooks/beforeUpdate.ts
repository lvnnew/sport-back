import {
  MutationUpdateEntityArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateEntityArgs,
): Promise<MutationUpdateEntityArgs> => data;
