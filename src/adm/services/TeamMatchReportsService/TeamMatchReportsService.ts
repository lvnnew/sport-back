import {
  MutationCreateTeamMatchReportArgs,
  MutationUpdateTeamMatchReportArgs,
  MutationRemoveTeamMatchReportArgs,
  QueryAllTeamMatchReportsArgs,
  TeamMatchReport,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableTeamMatchReportKeys = never;
export type ForbidenForUserTeamMatchReportKeys = 'lastUpdated';
export type RequiredDbNotUserTeamMatchReportKeys = never;

export type AutodefinableTeamMatchReportPart = DefinedRecord<Pick<MutationCreateTeamMatchReportArgs, AutodefinableTeamMatchReportKeys>>;

export type ReliableTeamMatchReportCreateUserInput =
  Omit<MutationCreateTeamMatchReportArgs, ForbidenForUserTeamMatchReportKeys>
  & AutodefinableTeamMatchReportPart;

export type AllowedTeamMatchReportForUserCreateInput = Omit<MutationCreateTeamMatchReportArgs, ForbidenForUserTeamMatchReportKeys>;

export type StrictCreateTeamMatchReportArgs = DefinedFieldsInRecord<MutationCreateTeamMatchReportArgs, RequiredDbNotUserTeamMatchReportKeys> & AutodefinableTeamMatchReportPart;
export type StrictUpdateTeamMatchReportArgs = DefinedFieldsInRecord<MutationUpdateTeamMatchReportArgs, RequiredDbNotUserTeamMatchReportKeys> & AutodefinableTeamMatchReportPart;

export type StrictCreateTeamMatchReportArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateTeamMatchReportArgs, AutodefinableTeamMatchReportKeys>;
export type MutationCreateTeamMatchReportArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateTeamMatchReportArgs, AutodefinableTeamMatchReportKeys>;
export type MutationUpdateTeamMatchReportArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateTeamMatchReportArgs, AutodefinableTeamMatchReportKeys>;

export class TeamMatchReportsService extends BaseService<
  TeamMatchReport,
  MutationCreateTeamMatchReportArgs,
  MutationUpdateTeamMatchReportArgs,
  MutationRemoveTeamMatchReportArgs,
  QueryAllTeamMatchReportsArgs,
  AutodefinableTeamMatchReportKeys,
  ForbidenForUserTeamMatchReportKeys,
  RequiredDbNotUserTeamMatchReportKeys,
  Prisma.TeamMatchReportDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.teamMatchReport, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
