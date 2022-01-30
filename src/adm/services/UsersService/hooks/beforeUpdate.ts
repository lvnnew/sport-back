import {
  MutationUpdateUserArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateUserArgs,
): Promise<MutationUpdateUserArgs> => data;
