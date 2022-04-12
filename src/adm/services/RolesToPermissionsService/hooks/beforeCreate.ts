import {Context} from '../../types';
import {
  ReliableRolesToPermissionCreateUserInput,
  StrictCreateRolesToPermissionArgs,
} from '../RolesToPermissionsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableRolesToPermissionCreateUserInput,
): Promise<StrictCreateRolesToPermissionArgs> => data;
