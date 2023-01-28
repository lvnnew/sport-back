import {
  MutationCreateManagersToRoleArgs,
  MutationUpdateManagersToRoleArgs,
  MutationRemoveManagersToRoleArgs,
  QueryAllManagersToRolesArgs,
  ManagersToRole,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableManagersToRoleKeys = never;
export type ForbidenForUserManagersToRoleKeys = never;
export type RequiredDbNotUserManagersToRoleKeys = never;

export type AutodefinableManagersToRolePart = DefinedRecord<Pick<MutationCreateManagersToRoleArgs, AutodefinableManagersToRoleKeys>>;

export type ReliableManagersToRoleCreateUserInput =
  Omit<MutationCreateManagersToRoleArgs, ForbidenForUserManagersToRoleKeys>
  & AutodefinableManagersToRolePart;

export type AllowedManagersToRoleForUserCreateInput = Omit<MutationCreateManagersToRoleArgs, ForbidenForUserManagersToRoleKeys>;

export type StrictCreateManagersToRoleArgs = DefinedFieldsInRecord<MutationCreateManagersToRoleArgs, RequiredDbNotUserManagersToRoleKeys> & AutodefinableManagersToRolePart;
export type StrictUpdateManagersToRoleArgs = DefinedFieldsInRecord<MutationUpdateManagersToRoleArgs, RequiredDbNotUserManagersToRoleKeys> & AutodefinableManagersToRolePart;

export type StrictCreateManagersToRoleArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateManagersToRoleArgs, AutodefinableManagersToRoleKeys>;
export type MutationCreateManagersToRoleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateManagersToRoleArgs, AutodefinableManagersToRoleKeys>;
export type MutationUpdateManagersToRoleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateManagersToRoleArgs, AutodefinableManagersToRoleKeys>;

export class ManagersToRolesService extends BaseService<
  ManagersToRole,
  MutationCreateManagersToRoleArgs,
  MutationUpdateManagersToRoleArgs,
  MutationRemoveManagersToRoleArgs,
  QueryAllManagersToRolesArgs,
  AutodefinableManagersToRoleKeys,
  ForbidenForUserManagersToRoleKeys,
  RequiredDbNotUserManagersToRoleKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.managersToRole, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
