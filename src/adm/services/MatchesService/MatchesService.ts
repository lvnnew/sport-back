import {
  MutationCreateMatchArgs,
  MutationUpdateMatchArgs,
  MutationRemoveMatchArgs,
  QueryAllMatchesArgs,
  Match,
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

export type AutodefinableMatchKeys = 'createdByManagerId' | 'duration' | 'active';
export type ForbidenForUserMatchKeys = 'createdByManagerId' | 'lastChangedByManagerId';
export type RequiredDbNotUserMatchKeys = 'createdByManagerId';

export type AutodefinableMatchPart = DefinedRecord<Pick<MutationCreateMatchArgs, AutodefinableMatchKeys>>;

export type ReliableMatchCreateUserInput =
  Omit<MutationCreateMatchArgs, ForbidenForUserMatchKeys>
  & AutodefinableMatchPart;

export type AllowedMatchForUserCreateInput = Omit<MutationCreateMatchArgs, ForbidenForUserMatchKeys>;

export type StrictCreateMatchArgs = DefinedFieldsInRecord<MutationCreateMatchArgs, RequiredDbNotUserMatchKeys> & AutodefinableMatchPart;
export type StrictUpdateMatchArgs = DefinedFieldsInRecord<MutationUpdateMatchArgs, RequiredDbNotUserMatchKeys> & AutodefinableMatchPart;

export type StrictCreateMatchArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMatchArgs, AutodefinableMatchKeys>;
export type MutationCreateMatchArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMatchArgs, AutodefinableMatchKeys>;
export type MutationUpdateMatchArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMatchArgs, AutodefinableMatchKeys>;

export class MatchesService extends BaseService<
  Match,
  MutationCreateMatchArgs,
  MutationUpdateMatchArgs,
  MutationRemoveMatchArgs,
  QueryAllMatchesArgs,
  AutodefinableMatchKeys,
  ForbidenForUserMatchKeys,
  RequiredDbNotUserMatchKeys,
  Prisma.MatchDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.match, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinableMatchPart> => {
      const defaultFieldConstructors = {
        createdByManagerId: async () => ctx.service('profile').getManagerId(),
        duration: async () => 90,
        active: async () => true,
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableMatchPart;
    };
  }
}
