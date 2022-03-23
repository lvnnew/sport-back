import {Context} from '../../types';
import {StrictUpdateDelegationArgs, StrictCreateDelegationArgs} from '../DelegationsService';

type Data = {createData: StrictCreateDelegationArgs, updateData: StrictUpdateDelegationArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
