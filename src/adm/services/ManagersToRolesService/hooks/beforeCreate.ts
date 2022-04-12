import {Context} from '../../types';
import {
  ReliableManagersToRoleCreateUserInput,
  StrictCreateManagersToRoleArgs,
} from '../ManagersToRolesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableManagersToRoleCreateUserInput,
): Promise<StrictCreateManagersToRoleArgs> => data;
