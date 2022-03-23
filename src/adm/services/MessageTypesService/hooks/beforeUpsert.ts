import {Context} from '../../types';
import {StrictUpdateMessageTypeArgs, StrictCreateMessageTypeArgs} from '../MessageTypesService';

type Data = {createData: StrictCreateMessageTypeArgs, updateData: StrictUpdateMessageTypeArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
