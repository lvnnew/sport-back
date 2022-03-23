import {Context} from '../../types';
import {StrictUpdateTenantArgs, StrictCreateTenantArgs} from '../TenantsService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateTenantArgs,
  updateData: StrictUpdateTenantArgs,
): Promise<{createData: StrictCreateTenantArgs, updateData: StrictUpdateTenantArgs}> => {
  return {createData, updateData};
};
