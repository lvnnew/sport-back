import {Context} from '../../types';
import {MutationCreateManagersToPermissionArgsWithAutoDefinable} from '../ManagersToPermissionsService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateManagersToPermissionArgsWithAutoDefinable,
): Promise<MutationCreateManagersToPermissionArgsWithAutoDefinable> => data;
