import {
  ListMetadata,
  MutationCreateAuditLogArgs,
  MutationUpdateAuditLogArgs,
  MutationRemoveAuditLogArgs,
  QueryAllAuditLogsArgs,
  Query_AllAuditLogsMetaArgs,
  AuditLog,
  AuditLogFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAuditLogsMethods, getAdditionalMethods} from './additionalMethods';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {getHooksUtils, HooksAddType} from '../getHooksUtils';
import * as R from 'ramda';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {DefinedFieldsInRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type AutoDefinableAuditLogKeys = never;
export type AutoDefinableAuditLogPart = MutationCreateAuditLogArgs;
export type MutationCreateAuditLogArgsWithAutoDefinable = AutoDefinableAuditLogPart & MutationCreateAuditLogArgs;
export type MutationCreateAuditLogArgsWithoutAutoDefinable = Omit<MutationCreateAuditLogArgs, AutoDefinableAuditLogKeys>;

export type StrictUpdateAuditLogArgs = DefinedFieldsInRecord<MutationUpdateAuditLogArgs, AutoDefinableAuditLogKeys>;
export type StrictCreateAuditLogArgs = DefinedFieldsInRecord<MutationCreateAuditLogArgs, AutoDefinableAuditLogKeys>;

export type StrictCreateAuditLogArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateAuditLogArgs, AutoDefinableAuditLogKeys>;

export interface BaseAuditLogsMethods {
  get: (id: number) =>
    Promise<AuditLog | null>;
  all: (params?: QueryAllAuditLogsArgs) =>
    Promise<AuditLog[]>;
  findOne: (params?: QueryAllAuditLogsArgs) =>
    Promise<AuditLog | null>;
  count: (params?: Query_AllAuditLogsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAuditLogsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAuditLogArgs, byUser?: boolean) =>
    Promise<AuditLog>;
  createMany: (data: StrictCreateAuditLogArgsWithoutAutoDefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAuditLogArgs, byUser?: boolean) =>
    Promise<AuditLog>;
  upsert: (data: MutationUpdateAuditLogArgs, byUser?: boolean) =>
    Promise<AuditLog>;
  upsertAdvanced: (
    filter: AuditLogFilter,
    data: MutationCreateAuditLogArgs,
    byUser?: boolean,
  ) =>
    Promise<AuditLog>;
  delete: (params: MutationRemoveAuditLogArgs) =>
    Promise<AuditLog>;
}

export type AuditLogsService = BaseAuditLogsMethods
  & AdditionalAuditLogsMethods
  & HooksAddType<
    AuditLog,
    QueryAllAuditLogsArgs,
    MutationCreateAuditLogArgsWithAutoDefinable,
    MutationUpdateAuditLogArgs,
    MutationRemoveAuditLogArgs,
    StrictCreateAuditLogArgs,
    StrictUpdateAuditLogArgs
  >;

const dateFieldsForSearch: string[] = [
  'date',
];

const otherFieldsForSearch: string[] = [
  'id',
  'title',
  'entityTypeId',
  'entityId',
  'actionTypeId',
  'managerId',
  'userId',
  'foreignEntityType',
  'foreignEntityId',
  'actionData',
];

export const getAuditLogsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    AuditLog,
    QueryAllAuditLogsArgs,
    MutationCreateAuditLogArgsWithAutoDefinable,
    MutationUpdateAuditLogArgs,
    MutationRemoveAuditLogArgs,
    StrictCreateAuditLogArgs,
    StrictUpdateAuditLogArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const getDefaultPart = () => ({});

  const all = async (
    params: QueryAllAuditLogsArgs = {},
  ): Promise<AuditLog[]> => {
    return ctx.prisma.auditLog.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<AuditLog[]>;
  };

  const findOne = async (
    params: QueryAllAuditLogsArgs = {},
  ): Promise<AuditLog | null> => {
    return ctx.prisma.auditLog.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findRequired = async (
    params: QueryAllAuditLogsArgs = {},
  ): Promise<AuditLog> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<AuditLog | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<AuditLog> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllAuditLogsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.auditLog.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllAuditLogsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAuditLogArgs,
    byUser = false,
  ): Promise<AuditLog> => {
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as MutationCreateAuditLogArgsWithoutAutoDefinable :
      data;

    // augment data by default fields
    const augmented: MutationCreateAuditLogArgsWithAutoDefinable = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

    const createOperation = ctx.prisma.auditLog.create({
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
      ctx.prisma.auditLog.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      runHooks.afterCreate(ctx, result as AuditLog),
    ]);

    return result as AuditLog;
  };

  const createMany = async (
    entries: StrictCreateAuditLogArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData =
      clearedData.map(data => R.mergeLeft(data, defaultPart) as MutationCreateAuditLogArgsWithAutoDefinable);

    const result = await ctx.prisma.auditLog.createMany({
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
    data: MutationUpdateAuditLogArgs,
    byUser = false,
  ): Promise<AuditLog> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAuditLogArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.auditLog.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const operations = [
      updateOperation,
      ...(await runHooks.additionalOperationsOnUpdate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      runHooks.afterUpdate(ctx, result as AuditLog),
    ]);

    return result as AuditLog;
  };

  const upsert = async (
    data: MutationUpdateAuditLogArgs,
    byUser = false,
  ): Promise<AuditLog> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAuditLogArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.auditLog.upsert({
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
    filter: AuditLogFilter,
    data: MutationCreateAuditLogArgs,
    byUser = false,
  ): Promise<AuditLog> => {
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
    const augmented: StrictUpdateAuditLogArgs = R.mergeLeft(cleared, augmentationBase);

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
    params: MutationRemoveAuditLogArgs,
  ): Promise<AuditLog> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.auditLog.delete({where: {id: params.id}});

    const operations = [
      deleteOperation,
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

  const baseMethods: BaseAuditLogsMethods = {
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

  const service: AuditLogsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
