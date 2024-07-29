import {
  MutationCreatePlayerRoleArgs,
  MutationUpdatePlayerRoleArgs,
  MutationRemovePlayerRoleArgs,
  QueryAllPlayerRolesArgs,
  PlayerRole,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinablePlayerRoleKeys = never;
export type ForbidenForUserPlayerRoleKeys = never;
export type RequiredDbNotUserPlayerRoleKeys = never;

export type AutodefinablePlayerRolePart = DefinedRecord<Pick<MutationCreatePlayerRoleArgs, AutodefinablePlayerRoleKeys>>;

export type ReliablePlayerRoleCreateUserInput =
  Omit<MutationCreatePlayerRoleArgs, ForbidenForUserPlayerRoleKeys>
  & AutodefinablePlayerRolePart;

export type AllowedPlayerRoleForUserCreateInput = Omit<MutationCreatePlayerRoleArgs, ForbidenForUserPlayerRoleKeys>;

export type StrictCreatePlayerRoleArgs = DefinedFieldsInRecord<MutationCreatePlayerRoleArgs, RequiredDbNotUserPlayerRoleKeys> & AutodefinablePlayerRolePart;
export type StrictUpdatePlayerRoleArgs = DefinedFieldsInRecord<MutationUpdatePlayerRoleArgs, RequiredDbNotUserPlayerRoleKeys> & AutodefinablePlayerRolePart;

export type StrictCreatePlayerRoleArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreatePlayerRoleArgs, AutodefinablePlayerRoleKeys>;
export type MutationCreatePlayerRoleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreatePlayerRoleArgs, AutodefinablePlayerRoleKeys>;
export type MutationUpdatePlayerRoleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdatePlayerRoleArgs, AutodefinablePlayerRoleKeys>;

export class PlayerRolesService extends BaseService<
  PlayerRole,
  MutationCreatePlayerRoleArgs,
  MutationUpdatePlayerRoleArgs,
  MutationRemovePlayerRoleArgs,
  QueryAllPlayerRolesArgs,
  AutodefinablePlayerRoleKeys,
  ForbidenForUserPlayerRoleKeys,
  RequiredDbNotUserPlayerRoleKeys,
  Prisma.PlayerRoleDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.playerRole, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
