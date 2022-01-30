import {
  MutationCreatePermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreatePermissionArgs,
): Promise<MutationCreatePermissionArgs> => data;
