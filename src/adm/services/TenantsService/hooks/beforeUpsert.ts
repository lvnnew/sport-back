import {Context} from '../../types';
import {StrictUpdateTenantArgs, StrictCreateTenantArgs} from '../TenantsService';

type Data = {createData: StrictCreateTenantArgs, updateData: StrictUpdateTenantArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
