import {Context} from '../../types';
import {MutationCreatePermissionArgsWithAutoDefinable} from '../PermissionsService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreatePermissionArgsWithAutoDefinable,
): Promise<MutationCreatePermissionArgsWithAutoDefinable> => data;
