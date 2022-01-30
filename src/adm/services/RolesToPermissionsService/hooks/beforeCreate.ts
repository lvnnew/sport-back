import {
  MutationCreateRolesToPermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateRolesToPermissionArgs,
): Promise<MutationCreateRolesToPermissionArgs> => data;
