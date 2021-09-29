import {
  MutationCreateManagersToPermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateManagersToPermissionArgs,
): Promise<MutationCreateManagersToPermissionArgs> => data;
