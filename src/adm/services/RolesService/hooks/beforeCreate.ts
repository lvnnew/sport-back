import {
  MutationCreateRoleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateRoleArgs,
): Promise<MutationCreateRoleArgs> => data;
