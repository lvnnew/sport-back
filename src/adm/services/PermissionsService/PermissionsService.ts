import {
  MutationCreatePermissionArgs,
  MutationUpdatePermissionArgs,
  MutationRemovePermissionArgs,
  QueryAllPermissionsArgs,
  Permission,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinablePermissionKeys = never;
export type ForbidenForUserPermissionKeys = never;
export type RequiredDbNotUserPermissionKeys = never;

export type AutodefinablePermissionPart = DefinedRecord<Pick<MutationCreatePermissionArgs, AutodefinablePermissionKeys>>;

export type ReliablePermissionCreateUserInput =
  Omit<MutationCreatePermissionArgs, ForbidenForUserPermissionKeys>
  & AutodefinablePermissionPart;

export type AllowedPermissionForUserCreateInput = Omit<MutationCreatePermissionArgs, ForbidenForUserPermissionKeys>;

export type StrictCreatePermissionArgs = DefinedFieldsInRecord<MutationCreatePermissionArgs, RequiredDbNotUserPermissionKeys> & AutodefinablePermissionPart;
export type StrictUpdatePermissionArgs = DefinedFieldsInRecord<MutationUpdatePermissionArgs, RequiredDbNotUserPermissionKeys> & AutodefinablePermissionPart;

export type StrictCreatePermissionArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreatePermissionArgs, AutodefinablePermissionKeys>;
export type MutationCreatePermissionArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreatePermissionArgs, AutodefinablePermissionKeys>;
export type MutationUpdatePermissionArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdatePermissionArgs, AutodefinablePermissionKeys>;

export class PermissionsService extends BaseService<
  Permission,
  MutationCreatePermissionArgs,
  MutationUpdatePermissionArgs,
  MutationRemovePermissionArgs,
  QueryAllPermissionsArgs,
  AutodefinablePermissionKeys,
  ForbidenForUserPermissionKeys,
  RequiredDbNotUserPermissionKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.permission, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
