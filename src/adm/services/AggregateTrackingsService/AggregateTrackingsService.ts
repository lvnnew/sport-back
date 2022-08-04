import {
  ListMetadata,
  MutationCreateAggregateTrackingArgs,
  MutationUpdateAggregateTrackingArgs,
  MutationRemoveAggregateTrackingArgs,
  QueryAllAggregateTrackingsArgs,
  Query_AllAggregateTrackingsMetaArgs,
  AggregateTracking,
  AggregateTrackingFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAggregateTrackingsMethods, getAdditionalMethods} from './additionalMethods';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {getHooksUtils, HooksAddType} from '../getHooksUtils';
import * as R from 'ramda';
import Entity from '../../../types/Entity';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type AutodefinableAggregateTrackingKeys = never;
export type ForbidenForUserAggregateTrackingKeys = never;
export type RequiredDbNotUserAggregateTrackingKeys = never;

export type AutodefinableAggregateTrackingPart = DefinedRecord<Pick<MutationCreateAggregateTrackingArgs, AutodefinableAggregateTrackingKeys>>;

export type ReliableAggregateTrackingCreateUserInput =
  Omit<MutationCreateAggregateTrackingArgs, ForbidenForUserAggregateTrackingKeys>
  & AutodefinableAggregateTrackingPart;

export type AllowedAggregateTrackingForUserCreateInput = Omit<MutationCreateAggregateTrackingArgs, ForbidenForUserAggregateTrackingKeys>;

export type StrictCreateAggregateTrackingArgs = DefinedFieldsInRecord<MutationCreateAggregateTrackingArgs, RequiredDbNotUserAggregateTrackingKeys> & AutodefinableAggregateTrackingPart;
export type StrictUpdateAggregateTrackingArgs = DefinedFieldsInRecord<MutationUpdateAggregateTrackingArgs, RequiredDbNotUserAggregateTrackingKeys> & AutodefinableAggregateTrackingPart;

export type StrictCreateAggregateTrackingArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateAggregateTrackingArgs, AutodefinableAggregateTrackingKeys>;
export type MutationCreateAggregateTrackingArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateAggregateTrackingArgs, AutodefinableAggregateTrackingKeys>;
export type MutationUpdateAggregateTrackingArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateAggregateTrackingArgs, AutodefinableAggregateTrackingKeys>;

export interface BaseAggregateTrackingsMethods {
  get: (id: number) =>
    Promise<AggregateTracking | null>;
  getRequired: (id: number) =>
    Promise<AggregateTracking>;
  all: (params?: QueryAllAggregateTrackingsArgs) =>
    Promise<AggregateTracking[]>;
  findOne: (params?: QueryAllAggregateTrackingsArgs) =>
    Promise<AggregateTracking | null>;
  findOneRequired: (params?: QueryAllAggregateTrackingsArgs) =>
    Promise<AggregateTracking>;
  count: (params?: Query_AllAggregateTrackingsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAggregateTrackingsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAggregateTrackingArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<AggregateTracking>;
  createMany: (data: StrictCreateAggregateTrackingArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAggregateTrackingArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<AggregateTracking>;
  upsert: (
    data: PartialFieldsInRecord<MutationUpdateAggregateTrackingArgsWithoutAutodefinable, 'id'>,
    byUser?: boolean,
  ) =>
    Promise<AggregateTracking>;
  upsertAdvanced: (
    filter: AggregateTrackingFilter,
    data: MutationCreateAggregateTrackingArgsWithoutAutodefinable,
    byUser?: boolean,
  ) =>
    Promise<AggregateTracking>;
  delete: (params: MutationRemoveAggregateTrackingArgs) =>
    Promise<AggregateTracking>;
}

export type AggregateTrackingsService = BaseAggregateTrackingsMethods
  & AdditionalAggregateTrackingsMethods
  & HooksAddType<
    AggregateTracking,
    QueryAllAggregateTrackingsArgs,
    ReliableAggregateTrackingCreateUserInput,
    MutationUpdateAggregateTrackingArgs,
    MutationRemoveAggregateTrackingArgs,
    StrictCreateAggregateTrackingArgs,
    StrictUpdateAggregateTrackingArgs
  >;

const dateFieldsForSearch: string[] = [
  'lastAggregatesComputed',
  'lastEntityUpdate',
];

const otherFieldsForSearch: string[] = [
  'id',
  'entityTypeId',
  'entityId',
  'aggregateVersion',
];

export const getAggregateTrackingsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    AggregateTracking,
    QueryAllAggregateTrackingsArgs,
    ReliableAggregateTrackingCreateUserInput,
    MutationUpdateAggregateTrackingArgs,
    MutationRemoveAggregateTrackingArgs,
    StrictCreateAggregateTrackingArgs,
    StrictUpdateAggregateTrackingArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableAggregateTrackingPart> => currentData as T;

  const all = async (
    params: QueryAllAggregateTrackingsArgs = {},
  ): Promise<AggregateTracking[]> => {
    return ctx.prisma.aggregateTracking.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<AggregateTracking[]>;
  };

  const findOne = async (
    params: QueryAllAggregateTrackingsArgs = {},
  ): Promise<AggregateTracking | null> => {
    return ctx.prisma.aggregateTracking.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params),
      {noId: false},
    ));
  };

  const findOneRequired = async (
    params: QueryAllAggregateTrackingsArgs = {},
  ): Promise<AggregateTracking> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<AggregateTracking | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<AggregateTracking> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllAggregateTrackingsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.aggregateTracking.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllAggregateTrackingsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAggregateTrackingArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<AggregateTracking> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedAggregateTrackingForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableAggregateTrackingCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.aggregateTracking.create({
      data: R.mergeDeepLeft(
        processedData,
        {},
      ),
    });

    const operations = [
      createOperation,
      ...(await runHooks.additionalOperationsOnCreate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.AggregateTracking,
        entityId: result.id,
        actionData: data,
      }),
    ]);

    await runHooks.afterCreate(ctx, result as AggregateTracking);

    return result as AggregateTracking;
  };

  const createMany = async (
    entries: StrictCreateAggregateTrackingArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateAggregateTrackingArgs[];

    const result = await ctx.prisma.aggregateTracking.createMany({
      data: augmentedByDefault.map(data => R.mergeDeepLeft(
        data,
        {},
      )),
      skipDuplicates: true,
    });

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const update = async (
    data: MutationUpdateAggregateTrackingArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<AggregateTracking> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateAggregateTrackingArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.aggregateTracking.update({
      data: R.mergeDeepLeft(
        {},
        rest,
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.AggregateTracking,
      entityId: data.id,
      actionData: data,
    });

    const operations = [
      updateOperation,
      auditOperation,
      ...(await runHooks.additionalOperationsOnUpdate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      runHooks.afterUpdate(ctx, result as AggregateTracking),
    ]);

    return result as AggregateTracking;
  };

  const upsert = async (
    data: PartialFieldsInRecord<MutationUpdateAggregateTrackingArgsWithoutAutodefinable, 'id'>,
    byUser = false,
  ): Promise<AggregateTracking> => {
    // Get db version
    const dbVersion = data.id ? await get(data.id) : null;

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateAggregateTrackingArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as AggregateTracking);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.aggregateTracking.upsert({
      create: createData,
      update: updateData,
      where: {id: data.id},
    });

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvanced = async (
    filter: AggregateTrackingFilter,
    data: MutationCreateAggregateTrackingArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<AggregateTracking> => {
    const cnt = await count({filter});

    if (cnt > 1) {
      throw new Error(`There is more then one entity (${cnt}) that fits filter "${JSON.stringify(filter)}"`);
    } else if (cnt === 0) {
      return create(data, byUser);
    } else {
      const dbVersion = await findOneRequired({filter});
      return update({...data, id: dbVersion.id}, byUser);
    }
  };

  const del = async (
    params: MutationRemoveAggregateTrackingArgs,
  ): Promise<AggregateTracking> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.aggregateTracking.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.AggregateTracking,
      entityId: params.id,
    });

    const operations = [
      deleteOperation,
      auditOperation,
      ...(await runHooks.additionalOperationsOnDelete(ctx, params)),
    ];

    const entity = await get(params.id);

    if (!entity) {
      throw new Error(`There is no entity with "${params.id}" id`);
    }

    const [result] = await ctx.prisma.$transaction(operations as any);

    if (!result) {
      throw new Error('There is no such entity');
    }

    await runHooks.afterDelete(ctx, entity);

    return entity;
  };

  const baseMethods: BaseAggregateTrackingsMethods = {
    get,
    getRequired,
    all,
    findOne,
    findOneRequired,
    count,
    meta,
    create,
    createMany,
    update,
    upsert,
    upsertAdvanced,
    delete: del,
  };

  const additionalMethods = getAdditionalMethods(ctx, baseMethods);

  const service: AggregateTrackingsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
