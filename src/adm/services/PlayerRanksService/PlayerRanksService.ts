import {
  MutationCreatePlayerRankArgs,
  MutationUpdatePlayerRankArgs,
  MutationRemovePlayerRankArgs,
  QueryAllPlayerRanksArgs,
  PlayerRank,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinablePlayerRankKeys = never;
export type ForbidenForUserPlayerRankKeys = never;
export type RequiredDbNotUserPlayerRankKeys = never;

export type AutodefinablePlayerRankPart = DefinedRecord<Pick<MutationCreatePlayerRankArgs, AutodefinablePlayerRankKeys>>;

export type ReliablePlayerRankCreateUserInput =
  Omit<MutationCreatePlayerRankArgs, ForbidenForUserPlayerRankKeys>
  & AutodefinablePlayerRankPart;

export type AllowedPlayerRankForUserCreateInput = Omit<MutationCreatePlayerRankArgs, ForbidenForUserPlayerRankKeys>;

export type StrictCreatePlayerRankArgs = DefinedFieldsInRecord<MutationCreatePlayerRankArgs, RequiredDbNotUserPlayerRankKeys> & AutodefinablePlayerRankPart;
export type StrictUpdatePlayerRankArgs = DefinedFieldsInRecord<MutationUpdatePlayerRankArgs, RequiredDbNotUserPlayerRankKeys> & AutodefinablePlayerRankPart;

export type StrictCreatePlayerRankArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreatePlayerRankArgs, AutodefinablePlayerRankKeys>;
export type MutationCreatePlayerRankArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreatePlayerRankArgs, AutodefinablePlayerRankKeys>;
export type MutationUpdatePlayerRankArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdatePlayerRankArgs, AutodefinablePlayerRankKeys>;

export class PlayerRanksService extends BaseService<
  PlayerRank,
  MutationCreatePlayerRankArgs,
  MutationUpdatePlayerRankArgs,
  MutationRemovePlayerRankArgs,
  QueryAllPlayerRanksArgs,
  AutodefinablePlayerRankKeys,
  ForbidenForUserPlayerRankKeys,
  RequiredDbNotUserPlayerRankKeys,
  Prisma.PlayerRankDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.playerRank, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
