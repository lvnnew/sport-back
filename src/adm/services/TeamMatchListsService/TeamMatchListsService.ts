import {
  MutationCreateTeamMatchListArgs,
  MutationUpdateTeamMatchListArgs,
  MutationRemoveTeamMatchListArgs,
  QueryAllTeamMatchListsArgs,
  TeamMatchList,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableTeamMatchListKeys = never;
export type ForbidenForUserTeamMatchListKeys = never;
export type RequiredDbNotUserTeamMatchListKeys = never;

export type AutodefinableTeamMatchListPart = DefinedRecord<Pick<MutationCreateTeamMatchListArgs, AutodefinableTeamMatchListKeys>>;

export type ReliableTeamMatchListCreateUserInput =
  Omit<MutationCreateTeamMatchListArgs, ForbidenForUserTeamMatchListKeys>
  & AutodefinableTeamMatchListPart;

export type AllowedTeamMatchListForUserCreateInput = Omit<MutationCreateTeamMatchListArgs, ForbidenForUserTeamMatchListKeys>;

export type StrictCreateTeamMatchListArgs = DefinedFieldsInRecord<MutationCreateTeamMatchListArgs, RequiredDbNotUserTeamMatchListKeys> & AutodefinableTeamMatchListPart;
export type StrictUpdateTeamMatchListArgs = DefinedFieldsInRecord<MutationUpdateTeamMatchListArgs, RequiredDbNotUserTeamMatchListKeys> & AutodefinableTeamMatchListPart;

export type StrictCreateTeamMatchListArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateTeamMatchListArgs, AutodefinableTeamMatchListKeys>;
export type MutationCreateTeamMatchListArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateTeamMatchListArgs, AutodefinableTeamMatchListKeys>;
export type MutationUpdateTeamMatchListArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateTeamMatchListArgs, AutodefinableTeamMatchListKeys>;

export class TeamMatchListsService extends BaseService<
  TeamMatchList,
  MutationCreateTeamMatchListArgs,
  MutationUpdateTeamMatchListArgs,
  MutationRemoveTeamMatchListArgs,
  QueryAllTeamMatchListsArgs,
  AutodefinableTeamMatchListKeys,
  ForbidenForUserTeamMatchListKeys,
  RequiredDbNotUserTeamMatchListKeys,
  Prisma.TeamMatchListDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.teamMatchList, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
