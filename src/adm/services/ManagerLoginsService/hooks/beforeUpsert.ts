import {Context} from '../../types';
import {StrictUpdateManagerLoginArgs, StrictCreateManagerLoginArgs} from '../ManagerLoginsService';

type Data = {createData: StrictCreateManagerLoginArgs, updateData: StrictUpdateManagerLoginArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
