import {
  ListMetadata,
  MutationCreateStatArgs,
  MutationUpdateStatArgs,
  MutationRemoveStatArgs,
  QueryAllStatsArgs,
  Query_AllStatsMetaArgs,
  Stat,
  StatFilter,
} from '../../../generated/graphql';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import config from './config';

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

export interface BaseStatsMethods {
  get: (id: string) =>
    Promise<Stat | null>;
  getRequired: (id: string) =>
    Promise<Stat>;
  all: (params?: QueryAllStatsArgs) =>
    Promise<Stat[]>;
  findOne: (params?: QueryAllStatsArgs) =>
    Promise<Stat | null>;
  findOneRequired: (params?: QueryAllStatsArgs) =>
    Promise<Stat>;
  count: (params?: Query_AllStatsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllStatsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateStatArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<Stat>;
  createMany: (data: StrictCreateStatArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateStatArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<Stat>;
  upsert: (
    data: PartialFieldsInRecord<MutationUpdateStatArgsWithoutAutodefinable, 'id'>,
    byUser?: boolean,
  ) =>
    Promise<Stat>;
  upsertAdvanced: (
    filter: StatFilter,
    data: MutationCreateStatArgsWithoutAutodefinable,
    byUser?: boolean,
  ) =>
    Promise<Stat>;
  delete: (params: MutationRemoveStatArgs) =>
    Promise<Stat>;
}

export class BaseStatsServiceClass extends BaseService<
  Stat,
  QueryAllStatsArgs,
  ReliableStatCreateUserInput,
  MutationUpdateStatArgs,
  MutationRemoveStatArgs,
  StrictCreateStatArgs,
  StrictUpdateStatArgs,
  AutodefinableStatPart,
  MutationCreateStatArgsWithoutAutodefinable,
  MutationUpdateStatArgsWithoutAutodefinable,
  StrictCreateStatArgsWithoutAutodefinable
> implements BaseStatsMethods {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.stat, config);
    initBuiltInHooks(this as any); // todo: fix
    initUserHooks(this as any); // todo: fix
  }

  augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableStatPart> => currentData as T & AutodefinableStatPart;
}
