import {
  MutationUpdateTagArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateTagArgs,
): Promise<MutationUpdateTagArgs> => data;
