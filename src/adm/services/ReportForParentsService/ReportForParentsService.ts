import {
  MutationCreateReportForParentArgs,
  MutationUpdateReportForParentArgs,
  MutationRemoveReportForParentArgs,
  QueryAllReportForParentsArgs,
  ReportForParent,
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

export type AutodefinableReportForParentKeys = 'lastUpdated';
export type ForbidenForUserReportForParentKeys = 'lastUpdated';
export type RequiredDbNotUserReportForParentKeys = never;

export type AutodefinableReportForParentPart = DefinedRecord<Pick<MutationCreateReportForParentArgs, AutodefinableReportForParentKeys>>;

export type ReliableReportForParentCreateUserInput =
  Omit<MutationCreateReportForParentArgs, ForbidenForUserReportForParentKeys>
  & AutodefinableReportForParentPart;

export type AllowedReportForParentForUserCreateInput = Omit<MutationCreateReportForParentArgs, ForbidenForUserReportForParentKeys>;

export type StrictCreateReportForParentArgs = DefinedFieldsInRecord<MutationCreateReportForParentArgs, RequiredDbNotUserReportForParentKeys> & AutodefinableReportForParentPart;
export type StrictUpdateReportForParentArgs = DefinedFieldsInRecord<MutationUpdateReportForParentArgs, RequiredDbNotUserReportForParentKeys> & AutodefinableReportForParentPart;

export type StrictCreateReportForParentArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateReportForParentArgs, AutodefinableReportForParentKeys>;
export type MutationCreateReportForParentArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateReportForParentArgs, AutodefinableReportForParentKeys>;
export type MutationUpdateReportForParentArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateReportForParentArgs, AutodefinableReportForParentKeys>;

export class ReportForParentsService extends BaseService<
  ReportForParent,
  MutationCreateReportForParentArgs,
  MutationUpdateReportForParentArgs,
  MutationRemoveReportForParentArgs,
  QueryAllReportForParentsArgs,
  AutodefinableReportForParentKeys,
  ForbidenForUserReportForParentKeys,
  RequiredDbNotUserReportForParentKeys,
  Prisma.ReportForParentDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.reportForParent, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinableReportForParentPart> => {
      const defaultFieldConstructors = {
        lastUpdated: async () => new Date(),
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableReportForParentPart;
    };
  }
}
