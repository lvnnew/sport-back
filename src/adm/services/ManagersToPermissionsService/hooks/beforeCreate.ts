import {
  MutationCreateManagersToPermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateManagersToPermissionArgs,
): Promise<MutationCreateManagersToPermissionArgs> => data;
