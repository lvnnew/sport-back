import {
  StrictUpdateManagersToPermissionArgs,
} from '../ManagersToPermissionsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateManagersToPermissionArgs,
): Promise<StrictUpdateManagersToPermissionArgs> => data;
