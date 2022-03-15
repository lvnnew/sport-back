import {Context} from '../../types';
import {StrictUpdateMessageTypeArgs, StrictCreateMessageTypeArgs} from '../MessageTypesService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateMessageTypeArgs,
  updateData: StrictUpdateMessageTypeArgs,
): Promise<{createData: StrictCreateMessageTypeArgs, updateData: StrictUpdateMessageTypeArgs}> => {
  return {createData, updateData};
};
