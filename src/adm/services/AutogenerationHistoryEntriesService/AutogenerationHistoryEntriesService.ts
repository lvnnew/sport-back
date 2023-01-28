import {
  MutationCreateAutogenerationHistoryEntryArgs,
  MutationUpdateAutogenerationHistoryEntryArgs,
  MutationRemoveAutogenerationHistoryEntryArgs,
  QueryAllAutogenerationHistoryEntriesArgs,
  AutogenerationHistoryEntry,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import * as R from 'ramda';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableAutogenerationHistoryEntryKeys = 'errorOccurred';
export type ForbidenForUserAutogenerationHistoryEntryKeys = never;
export type RequiredDbNotUserAutogenerationHistoryEntryKeys = never;

export type AutodefinableAutogenerationHistoryEntryPart = DefinedRecord<Pick<MutationCreateAutogenerationHistoryEntryArgs, AutodefinableAutogenerationHistoryEntryKeys>>;

export type ReliableAutogenerationHistoryEntryCreateUserInput =
  Omit<MutationCreateAutogenerationHistoryEntryArgs, ForbidenForUserAutogenerationHistoryEntryKeys>
  & AutodefinableAutogenerationHistoryEntryPart;

export type AllowedAutogenerationHistoryEntryForUserCreateInput = Omit<MutationCreateAutogenerationHistoryEntryArgs, ForbidenForUserAutogenerationHistoryEntryKeys>;

export type StrictCreateAutogenerationHistoryEntryArgs = DefinedFieldsInRecord<MutationCreateAutogenerationHistoryEntryArgs, RequiredDbNotUserAutogenerationHistoryEntryKeys> & AutodefinableAutogenerationHistoryEntryPart;
export type StrictUpdateAutogenerationHistoryEntryArgs = DefinedFieldsInRecord<MutationUpdateAutogenerationHistoryEntryArgs, RequiredDbNotUserAutogenerationHistoryEntryKeys> & AutodefinableAutogenerationHistoryEntryPart;

export type StrictCreateAutogenerationHistoryEntryArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateAutogenerationHistoryEntryArgs, AutodefinableAutogenerationHistoryEntryKeys>;
export type MutationCreateAutogenerationHistoryEntryArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateAutogenerationHistoryEntryArgs, AutodefinableAutogenerationHistoryEntryKeys>;
export type MutationUpdateAutogenerationHistoryEntryArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateAutogenerationHistoryEntryArgs, AutodefinableAutogenerationHistoryEntryKeys>;

export class AutogenerationHistoryEntriesService extends BaseService<
  AutogenerationHistoryEntry,
  MutationCreateAutogenerationHistoryEntryArgs,
  MutationUpdateAutogenerationHistoryEntryArgs,
  MutationRemoveAutogenerationHistoryEntryArgs,
  QueryAllAutogenerationHistoryEntriesArgs,
  AutodefinableAutogenerationHistoryEntryKeys,
  ForbidenForUserAutogenerationHistoryEntryKeys,
  RequiredDbNotUserAutogenerationHistoryEntryKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.autogenerationHistoryEntry, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinableAutogenerationHistoryEntryPart> => {
      const defaultFieldConstructors = {
        errorOccurred: async () => false,
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableAutogenerationHistoryEntryPart;
    };
  }
}
