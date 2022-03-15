import {Context} from '../../types';
import {StrictUpdateRolesToPermissionArgs, StrictCreateRolesToPermissionArgs} from '../RolesToPermissionsService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateRolesToPermissionArgs,
  updateData: StrictUpdateRolesToPermissionArgs,
): Promise<{createData: StrictCreateRolesToPermissionArgs, updateData: StrictUpdateRolesToPermissionArgs}> => {
  return {createData, updateData};
};
