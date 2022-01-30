import {
  MutationCreateUserArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateUserArgs,
): Promise<MutationCreateUserArgs> => data;
