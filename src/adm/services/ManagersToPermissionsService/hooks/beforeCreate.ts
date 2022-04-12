import {Context} from '../../types';
import {
  ReliableManagersToPermissionCreateUserInput,
  StrictCreateManagersToPermissionArgs,
} from '../ManagersToPermissionsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableManagersToPermissionCreateUserInput,
): Promise<StrictCreateManagersToPermissionArgs> => data;
