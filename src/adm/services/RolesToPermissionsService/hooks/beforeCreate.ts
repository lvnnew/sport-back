import {Context} from '../../types';
import {MutationCreateRolesToPermissionArgsWithAutoDefinable} from '../RolesToPermissionsService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateRolesToPermissionArgsWithAutoDefinable,
): Promise<MutationCreateRolesToPermissionArgsWithAutoDefinable> => data;
