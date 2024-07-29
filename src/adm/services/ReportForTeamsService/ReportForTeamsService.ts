import {
  MutationCreateReportForTeamArgs,
  MutationUpdateReportForTeamArgs,
  MutationRemoveReportForTeamArgs,
  QueryAllReportForTeamsArgs,
  ReportForTeam,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableReportForTeamKeys = never;
export type ForbidenForUserReportForTeamKeys = never;
export type RequiredDbNotUserReportForTeamKeys = never;

export type AutodefinableReportForTeamPart = DefinedRecord<Pick<MutationCreateReportForTeamArgs, AutodefinableReportForTeamKeys>>;

export type ReliableReportForTeamCreateUserInput =
  Omit<MutationCreateReportForTeamArgs, ForbidenForUserReportForTeamKeys>
  & AutodefinableReportForTeamPart;

export type AllowedReportForTeamForUserCreateInput = Omit<MutationCreateReportForTeamArgs, ForbidenForUserReportForTeamKeys>;

export type StrictCreateReportForTeamArgs = DefinedFieldsInRecord<MutationCreateReportForTeamArgs, RequiredDbNotUserReportForTeamKeys> & AutodefinableReportForTeamPart;
export type StrictUpdateReportForTeamArgs = DefinedFieldsInRecord<MutationUpdateReportForTeamArgs, RequiredDbNotUserReportForTeamKeys> & AutodefinableReportForTeamPart;

export type StrictCreateReportForTeamArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateReportForTeamArgs, AutodefinableReportForTeamKeys>;
export type MutationCreateReportForTeamArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateReportForTeamArgs, AutodefinableReportForTeamKeys>;
export type MutationUpdateReportForTeamArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateReportForTeamArgs, AutodefinableReportForTeamKeys>;

export class ReportForTeamsService extends BaseService<
  ReportForTeam,
  MutationCreateReportForTeamArgs,
  MutationUpdateReportForTeamArgs,
  MutationRemoveReportForTeamArgs,
  QueryAllReportForTeamsArgs,
  AutodefinableReportForTeamKeys,
  ForbidenForUserReportForTeamKeys,
  RequiredDbNotUserReportForTeamKeys,
  Prisma.ReportForTeamDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.reportForTeam, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
