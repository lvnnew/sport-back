import {Context} from '../../types';
import {StrictUpdateRoleArgs, StrictCreateRoleArgs} from '../RolesService';

type Data = {createData: StrictCreateRoleArgs, updateData: StrictUpdateRoleArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
