import {Context} from '../../types';
import {
  MutationRemoveUserArgs,
  QueryAllUsersArgs,
} from '../../../../generated/graphql';
import {
  StrictCreateUserArgs,
  StrictUpdateUserArgs,
} from '../UsersService';

export const changeListFilter = async (
  ctx: Context,
  args: QueryAllUsersArgs,
): Promise<QueryAllUsersArgs> => {
  const tenantIds = await ctx.service('profile').getAllowedTenantIds();

  if (tenantIds.length) {
    if (!args.filter) {
      args.filter = {};
    }

    args.filter.tenantId_in = [null, ...tenantIds];
  }

  return args;
};

type Data = {createData: StrictCreateUserArgs, updateData: StrictUpdateUserArgs};

export const beforeUpsertStrict = async (
  ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  const tenantIds = await ctx.service('profile').getAllowedTenantIds();
  if (tenantIds.length > 0 && (
    (createData.tenantId && !tenantIds.includes(createData.tenantId)) ||
    (updateData.tenantId && !tenantIds.includes(updateData.tenantId)))
  ) {
    throw new Error('Permission denied!');
  }

  return {createData, updateData};
};

export const beforeUpdate = async (
  ctx: Context,
  data: StrictUpdateUserArgs,
): Promise<StrictUpdateUserArgs> => {
  const tenantIds = await ctx.service('profile').getAllowedTenantIds();

  if (tenantIds.length > 0 && data.tenantId && tenantIds.includes(data.tenantId)) {
    throw new Error('Permission denied!');
  }

  return data;
};

export const beforeDelete = async (
  ctx: Context,
  params: MutationRemoveUserArgs,
): Promise<void> => {
  const tenantIds = await ctx.service('profile').getAllowedTenantIds();
  if (!tenantIds.length) {
    return;
  }

  const entity = await ctx.service('users').get(params.id);

  if (entity?.tenantId && !tenantIds.includes(entity.tenantId)) {
    throw new Error(`Access to Master with id ${params.id} denied!`);
  }
};
