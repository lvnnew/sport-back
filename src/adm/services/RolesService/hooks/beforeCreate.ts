import {Context} from '../../types';
import {
  ReliableRoleCreateUserInput,
  StrictCreateRoleArgs,
} from '../RolesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableRoleCreateUserInput,
): Promise<StrictCreateRoleArgs> => data;
