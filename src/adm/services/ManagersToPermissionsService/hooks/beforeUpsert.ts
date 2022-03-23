import {Context} from '../../types';
import {StrictUpdateManagersToPermissionArgs, StrictCreateManagersToPermissionArgs} from '../ManagersToPermissionsService';

type Data = {createData: StrictCreateManagersToPermissionArgs, updateData: StrictUpdateManagersToPermissionArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
