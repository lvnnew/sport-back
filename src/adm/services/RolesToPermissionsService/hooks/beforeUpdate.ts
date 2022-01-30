import {
  MutationUpdateRolesToPermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateRolesToPermissionArgs,
): Promise<MutationUpdateRolesToPermissionArgs> => data;
