import {
  StrictUpdatePlayerRoleArgs,
} from '../PlayerRolesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdatePlayerRoleArgs,
): Promise<StrictUpdatePlayerRoleArgs> => data;
