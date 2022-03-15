import {Context} from '../../types';
import {StrictUpdateManagersToRoleArgs, StrictCreateManagersToRoleArgs} from '../ManagersToRolesService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateManagersToRoleArgs,
  updateData: StrictUpdateManagersToRoleArgs,
): Promise<{createData: StrictCreateManagersToRoleArgs, updateData: StrictUpdateManagersToRoleArgs}> => {
  return {createData, updateData};
};
