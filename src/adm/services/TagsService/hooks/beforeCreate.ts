import {
  MutationCreateTagArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateTagArgs,
): Promise<MutationCreateTagArgs> => data;
