import {
  MutationUpdateRolesToPermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateRolesToPermissionArgs,
): Promise<MutationUpdateRolesToPermissionArgs> => data;
