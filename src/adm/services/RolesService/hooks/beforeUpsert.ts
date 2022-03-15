import {Context} from '../../types';
import {StrictUpdateRoleArgs, StrictCreateRoleArgs} from '../RolesService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateRoleArgs,
  updateData: StrictUpdateRoleArgs,
): Promise<{createData: StrictCreateRoleArgs, updateData: StrictUpdateRoleArgs}> => {
  return {createData, updateData};
};
