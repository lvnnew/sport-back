import {
  MutationCreateTeamForPlayerArgs,
  MutationUpdateTeamForPlayerArgs,
  MutationRemoveTeamForPlayerArgs,
  QueryAllTeamForPlayersArgs,
  TeamForPlayer,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableTeamForPlayerKeys = never;
export type ForbidenForUserTeamForPlayerKeys = never;
export type RequiredDbNotUserTeamForPlayerKeys = never;

export type AutodefinableTeamForPlayerPart = DefinedRecord<Pick<MutationCreateTeamForPlayerArgs, AutodefinableTeamForPlayerKeys>>;

export type ReliableTeamForPlayerCreateUserInput =
  Omit<MutationCreateTeamForPlayerArgs, ForbidenForUserTeamForPlayerKeys>
  & AutodefinableTeamForPlayerPart;

export type AllowedTeamForPlayerForUserCreateInput = Omit<MutationCreateTeamForPlayerArgs, ForbidenForUserTeamForPlayerKeys>;

export type StrictCreateTeamForPlayerArgs = DefinedFieldsInRecord<MutationCreateTeamForPlayerArgs, RequiredDbNotUserTeamForPlayerKeys> & AutodefinableTeamForPlayerPart;
export type StrictUpdateTeamForPlayerArgs = DefinedFieldsInRecord<MutationUpdateTeamForPlayerArgs, RequiredDbNotUserTeamForPlayerKeys> & AutodefinableTeamForPlayerPart;

export type StrictCreateTeamForPlayerArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateTeamForPlayerArgs, AutodefinableTeamForPlayerKeys>;
export type MutationCreateTeamForPlayerArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateTeamForPlayerArgs, AutodefinableTeamForPlayerKeys>;
export type MutationUpdateTeamForPlayerArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateTeamForPlayerArgs, AutodefinableTeamForPlayerKeys>;

export class TeamForPlayersService extends BaseService<
  TeamForPlayer,
  MutationCreateTeamForPlayerArgs,
  MutationUpdateTeamForPlayerArgs,
  MutationRemoveTeamForPlayerArgs,
  QueryAllTeamForPlayersArgs,
  AutodefinableTeamForPlayerKeys,
  ForbidenForUserTeamForPlayerKeys,
  RequiredDbNotUserTeamForPlayerKeys,
  Prisma.TeamForPlayerDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.teamForPlayer, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
