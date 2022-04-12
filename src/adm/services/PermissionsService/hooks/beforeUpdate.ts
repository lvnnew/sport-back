import {
  StrictUpdatePermissionArgs,
} from '../PermissionsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdatePermissionArgs,
): Promise<StrictUpdatePermissionArgs> => data;
