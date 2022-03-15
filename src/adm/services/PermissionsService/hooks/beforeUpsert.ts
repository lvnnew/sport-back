import {Context} from '../../types';
import {StrictUpdatePermissionArgs, StrictCreatePermissionArgs} from '../PermissionsService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreatePermissionArgs,
  updateData: StrictUpdatePermissionArgs,
): Promise<{createData: StrictCreatePermissionArgs, updateData: StrictUpdatePermissionArgs}> => {
  return {createData, updateData};
};
