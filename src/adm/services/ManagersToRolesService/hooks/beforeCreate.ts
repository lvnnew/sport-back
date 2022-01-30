import {
  MutationCreateManagersToRoleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateManagersToRoleArgs,
): Promise<MutationCreateManagersToRoleArgs> => data;
