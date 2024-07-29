import {Context} from '../../types';
import {
  ReliablePlayerRoleCreateUserInput,
  StrictCreatePlayerRoleArgs,
} from '../PlayerRolesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliablePlayerRoleCreateUserInput,
): Promise<StrictCreatePlayerRoleArgs> => data;
