import {
  MutationCreateStatArgs,
  MutationUpdateStatArgs,
  MutationRemoveStatArgs,
  QueryAllStatsArgs,
  Stat,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableStatKeys = never;
export type ForbidenForUserStatKeys = never;
export type RequiredDbNotUserStatKeys = never;

export type AutodefinableStatPart = DefinedRecord<Pick<MutationCreateStatArgs, AutodefinableStatKeys>>;

export type ReliableStatCreateUserInput =
  Omit<MutationCreateStatArgs, ForbidenForUserStatKeys>
  & AutodefinableStatPart;

export type AllowedStatForUserCreateInput = Omit<MutationCreateStatArgs, ForbidenForUserStatKeys>;

export type StrictCreateStatArgs = DefinedFieldsInRecord<MutationCreateStatArgs, RequiredDbNotUserStatKeys> & AutodefinableStatPart;
export type StrictUpdateStatArgs = DefinedFieldsInRecord<MutationUpdateStatArgs, RequiredDbNotUserStatKeys> & AutodefinableStatPart;

export type StrictCreateStatArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateStatArgs, AutodefinableStatKeys>;
export type MutationCreateStatArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateStatArgs, AutodefinableStatKeys>;
export type MutationUpdateStatArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateStatArgs, AutodefinableStatKeys>;

export class StatsService extends BaseService<
  Stat,
  MutationCreateStatArgs,
  MutationUpdateStatArgs,
  MutationRemoveStatArgs,
  QueryAllStatsArgs,
  AutodefinableStatKeys,
  ForbidenForUserStatKeys,
  RequiredDbNotUserStatKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.stat, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }

  augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableStatPart> => currentData as T & AutodefinableStatPart;
}
