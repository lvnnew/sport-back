import {Context} from '../../types';
import {StrictUpdateAppLoginArgs, StrictCreateAppLoginArgs} from '../AppLoginsService';

type Data = {createData: StrictCreateAppLoginArgs, updateData: StrictUpdateAppLoginArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
