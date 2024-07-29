import {
  MutationCreateTeamForCompetitionArgs,
  MutationUpdateTeamForCompetitionArgs,
  MutationRemoveTeamForCompetitionArgs,
  QueryAllTeamForCompetitionsArgs,
  TeamForCompetition,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableTeamForCompetitionKeys = never;
export type ForbidenForUserTeamForCompetitionKeys = 'fullTitle';
export type RequiredDbNotUserTeamForCompetitionKeys = never;

export type AutodefinableTeamForCompetitionPart = DefinedRecord<Pick<MutationCreateTeamForCompetitionArgs, AutodefinableTeamForCompetitionKeys>>;

export type ReliableTeamForCompetitionCreateUserInput =
  Omit<MutationCreateTeamForCompetitionArgs, ForbidenForUserTeamForCompetitionKeys>
  & AutodefinableTeamForCompetitionPart;

export type AllowedTeamForCompetitionForUserCreateInput = Omit<MutationCreateTeamForCompetitionArgs, ForbidenForUserTeamForCompetitionKeys>;

export type StrictCreateTeamForCompetitionArgs = DefinedFieldsInRecord<MutationCreateTeamForCompetitionArgs, RequiredDbNotUserTeamForCompetitionKeys> & AutodefinableTeamForCompetitionPart;
export type StrictUpdateTeamForCompetitionArgs = DefinedFieldsInRecord<MutationUpdateTeamForCompetitionArgs, RequiredDbNotUserTeamForCompetitionKeys> & AutodefinableTeamForCompetitionPart;

export type StrictCreateTeamForCompetitionArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateTeamForCompetitionArgs, AutodefinableTeamForCompetitionKeys>;
export type MutationCreateTeamForCompetitionArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateTeamForCompetitionArgs, AutodefinableTeamForCompetitionKeys>;
export type MutationUpdateTeamForCompetitionArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateTeamForCompetitionArgs, AutodefinableTeamForCompetitionKeys>;

export class TeamForCompetitionsService extends BaseService<
  TeamForCompetition,
  MutationCreateTeamForCompetitionArgs,
  MutationUpdateTeamForCompetitionArgs,
  MutationRemoveTeamForCompetitionArgs,
  QueryAllTeamForCompetitionsArgs,
  AutodefinableTeamForCompetitionKeys,
  ForbidenForUserTeamForCompetitionKeys,
  RequiredDbNotUserTeamForCompetitionKeys,
  Prisma.TeamForCompetitionDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.teamForCompetition, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
