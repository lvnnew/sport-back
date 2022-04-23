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
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type AutodefinableAuditLogKeys = never;
export type ForbidenForUserAuditLogKeys = never;
export type RequiredDbNotUserAuditLogKeys = never;

export type AutodefinableAuditLogPart = DefinedRecord<Pick<MutationCreateAuditLogArgs, AutodefinableAuditLogKeys>>;

export type ReliableAuditLogCreateUserInput =
  Omit<MutationCreateAuditLogArgs, ForbidenForUserAuditLogKeys>
  & AutodefinableAuditLogPart;

export type AllowedAuditLogForUserCreateInput = Omit<MutationCreateAuditLogArgs, ForbidenForUserAuditLogKeys>;

export type StrictCreateAuditLogArgs = DefinedFieldsInRecord<MutationCreateAuditLogArgs, RequiredDbNotUserAuditLogKeys> & AutodefinableAuditLogPart;
export type StrictUpdateAuditLogArgs = DefinedFieldsInRecord<MutationUpdateAuditLogArgs, RequiredDbNotUserAuditLogKeys> & AutodefinableAuditLogPart;

export type StrictCreateAuditLogArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateAuditLogArgs, AutodefinableAuditLogKeys>;
export type MutationCreateAuditLogArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateAuditLogArgs, AutodefinableAuditLogKeys>;
export type MutationUpdateAuditLogArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateAuditLogArgs, AutodefinableAuditLogKeys>;

export interface BaseAuditLogsMethods {
  get: (id: number) =>
    Promise<AuditLog | null>;
  getRequired: (id: number) =>
    Promise<AuditLog>;
  all: (params?: QueryAllAuditLogsArgs) =>
    Promise<AuditLog[]>;
  findOne: (params?: QueryAllAuditLogsArgs) =>
    Promise<AuditLog | null>;
  findOneRequired: (params?: QueryAllAuditLogsArgs) =>
    Promise<AuditLog>;
  count: (params?: Query_AllAuditLogsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAuditLogsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAuditLogArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<AuditLog>;
  createMany: (data: StrictCreateAuditLogArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAuditLogArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<AuditLog>;
  upsert: (data: MutationUpdateAuditLogArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<AuditLog>;
  upsertAdvanced: (
    filter: AuditLogFilter,
    data: MutationCreateAuditLogArgsWithoutAutodefinable,
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
    ReliableAuditLogCreateUserInput,
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
    ReliableAuditLogCreateUserInput,
    MutationUpdateAuditLogArgs,
    MutationRemoveAuditLogArgs,
    StrictCreateAuditLogArgs,
    StrictUpdateAuditLogArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableAuditLogPart> => currentData as T;

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

  const findOneRequired = async (
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
    data: MutationCreateAuditLogArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<AuditLog> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedAuditLogForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableAuditLogCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

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
    entries: StrictCreateAuditLogArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateAuditLogArgs[];

    const result = await ctx.prisma.auditLog.createMany({
      data: augmentedByDefault.map(data => R.mergeDeepLeft(
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
    data: MutationUpdateAuditLogArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<AuditLog> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateAuditLogArgs = R.mergeLeft(augmentedByDefault, dbVersion);

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
    data: MutationUpdateAuditLogArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<AuditLog> => {
    // Get db version
    const dbVersion = await get(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateAuditLogArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as AuditLog);

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
    data: MutationCreateAuditLogArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<AuditLog> => {
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

  const service: AuditLogsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
