import {Context} from '../../types';
import {StrictUpdatePermissionArgs, StrictCreatePermissionArgs} from '../PermissionsService';

type Data = {createData: StrictCreatePermissionArgs, updateData: StrictUpdatePermissionArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
