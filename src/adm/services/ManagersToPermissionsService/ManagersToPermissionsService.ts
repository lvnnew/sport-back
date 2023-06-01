import {
  MutationCreateManagersToPermissionArgs,
  MutationUpdateManagersToPermissionArgs,
  MutationRemoveManagersToPermissionArgs,
  QueryAllManagersToPermissionsArgs,
  ManagersToPermission,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableManagersToPermissionKeys = never;
export type ForbidenForUserManagersToPermissionKeys = never;
export type RequiredDbNotUserManagersToPermissionKeys = never;

export type AutodefinableManagersToPermissionPart = DefinedRecord<Pick<MutationCreateManagersToPermissionArgs, AutodefinableManagersToPermissionKeys>>;

export type ReliableManagersToPermissionCreateUserInput =
  Omit<MutationCreateManagersToPermissionArgs, ForbidenForUserManagersToPermissionKeys>
  & AutodefinableManagersToPermissionPart;

export type AllowedManagersToPermissionForUserCreateInput = Omit<MutationCreateManagersToPermissionArgs, ForbidenForUserManagersToPermissionKeys>;

export type StrictCreateManagersToPermissionArgs = DefinedFieldsInRecord<MutationCreateManagersToPermissionArgs, RequiredDbNotUserManagersToPermissionKeys> & AutodefinableManagersToPermissionPart;
export type StrictUpdateManagersToPermissionArgs = DefinedFieldsInRecord<MutationUpdateManagersToPermissionArgs, RequiredDbNotUserManagersToPermissionKeys> & AutodefinableManagersToPermissionPart;

export type StrictCreateManagersToPermissionArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateManagersToPermissionArgs, AutodefinableManagersToPermissionKeys>;
export type MutationCreateManagersToPermissionArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateManagersToPermissionArgs, AutodefinableManagersToPermissionKeys>;
export type MutationUpdateManagersToPermissionArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateManagersToPermissionArgs, AutodefinableManagersToPermissionKeys>;

export class ManagersToPermissionsService extends BaseService<
  ManagersToPermission,
  MutationCreateManagersToPermissionArgs,
  MutationUpdateManagersToPermissionArgs,
  MutationRemoveManagersToPermissionArgs,
  QueryAllManagersToPermissionsArgs,
  AutodefinableManagersToPermissionKeys,
  ForbidenForUserManagersToPermissionKeys,
  RequiredDbNotUserManagersToPermissionKeys,
  Prisma.ManagersToPermissionDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.managersToPermission, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
