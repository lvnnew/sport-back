import {
  MutationUpdatePermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdatePermissionArgs,
): Promise<MutationUpdatePermissionArgs> => data;
