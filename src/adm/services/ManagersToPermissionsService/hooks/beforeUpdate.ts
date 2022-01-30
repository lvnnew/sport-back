import {
  MutationUpdateManagersToPermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateManagersToPermissionArgs,
): Promise<MutationUpdateManagersToPermissionArgs> => data;
