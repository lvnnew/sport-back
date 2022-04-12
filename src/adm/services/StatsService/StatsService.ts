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
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalStatsMethods, getAdditionalMethods} from './additionalMethods';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {getHooksUtils, HooksAddType} from '../getHooksUtils';
import * as R from 'ramda';
import Entity from '../../../types/Entity';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {DefinedFieldsInRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type AutoDefinableStatKeys = never;
export type AutoDefinableStatPart = MutationCreateStatArgs;
export type MutationCreateStatArgsWithAutoDefinable = AutoDefinableStatPart & MutationCreateStatArgs;
export type MutationCreateStatArgsWithoutAutoDefinable = Omit<MutationCreateStatArgs, AutoDefinableStatKeys>;

export type StrictUpdateStatArgs = DefinedFieldsInRecord<MutationUpdateStatArgs, AutoDefinableStatKeys>;
export type StrictCreateStatArgs = DefinedFieldsInRecord<MutationCreateStatArgs, AutoDefinableStatKeys>;

export type StrictCreateStatArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateStatArgs, AutoDefinableStatKeys>;

export interface BaseStatsMethods {
  get: (id: string) =>
    Promise<Stat | null>;
  all: (params?: QueryAllStatsArgs) =>
    Promise<Stat[]>;
  findOne: (params?: QueryAllStatsArgs) =>
    Promise<Stat | null>;
  count: (params?: Query_AllStatsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllStatsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateStatArgs, byUser?: boolean) =>
    Promise<Stat>;
  createMany: (data: StrictCreateStatArgsWithoutAutoDefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateStatArgs, byUser?: boolean) =>
    Promise<Stat>;
  upsert: (data: MutationUpdateStatArgs, byUser?: boolean) =>
    Promise<Stat>;
  upsertAdvanced: (
    filter: StatFilter,
    data: MutationCreateStatArgs,
    byUser?: boolean,
  ) =>
    Promise<Stat>;
  delete: (params: MutationRemoveStatArgs) =>
    Promise<Stat>;
}

export type StatsService = BaseStatsMethods
  & AdditionalStatsMethods
  & HooksAddType<
    Stat,
    QueryAllStatsArgs,
    MutationCreateStatArgsWithAutoDefinable,
    MutationUpdateStatArgs,
    MutationRemoveStatArgs,
    StrictCreateStatArgs,
    StrictUpdateStatArgs
  >;

const dateFieldsForSearch: string[] = [
  'updated',
];

const otherFieldsForSearch: string[] = [
  'id',
  'helloCount',
];

export const getStatsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    Stat,
    QueryAllStatsArgs,
    MutationCreateStatArgsWithAutoDefinable,
    MutationUpdateStatArgs,
    MutationRemoveStatArgs,
    StrictCreateStatArgs,
    StrictUpdateStatArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const getDefaultPart = () => ({});

  const all = async (
    params: QueryAllStatsArgs = {},
  ): Promise<Stat[]> => {
    return ctx.prisma.stat.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<Stat[]>;
  };

  const findOne = async (
    params: QueryAllStatsArgs = {},
  ): Promise<Stat | null> => {
    return ctx.prisma.stat.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findRequired = async (
    params: QueryAllStatsArgs = {},
  ): Promise<Stat> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: string,
  ): Promise<Stat | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: string,
  ): Promise<Stat> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllStatsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.stat.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllStatsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateStatArgs,
    byUser = false,
  ): Promise<Stat> => {
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as MutationCreateStatArgsWithoutAutoDefinable :
      data;

    // augment data by default fields
    const augmented: MutationCreateStatArgsWithAutoDefinable = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

    const createOperation = ctx.prisma.stat.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: getSearchString(processedData),
        },
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
      // update search. earlier we does not have id
      ctx.prisma.stat.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.Stat,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as Stat),
    ]);

    return result as Stat;
  };

  const createMany = async (
    entries: StrictCreateStatArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData =
      clearedData.map(data => R.mergeLeft(data, defaultPart) as MutationCreateStatArgsWithAutoDefinable);

    const result = await ctx.prisma.stat.createMany({
      data: augmentedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: getSearchString(data),
        },
      )),
      skipDuplicates: true,
    });

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const update = async (
    data: MutationUpdateStatArgs,
    byUser = false,
  ): Promise<Stat> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateStatArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.stat.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.Stat,
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
      runHooks.afterUpdate(ctx, result as Stat),
    ]);

    return result as Stat;
  };

  const upsert = async (
    data: MutationUpdateStatArgs,
    byUser = false,
  ): Promise<Stat> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateStatArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.stat.upsert({
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
    filter: StatFilter,
    data: MutationCreateStatArgs,
    byUser = false,
  ): Promise<Stat> => {
    const cnt = await count({filter});

    if (cnt > 1) {
      throw new Error(`There is more then one entity (${cnt}) that fits filter "${JSON.stringify(filter)}"`);
    }

    // Compose object for augmentation
    const dbVersion = await findRequired({filter});
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateStatArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    if (cnt === 0) {
      return create(createData, false);
    } else {
      return update({...updateData, id: dbVersion.id}, false);
    }
  };

  const del = async (
    params: MutationRemoveStatArgs,
  ): Promise<Stat> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.stat.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.Stat,
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

  const baseMethods: BaseStatsMethods = {
    get,
    all,
    findOne,
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

  const service: StatsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
