import {Context} from '../../types';
import {StrictUpdateAppLoginArgs, StrictCreateAppLoginArgs} from '../AppLoginsService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateAppLoginArgs,
  updateData: StrictUpdateAppLoginArgs,
): Promise<{createData: StrictCreateAppLoginArgs, updateData: StrictUpdateAppLoginArgs}> => {
  return {createData, updateData};
};
