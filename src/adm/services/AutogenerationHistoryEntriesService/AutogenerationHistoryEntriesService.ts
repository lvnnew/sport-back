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
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableAutogenerationHistoryEntryKeys = never;
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
  RequiredDbNotUserAutogenerationHistoryEntryKeys,
  Prisma.AutogenerationHistoryEntryDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.autogenerationHistoryEntry, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
