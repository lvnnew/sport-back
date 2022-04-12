import {
  StrictUpdateManagersToRoleArgs,
} from '../ManagersToRolesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateManagersToRoleArgs,
): Promise<StrictUpdateManagersToRoleArgs> => data;
