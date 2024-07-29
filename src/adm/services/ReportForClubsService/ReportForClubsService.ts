import {
  MutationCreateReportForClubArgs,
  MutationUpdateReportForClubArgs,
  MutationRemoveReportForClubArgs,
  QueryAllReportForClubsArgs,
  ReportForClub,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import * as R from 'ramda';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableReportForClubKeys = 'lastUpdated';
export type ForbidenForUserReportForClubKeys = 'lastUpdated';
export type RequiredDbNotUserReportForClubKeys = never;

export type AutodefinableReportForClubPart = DefinedRecord<Pick<MutationCreateReportForClubArgs, AutodefinableReportForClubKeys>>;

export type ReliableReportForClubCreateUserInput =
  Omit<MutationCreateReportForClubArgs, ForbidenForUserReportForClubKeys>
  & AutodefinableReportForClubPart;

export type AllowedReportForClubForUserCreateInput = Omit<MutationCreateReportForClubArgs, ForbidenForUserReportForClubKeys>;

export type StrictCreateReportForClubArgs = DefinedFieldsInRecord<MutationCreateReportForClubArgs, RequiredDbNotUserReportForClubKeys> & AutodefinableReportForClubPart;
export type StrictUpdateReportForClubArgs = DefinedFieldsInRecord<MutationUpdateReportForClubArgs, RequiredDbNotUserReportForClubKeys> & AutodefinableReportForClubPart;

export type StrictCreateReportForClubArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateReportForClubArgs, AutodefinableReportForClubKeys>;
export type MutationCreateReportForClubArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateReportForClubArgs, AutodefinableReportForClubKeys>;
export type MutationUpdateReportForClubArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateReportForClubArgs, AutodefinableReportForClubKeys>;

export class ReportForClubsService extends BaseService<
  ReportForClub,
  MutationCreateReportForClubArgs,
  MutationUpdateReportForClubArgs,
  MutationRemoveReportForClubArgs,
  QueryAllReportForClubsArgs,
  AutodefinableReportForClubKeys,
  ForbidenForUserReportForClubKeys,
  RequiredDbNotUserReportForClubKeys,
  Prisma.ReportForClubDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.reportForClub, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinableReportForClubPart> => {
      const defaultFieldConstructors = {
        lastUpdated: async () => new Date(),
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableReportForClubPart;
    };
  }
}
