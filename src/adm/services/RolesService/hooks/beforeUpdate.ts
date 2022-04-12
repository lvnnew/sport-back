import {
  StrictUpdateRoleArgs,
} from '../RolesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateRoleArgs,
): Promise<StrictUpdateRoleArgs> => data;
