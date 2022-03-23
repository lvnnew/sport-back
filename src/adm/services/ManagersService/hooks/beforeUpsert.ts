import {Context} from '../../types';
import {StrictUpdateManagerArgs, StrictCreateManagerArgs} from '../ManagersService';

type Data = {createData: StrictCreateManagerArgs, updateData: StrictUpdateManagerArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
