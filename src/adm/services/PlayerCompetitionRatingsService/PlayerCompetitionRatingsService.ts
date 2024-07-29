import {
  MutationCreatePlayerCompetitionRatingArgs,
  MutationUpdatePlayerCompetitionRatingArgs,
  MutationRemovePlayerCompetitionRatingArgs,
  QueryAllPlayerCompetitionRatingsArgs,
  PlayerCompetitionRating,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinablePlayerCompetitionRatingKeys = never;
export type ForbidenForUserPlayerCompetitionRatingKeys = never;
export type RequiredDbNotUserPlayerCompetitionRatingKeys = never;

export type AutodefinablePlayerCompetitionRatingPart = DefinedRecord<Pick<MutationCreatePlayerCompetitionRatingArgs, AutodefinablePlayerCompetitionRatingKeys>>;

export type ReliablePlayerCompetitionRatingCreateUserInput =
  Omit<MutationCreatePlayerCompetitionRatingArgs, ForbidenForUserPlayerCompetitionRatingKeys>
  & AutodefinablePlayerCompetitionRatingPart;

export type AllowedPlayerCompetitionRatingForUserCreateInput = Omit<MutationCreatePlayerCompetitionRatingArgs, ForbidenForUserPlayerCompetitionRatingKeys>;

export type StrictCreatePlayerCompetitionRatingArgs = DefinedFieldsInRecord<MutationCreatePlayerCompetitionRatingArgs, RequiredDbNotUserPlayerCompetitionRatingKeys> & AutodefinablePlayerCompetitionRatingPart;
export type StrictUpdatePlayerCompetitionRatingArgs = DefinedFieldsInRecord<MutationUpdatePlayerCompetitionRatingArgs, RequiredDbNotUserPlayerCompetitionRatingKeys> & AutodefinablePlayerCompetitionRatingPart;

export type StrictCreatePlayerCompetitionRatingArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreatePlayerCompetitionRatingArgs, AutodefinablePlayerCompetitionRatingKeys>;
export type MutationCreatePlayerCompetitionRatingArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreatePlayerCompetitionRatingArgs, AutodefinablePlayerCompetitionRatingKeys>;
export type MutationUpdatePlayerCompetitionRatingArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdatePlayerCompetitionRatingArgs, AutodefinablePlayerCompetitionRatingKeys>;

export class PlayerCompetitionRatingsService extends BaseService<
  PlayerCompetitionRating,
  MutationCreatePlayerCompetitionRatingArgs,
  MutationUpdatePlayerCompetitionRatingArgs,
  MutationRemovePlayerCompetitionRatingArgs,
  QueryAllPlayerCompetitionRatingsArgs,
  AutodefinablePlayerCompetitionRatingKeys,
  ForbidenForUserPlayerCompetitionRatingKeys,
  RequiredDbNotUserPlayerCompetitionRatingKeys,
  Prisma.PlayerCompetitionRatingDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.playerCompetitionRating, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
