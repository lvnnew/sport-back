import {
  MutationCreateEntityArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateEntityArgs,
): Promise<MutationCreateEntityArgs> => data;
