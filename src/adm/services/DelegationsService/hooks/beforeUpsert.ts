import {Context} from '../../types';
import {StrictUpdateDelegationArgs, StrictCreateDelegationArgs} from '../DelegationsService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateDelegationArgs,
  updateData: StrictUpdateDelegationArgs,
): Promise<{createData: StrictCreateDelegationArgs, updateData: StrictUpdateDelegationArgs}> => {
  return {createData, updateData};
};
