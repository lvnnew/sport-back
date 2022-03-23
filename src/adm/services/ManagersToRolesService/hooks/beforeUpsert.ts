import {Context} from '../../types';
import {StrictUpdateManagersToRoleArgs, StrictCreateManagersToRoleArgs} from '../ManagersToRolesService';

type Data = {createData: StrictCreateManagersToRoleArgs, updateData: StrictUpdateManagersToRoleArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
