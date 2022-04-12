import {Context} from '../../types';
import {MutationCreateTenantArgsWithAutoDefinable} from '../TenantsService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateTenantArgsWithAutoDefinable,
): Promise<MutationCreateTenantArgsWithAutoDefinable> => data;
