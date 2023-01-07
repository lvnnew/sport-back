import {
  MutationCreateTenantArgs,
  MutationUpdateTenantArgs,
  MutationRemoveTenantArgs,
  QueryAllTenantsArgs,
  Tenant,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableTenantKeys = never;
export type ForbidenForUserTenantKeys = never;
export type RequiredDbNotUserTenantKeys = never;

export type AutodefinableTenantPart = DefinedRecord<Pick<MutationCreateTenantArgs, AutodefinableTenantKeys>>;

export type ReliableTenantCreateUserInput =
  Omit<MutationCreateTenantArgs, ForbidenForUserTenantKeys>
  & AutodefinableTenantPart;

export type AllowedTenantForUserCreateInput = Omit<MutationCreateTenantArgs, ForbidenForUserTenantKeys>;

export type StrictCreateTenantArgs = DefinedFieldsInRecord<MutationCreateTenantArgs, RequiredDbNotUserTenantKeys> & AutodefinableTenantPart;
export type StrictUpdateTenantArgs = DefinedFieldsInRecord<MutationUpdateTenantArgs, RequiredDbNotUserTenantKeys> & AutodefinableTenantPart;

export type StrictCreateTenantArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateTenantArgs, AutodefinableTenantKeys>;
export type MutationCreateTenantArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateTenantArgs, AutodefinableTenantKeys>;
export type MutationUpdateTenantArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateTenantArgs, AutodefinableTenantKeys>;

export class TenantsService extends BaseService<
  Tenant,
  MutationCreateTenantArgs,
  MutationUpdateTenantArgs,
  MutationRemoveTenantArgs,
  QueryAllTenantsArgs,
  AutodefinableTenantKeys,
  ForbidenForUserTenantKeys,
  RequiredDbNotUserTenantKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.tenant, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }

  augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableTenantPart> => currentData as T & AutodefinableTenantPart;
}
