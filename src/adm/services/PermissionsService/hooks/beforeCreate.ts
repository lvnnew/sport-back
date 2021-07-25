import {
  MutationCreatePermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreatePermissionArgs,
): Promise<MutationCreatePermissionArgs> => data;
