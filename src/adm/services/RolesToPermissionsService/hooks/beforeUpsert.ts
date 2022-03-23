import {Context} from '../../types';
import {StrictUpdateRolesToPermissionArgs, StrictCreateRolesToPermissionArgs} from '../RolesToPermissionsService';

type Data = {createData: StrictCreateRolesToPermissionArgs, updateData: StrictUpdateRolesToPermissionArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
