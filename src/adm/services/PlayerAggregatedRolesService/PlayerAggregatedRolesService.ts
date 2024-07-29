import {
  MutationCreatePlayerAggregatedRoleArgs,
  MutationUpdatePlayerAggregatedRoleArgs,
  MutationRemovePlayerAggregatedRoleArgs,
  QueryAllPlayerAggregatedRolesArgs,
  PlayerAggregatedRole,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinablePlayerAggregatedRoleKeys = never;
export type ForbidenForUserPlayerAggregatedRoleKeys = never;
export type RequiredDbNotUserPlayerAggregatedRoleKeys = never;

export type AutodefinablePlayerAggregatedRolePart = DefinedRecord<Pick<MutationCreatePlayerAggregatedRoleArgs, AutodefinablePlayerAggregatedRoleKeys>>;

export type ReliablePlayerAggregatedRoleCreateUserInput =
  Omit<MutationCreatePlayerAggregatedRoleArgs, ForbidenForUserPlayerAggregatedRoleKeys>
  & AutodefinablePlayerAggregatedRolePart;

export type AllowedPlayerAggregatedRoleForUserCreateInput = Omit<MutationCreatePlayerAggregatedRoleArgs, ForbidenForUserPlayerAggregatedRoleKeys>;

export type StrictCreatePlayerAggregatedRoleArgs = DefinedFieldsInRecord<MutationCreatePlayerAggregatedRoleArgs, RequiredDbNotUserPlayerAggregatedRoleKeys> & AutodefinablePlayerAggregatedRolePart;
export type StrictUpdatePlayerAggregatedRoleArgs = DefinedFieldsInRecord<MutationUpdatePlayerAggregatedRoleArgs, RequiredDbNotUserPlayerAggregatedRoleKeys> & AutodefinablePlayerAggregatedRolePart;

export type StrictCreatePlayerAggregatedRoleArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreatePlayerAggregatedRoleArgs, AutodefinablePlayerAggregatedRoleKeys>;
export type MutationCreatePlayerAggregatedRoleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreatePlayerAggregatedRoleArgs, AutodefinablePlayerAggregatedRoleKeys>;
export type MutationUpdatePlayerAggregatedRoleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdatePlayerAggregatedRoleArgs, AutodefinablePlayerAggregatedRoleKeys>;

export class PlayerAggregatedRolesService extends BaseService<
  PlayerAggregatedRole,
  MutationCreatePlayerAggregatedRoleArgs,
  MutationUpdatePlayerAggregatedRoleArgs,
  MutationRemovePlayerAggregatedRoleArgs,
  QueryAllPlayerAggregatedRolesArgs,
  AutodefinablePlayerAggregatedRoleKeys,
  ForbidenForUserPlayerAggregatedRoleKeys,
  RequiredDbNotUserPlayerAggregatedRoleKeys,
  Prisma.PlayerAggregatedRoleDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.playerAggregatedRole, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
