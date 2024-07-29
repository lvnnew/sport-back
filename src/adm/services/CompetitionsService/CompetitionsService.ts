import {
  MutationCreateCompetitionArgs,
  MutationUpdateCompetitionArgs,
  MutationRemoveCompetitionArgs,
  QueryAllCompetitionsArgs,
  Competition,
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

export type AutodefinableCompetitionKeys = 'createdByManagerId';
export type ForbidenForUserCompetitionKeys = 'createdByManagerId' | 'lastChangedByManagerId';
export type RequiredDbNotUserCompetitionKeys = 'createdByManagerId';

export type AutodefinableCompetitionPart = DefinedRecord<Pick<MutationCreateCompetitionArgs, AutodefinableCompetitionKeys>>;

export type ReliableCompetitionCreateUserInput =
  Omit<MutationCreateCompetitionArgs, ForbidenForUserCompetitionKeys>
  & AutodefinableCompetitionPart;

export type AllowedCompetitionForUserCreateInput = Omit<MutationCreateCompetitionArgs, ForbidenForUserCompetitionKeys>;

export type StrictCreateCompetitionArgs = DefinedFieldsInRecord<MutationCreateCompetitionArgs, RequiredDbNotUserCompetitionKeys> & AutodefinableCompetitionPart;
export type StrictUpdateCompetitionArgs = DefinedFieldsInRecord<MutationUpdateCompetitionArgs, RequiredDbNotUserCompetitionKeys> & AutodefinableCompetitionPart;

export type StrictCreateCompetitionArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateCompetitionArgs, AutodefinableCompetitionKeys>;
export type MutationCreateCompetitionArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateCompetitionArgs, AutodefinableCompetitionKeys>;
export type MutationUpdateCompetitionArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateCompetitionArgs, AutodefinableCompetitionKeys>;

export class CompetitionsService extends BaseService<
  Competition,
  MutationCreateCompetitionArgs,
  MutationUpdateCompetitionArgs,
  MutationRemoveCompetitionArgs,
  QueryAllCompetitionsArgs,
  AutodefinableCompetitionKeys,
  ForbidenForUserCompetitionKeys,
  RequiredDbNotUserCompetitionKeys,
  Prisma.CompetitionDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.competition, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinableCompetitionPart> => {
      const defaultFieldConstructors = {
        createdByManagerId: async () => ctx.service('profile').getManagerId(),
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableCompetitionPart;
    };
  }
}
