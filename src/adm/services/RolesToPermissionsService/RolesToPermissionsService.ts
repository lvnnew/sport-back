import {
  MutationCreateRolesToPermissionArgs,
  MutationUpdateRolesToPermissionArgs,
  MutationRemoveRolesToPermissionArgs,
  QueryAllRolesToPermissionsArgs,
  RolesToPermission,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableRolesToPermissionKeys = never;
export type ForbidenForUserRolesToPermissionKeys = never;
export type RequiredDbNotUserRolesToPermissionKeys = never;

export type AutodefinableRolesToPermissionPart = DefinedRecord<Pick<MutationCreateRolesToPermissionArgs, AutodefinableRolesToPermissionKeys>>;

export type ReliableRolesToPermissionCreateUserInput =
  Omit<MutationCreateRolesToPermissionArgs, ForbidenForUserRolesToPermissionKeys>
  & AutodefinableRolesToPermissionPart;

export type AllowedRolesToPermissionForUserCreateInput = Omit<MutationCreateRolesToPermissionArgs, ForbidenForUserRolesToPermissionKeys>;

export type StrictCreateRolesToPermissionArgs = DefinedFieldsInRecord<MutationCreateRolesToPermissionArgs, RequiredDbNotUserRolesToPermissionKeys> & AutodefinableRolesToPermissionPart;
export type StrictUpdateRolesToPermissionArgs = DefinedFieldsInRecord<MutationUpdateRolesToPermissionArgs, RequiredDbNotUserRolesToPermissionKeys> & AutodefinableRolesToPermissionPart;

export type StrictCreateRolesToPermissionArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateRolesToPermissionArgs, AutodefinableRolesToPermissionKeys>;
export type MutationCreateRolesToPermissionArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateRolesToPermissionArgs, AutodefinableRolesToPermissionKeys>;
export type MutationUpdateRolesToPermissionArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateRolesToPermissionArgs, AutodefinableRolesToPermissionKeys>;

export class RolesToPermissionsService extends BaseService<
  RolesToPermission,
  MutationCreateRolesToPermissionArgs,
  MutationUpdateRolesToPermissionArgs,
  MutationRemoveRolesToPermissionArgs,
  QueryAllRolesToPermissionsArgs,
  AutodefinableRolesToPermissionKeys,
  ForbidenForUserRolesToPermissionKeys,
  RequiredDbNotUserRolesToPermissionKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.rolesToPermission, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
