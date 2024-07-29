import {
  MutationCreatePlayerForCompetitionTeamArgs,
  MutationUpdatePlayerForCompetitionTeamArgs,
  MutationRemovePlayerForCompetitionTeamArgs,
  QueryAllPlayerForCompetitionTeamsArgs,
  PlayerForCompetitionTeam,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinablePlayerForCompetitionTeamKeys = never;
export type ForbidenForUserPlayerForCompetitionTeamKeys = never;
export type RequiredDbNotUserPlayerForCompetitionTeamKeys = never;

export type AutodefinablePlayerForCompetitionTeamPart = DefinedRecord<Pick<MutationCreatePlayerForCompetitionTeamArgs, AutodefinablePlayerForCompetitionTeamKeys>>;

export type ReliablePlayerForCompetitionTeamCreateUserInput =
  Omit<MutationCreatePlayerForCompetitionTeamArgs, ForbidenForUserPlayerForCompetitionTeamKeys>
  & AutodefinablePlayerForCompetitionTeamPart;

export type AllowedPlayerForCompetitionTeamForUserCreateInput = Omit<MutationCreatePlayerForCompetitionTeamArgs, ForbidenForUserPlayerForCompetitionTeamKeys>;

export type StrictCreatePlayerForCompetitionTeamArgs = DefinedFieldsInRecord<MutationCreatePlayerForCompetitionTeamArgs, RequiredDbNotUserPlayerForCompetitionTeamKeys> & AutodefinablePlayerForCompetitionTeamPart;
export type StrictUpdatePlayerForCompetitionTeamArgs = DefinedFieldsInRecord<MutationUpdatePlayerForCompetitionTeamArgs, RequiredDbNotUserPlayerForCompetitionTeamKeys> & AutodefinablePlayerForCompetitionTeamPart;

export type StrictCreatePlayerForCompetitionTeamArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreatePlayerForCompetitionTeamArgs, AutodefinablePlayerForCompetitionTeamKeys>;
export type MutationCreatePlayerForCompetitionTeamArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreatePlayerForCompetitionTeamArgs, AutodefinablePlayerForCompetitionTeamKeys>;
export type MutationUpdatePlayerForCompetitionTeamArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdatePlayerForCompetitionTeamArgs, AutodefinablePlayerForCompetitionTeamKeys>;

export class PlayerForCompetitionTeamsService extends BaseService<
  PlayerForCompetitionTeam,
  MutationCreatePlayerForCompetitionTeamArgs,
  MutationUpdatePlayerForCompetitionTeamArgs,
  MutationRemovePlayerForCompetitionTeamArgs,
  QueryAllPlayerForCompetitionTeamsArgs,
  AutodefinablePlayerForCompetitionTeamKeys,
  ForbidenForUserPlayerForCompetitionTeamKeys,
  RequiredDbNotUserPlayerForCompetitionTeamKeys,
  Prisma.PlayerForCompetitionTeamDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.playerForCompetitionTeam, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
