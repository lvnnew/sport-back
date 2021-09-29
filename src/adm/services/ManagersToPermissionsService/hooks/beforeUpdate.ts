import {
  MutationUpdateManagersToPermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateManagersToPermissionArgs,
): Promise<MutationUpdateManagersToPermissionArgs> => data;
