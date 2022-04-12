import {Context} from '../../types';
import {
  ReliablePermissionCreateUserInput,
  StrictCreatePermissionArgs,
} from '../PermissionsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliablePermissionCreateUserInput,
): Promise<StrictCreatePermissionArgs> => data;
