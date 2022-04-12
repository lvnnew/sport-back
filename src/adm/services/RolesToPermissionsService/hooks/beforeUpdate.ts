import {
  StrictUpdateRolesToPermissionArgs,
} from '../RolesToPermissionsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateRolesToPermissionArgs,
): Promise<StrictUpdateRolesToPermissionArgs> => data;
