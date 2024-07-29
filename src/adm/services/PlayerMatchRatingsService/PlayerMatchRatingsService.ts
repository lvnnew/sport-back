import {
  MutationCreatePlayerMatchRatingArgs,
  MutationUpdatePlayerMatchRatingArgs,
  MutationRemovePlayerMatchRatingArgs,
  QueryAllPlayerMatchRatingsArgs,
  PlayerMatchRating,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinablePlayerMatchRatingKeys = never;
export type ForbidenForUserPlayerMatchRatingKeys = never;
export type RequiredDbNotUserPlayerMatchRatingKeys = never;

export type AutodefinablePlayerMatchRatingPart = DefinedRecord<Pick<MutationCreatePlayerMatchRatingArgs, AutodefinablePlayerMatchRatingKeys>>;

export type ReliablePlayerMatchRatingCreateUserInput =
  Omit<MutationCreatePlayerMatchRatingArgs, ForbidenForUserPlayerMatchRatingKeys>
  & AutodefinablePlayerMatchRatingPart;

export type AllowedPlayerMatchRatingForUserCreateInput = Omit<MutationCreatePlayerMatchRatingArgs, ForbidenForUserPlayerMatchRatingKeys>;

export type StrictCreatePlayerMatchRatingArgs = DefinedFieldsInRecord<MutationCreatePlayerMatchRatingArgs, RequiredDbNotUserPlayerMatchRatingKeys> & AutodefinablePlayerMatchRatingPart;
export type StrictUpdatePlayerMatchRatingArgs = DefinedFieldsInRecord<MutationUpdatePlayerMatchRatingArgs, RequiredDbNotUserPlayerMatchRatingKeys> & AutodefinablePlayerMatchRatingPart;

export type StrictCreatePlayerMatchRatingArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreatePlayerMatchRatingArgs, AutodefinablePlayerMatchRatingKeys>;
export type MutationCreatePlayerMatchRatingArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreatePlayerMatchRatingArgs, AutodefinablePlayerMatchRatingKeys>;
export type MutationUpdatePlayerMatchRatingArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdatePlayerMatchRatingArgs, AutodefinablePlayerMatchRatingKeys>;

export class PlayerMatchRatingsService extends BaseService<
  PlayerMatchRating,
  MutationCreatePlayerMatchRatingArgs,
  MutationUpdatePlayerMatchRatingArgs,
  MutationRemovePlayerMatchRatingArgs,
  QueryAllPlayerMatchRatingsArgs,
  AutodefinablePlayerMatchRatingKeys,
  ForbidenForUserPlayerMatchRatingKeys,
  RequiredDbNotUserPlayerMatchRatingKeys,
  Prisma.PlayerMatchRatingDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.playerMatchRating, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
