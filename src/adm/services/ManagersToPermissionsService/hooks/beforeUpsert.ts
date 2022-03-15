import {Context} from '../../types';
import {StrictUpdateManagersToPermissionArgs, StrictCreateManagersToPermissionArgs} from '../ManagersToPermissionsService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateManagersToPermissionArgs,
  updateData: StrictUpdateManagersToPermissionArgs,
): Promise<{createData: StrictCreateManagersToPermissionArgs, updateData: StrictUpdateManagersToPermissionArgs}> => {
  return {createData, updateData};
};
