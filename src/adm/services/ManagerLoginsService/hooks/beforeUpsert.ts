import {Context} from '../../types';
import {StrictUpdateManagerLoginArgs, StrictCreateManagerLoginArgs} from '../ManagerLoginsService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateManagerLoginArgs,
  updateData: StrictUpdateManagerLoginArgs,
): Promise<{createData: StrictCreateManagerLoginArgs, updateData: StrictUpdateManagerLoginArgs}> => {
  return {createData, updateData};
};
