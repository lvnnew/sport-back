import {Context} from '../../types';
import {StrictUpdateManagerArgs, StrictCreateManagerArgs} from '../ManagersService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateManagerArgs,
  updateData: StrictUpdateManagerArgs,
): Promise<{createData: StrictCreateManagerArgs, updateData: StrictUpdateManagerArgs}> => {
  return {createData, updateData};
};
