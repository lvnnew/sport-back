import {
  MutationUpdateFileArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateFileArgs,
): Promise<MutationUpdateFileArgs> => data;
