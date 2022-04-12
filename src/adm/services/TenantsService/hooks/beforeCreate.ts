import {Context} from '../../types';
import {
  ReliableTenantCreateUserInput,
  StrictCreateTenantArgs,
} from '../TenantsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableTenantCreateUserInput,
): Promise<StrictCreateTenantArgs> => data;
