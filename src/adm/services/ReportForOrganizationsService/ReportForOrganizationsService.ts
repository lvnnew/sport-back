import {
  MutationCreateReportForOrganizationArgs,
  MutationUpdateReportForOrganizationArgs,
  MutationRemoveReportForOrganizationArgs,
  QueryAllReportForOrganizationsArgs,
  ReportForOrganization,
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

export type AutodefinableReportForOrganizationKeys = 'lastUpdated';
export type ForbidenForUserReportForOrganizationKeys = 'lastUpdated';
export type RequiredDbNotUserReportForOrganizationKeys = never;

export type AutodefinableReportForOrganizationPart = DefinedRecord<Pick<MutationCreateReportForOrganizationArgs, AutodefinableReportForOrganizationKeys>>;

export type ReliableReportForOrganizationCreateUserInput =
  Omit<MutationCreateReportForOrganizationArgs, ForbidenForUserReportForOrganizationKeys>
  & AutodefinableReportForOrganizationPart;

export type AllowedReportForOrganizationForUserCreateInput = Omit<MutationCreateReportForOrganizationArgs, ForbidenForUserReportForOrganizationKeys>;

export type StrictCreateReportForOrganizationArgs = DefinedFieldsInRecord<MutationCreateReportForOrganizationArgs, RequiredDbNotUserReportForOrganizationKeys> & AutodefinableReportForOrganizationPart;
export type StrictUpdateReportForOrganizationArgs = DefinedFieldsInRecord<MutationUpdateReportForOrganizationArgs, RequiredDbNotUserReportForOrganizationKeys> & AutodefinableReportForOrganizationPart;

export type StrictCreateReportForOrganizationArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateReportForOrganizationArgs, AutodefinableReportForOrganizationKeys>;
export type MutationCreateReportForOrganizationArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateReportForOrganizationArgs, AutodefinableReportForOrganizationKeys>;
export type MutationUpdateReportForOrganizationArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateReportForOrganizationArgs, AutodefinableReportForOrganizationKeys>;

export class ReportForOrganizationsService extends BaseService<
  ReportForOrganization,
  MutationCreateReportForOrganizationArgs,
  MutationUpdateReportForOrganizationArgs,
  MutationRemoveReportForOrganizationArgs,
  QueryAllReportForOrganizationsArgs,
  AutodefinableReportForOrganizationKeys,
  ForbidenForUserReportForOrganizationKeys,
  RequiredDbNotUserReportForOrganizationKeys,
  Prisma.ReportForOrganizationDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.reportForOrganization, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinableReportForOrganizationPart> => {
      const defaultFieldConstructors = {
        lastUpdated: async () => new Date(),
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableReportForOrganizationPart;
    };
  }
}
