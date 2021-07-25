import {
  MutationUpdatePermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdatePermissionArgs,
): Promise<MutationUpdatePermissionArgs> => data;
