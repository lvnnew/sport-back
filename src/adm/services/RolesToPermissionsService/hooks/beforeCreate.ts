import {
  MutationCreateRolesToPermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateRolesToPermissionArgs,
): Promise<MutationCreateRolesToPermissionArgs> => data;
