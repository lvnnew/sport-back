import {
  ListMetadata,
  MutationCreateManagerArgs,
  MutationUpdateManagerArgs,
  MutationRemoveManagerArgs,
  QueryAllManagersArgs,
  Query_AllManagersMetaArgs,
  Manager,
  ManagerFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalManagersMethods, getAdditionalMethods} from './additionalMethods';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {getHooksUtils, HooksAddType} from '../getHooksUtils';
import * as R from 'ramda';
import Entity from '../../../types/Entity';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [
  'tenantId',
];

export type AutodefinableManagerKeys = never;
export type ForbidenForUserManagerKeys = 'tenantId';
export type RequiredDbNotUserManagerKeys = never;

export type AutodefinableManagerPart = DefinedRecord<Pick<MutationCreateManagerArgs, AutodefinableManagerKeys>>;

export type ReliableManagerCreateUserInput =
  Omit<MutationCreateManagerArgs, ForbidenForUserManagerKeys>
  & AutodefinableManagerPart;

export type AllowedManagerForUserCreateInput = Omit<MutationCreateManagerArgs, ForbidenForUserManagerKeys>;

export type StrictCreateManagerArgs = DefinedFieldsInRecord<MutationCreateManagerArgs, RequiredDbNotUserManagerKeys> & AutodefinableManagerPart;
export type StrictUpdateManagerArgs = DefinedFieldsInRecord<MutationUpdateManagerArgs, RequiredDbNotUserManagerKeys> & AutodefinableManagerPart;

export type StrictCreateManagerArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateManagerArgs, AutodefinableManagerKeys>;

export interface BaseManagersMethods {
  get: (id: number) =>
    Promise<Manager | null>;
  getRequired: (id: number) =>
    Promise<Manager>;
  all: (params?: QueryAllManagersArgs) =>
    Promise<Manager[]>;
  findOne: (params?: QueryAllManagersArgs) =>
    Promise<Manager | null>;
  findOneRequired: (params?: QueryAllManagersArgs) =>
    Promise<Manager>;
  count: (params?: Query_AllManagersMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllManagersMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateManagerArgs, byUser?: boolean) =>
    Promise<Manager>;
  createMany: (data: StrictCreateManagerArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateManagerArgs, byUser?: boolean) =>
    Promise<Manager>;
  upsert: (data: MutationUpdateManagerArgs, byUser?: boolean) =>
    Promise<Manager>;
  upsertAdvanced: (
    filter: ManagerFilter,
    data: MutationCreateManagerArgs,
    byUser?: boolean,
  ) =>
    Promise<Manager>;
  delete: (params: MutationRemoveManagerArgs) =>
    Promise<Manager>;
}

export type ManagersService = BaseManagersMethods
  & AdditionalManagersMethods
  & HooksAddType<
    Manager,
    QueryAllManagersArgs,
    ReliableManagerCreateUserInput,
    MutationUpdateManagerArgs,
    MutationRemoveManagerArgs,
    StrictCreateManagerArgs,
    StrictUpdateManagerArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [];

export const getManagersService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    Manager,
    QueryAllManagersArgs,
    ReliableManagerCreateUserInput,
    MutationUpdateManagerArgs,
    MutationRemoveManagerArgs,
    StrictCreateManagerArgs,
    StrictUpdateManagerArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(currentData: Record<string, any>): Promise<T & AutodefinableManagerPart> => currentData as T;

  const all = async (
    params: QueryAllManagersArgs = {},
  ): Promise<Manager[]> => {
    return ctx.prisma.manager.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<Manager[]>;
  };

  const findOne = async (
    params: QueryAllManagersArgs = {},
  ): Promise<Manager | null> => {
    return ctx.prisma.manager.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findOneRequired = async (
    params: QueryAllManagersArgs = {},
  ): Promise<Manager> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<Manager | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<Manager> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllManagersMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.manager.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllManagersMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateManagerArgs,
    byUser = false,
  ): Promise<Manager> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedManagerForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableManagerCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.manager.create({
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
      ctx.prisma.manager.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.Manager,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as Manager),
    ]);

    return result as Manager;
  };

  const createMany = async (
    entries: StrictCreateManagerArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateManagerArgs[];

    const result = await ctx.prisma.manager.createMany({
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
    data: MutationUpdateManagerArgs,
    byUser = false,
  ): Promise<Manager> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateManagerArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.manager.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.Manager,
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
      runHooks.afterUpdate(ctx, result as Manager),
    ]);

    return result as Manager;
  };

  const upsert = async (
    data: MutationUpdateManagerArgs,
    byUser = false,
  ): Promise<Manager> => {
    // Get db version
    const dbVersion = await get(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateManagerArgs = R.mergeLeft(augmentedByDefault, dbVersion || {} as Manager);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.manager.upsert({
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
    filter: ManagerFilter,
    data: MutationCreateManagerArgs,
    byUser = false,
  ): Promise<Manager> => {
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
    params: MutationRemoveManagerArgs,
  ): Promise<Manager> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.manager.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.Manager,
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

  const baseMethods: BaseManagersMethods = {
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

  const service: ManagersService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
