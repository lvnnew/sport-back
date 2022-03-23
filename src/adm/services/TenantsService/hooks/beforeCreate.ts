import {
  MutationCreateTenantArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateTenantArgs,
): Promise<MutationCreateTenantArgs> => data;
