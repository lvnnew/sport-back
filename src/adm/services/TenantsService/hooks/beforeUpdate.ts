import {
  StrictUpdateTenantArgs,
} from '../TenantsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateTenantArgs,
): Promise<StrictUpdateTenantArgs> => data;
