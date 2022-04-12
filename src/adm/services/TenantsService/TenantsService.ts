import {
  ListMetadata,
  MutationCreateTenantArgs,
  MutationUpdateTenantArgs,
  MutationRemoveTenantArgs,
  QueryAllTenantsArgs,
  Query_AllTenantsMetaArgs,
  Tenant,
  TenantFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalTenantsMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutoDefinableTenantKeys = never;
export type AutoDefinableTenantPart = MutationCreateTenantArgs;
export type MutationCreateTenantArgsWithAutoDefinable = AutoDefinableTenantPart & MutationCreateTenantArgs;
export type MutationCreateTenantArgsWithoutAutoDefinable = Omit<MutationCreateTenantArgs, AutoDefinableTenantKeys>;

export type StrictUpdateTenantArgs = DefinedFieldsInRecord<MutationUpdateTenantArgs, AutoDefinableTenantKeys>;
export type StrictCreateTenantArgs = DefinedFieldsInRecord<MutationCreateTenantArgs, AutoDefinableTenantKeys>;

export type StrictCreateTenantArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateTenantArgs, AutoDefinableTenantKeys>;

export interface BaseTenantsMethods {
  get: (id: number) =>
    Promise<Tenant | null>;
  all: (params?: QueryAllTenantsArgs) =>
    Promise<Tenant[]>;
  findOne: (params?: QueryAllTenantsArgs) =>
    Promise<Tenant | null>;
  count: (params?: Query_AllTenantsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllTenantsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateTenantArgs, byUser?: boolean) =>
    Promise<Tenant>;
  createMany: (data: StrictCreateTenantArgsWithoutAutoDefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateTenantArgs, byUser?: boolean) =>
    Promise<Tenant>;
  upsert: (data: MutationUpdateTenantArgs, byUser?: boolean) =>
    Promise<Tenant>;
  upsertAdvanced: (
    filter: TenantFilter,
    data: MutationCreateTenantArgs,
    byUser?: boolean,
  ) =>
    Promise<Tenant>;
  delete: (params: MutationRemoveTenantArgs) =>
    Promise<Tenant>;
}

export type TenantsService = BaseTenantsMethods
  & AdditionalTenantsMethods
  & HooksAddType<
    Tenant,
    QueryAllTenantsArgs,
    MutationCreateTenantArgsWithAutoDefinable,
    MutationUpdateTenantArgs,
    MutationRemoveTenantArgs,
    StrictCreateTenantArgs,
    StrictUpdateTenantArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [];

export const getTenantsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    Tenant,
    QueryAllTenantsArgs,
    MutationCreateTenantArgsWithAutoDefinable,
    MutationUpdateTenantArgs,
    MutationRemoveTenantArgs,
    StrictCreateTenantArgs,
    StrictUpdateTenantArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const getDefaultPart = () => ({});

  const all = async (
    params: QueryAllTenantsArgs = {},
  ): Promise<Tenant[]> => {
    return ctx.prisma.tenant.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<Tenant[]>;
  };

  const findOne = async (
    params: QueryAllTenantsArgs = {},
  ): Promise<Tenant | null> => {
    return ctx.prisma.tenant.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findRequired = async (
    params: QueryAllTenantsArgs = {},
  ): Promise<Tenant> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<Tenant | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<Tenant> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllTenantsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.tenant.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllTenantsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateTenantArgs,
    byUser = false,
  ): Promise<Tenant> => {
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as MutationCreateTenantArgsWithoutAutoDefinable :
      data;

    // augment data by default fields
    const augmented: MutationCreateTenantArgsWithAutoDefinable = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

    const createOperation = ctx.prisma.tenant.create({
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
      ctx.prisma.tenant.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.Tenant,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as Tenant),
    ]);

    return result as Tenant;
  };

  const createMany = async (
    entries: StrictCreateTenantArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData =
      clearedData.map(data => R.mergeLeft(data, defaultPart) as MutationCreateTenantArgsWithAutoDefinable);

    const result = await ctx.prisma.tenant.createMany({
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
    data: MutationUpdateTenantArgs,
    byUser = false,
  ): Promise<Tenant> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateTenantArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.tenant.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.Tenant,
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
      runHooks.afterUpdate(ctx, result as Tenant),
    ]);

    return result as Tenant;
  };

  const upsert = async (
    data: MutationUpdateTenantArgs,
    byUser = false,
  ): Promise<Tenant> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateTenantArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.tenant.upsert({
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
    filter: TenantFilter,
    data: MutationCreateTenantArgs,
    byUser = false,
  ): Promise<Tenant> => {
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
    const augmented: StrictUpdateTenantArgs = R.mergeLeft(cleared, augmentationBase);

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
    params: MutationRemoveTenantArgs,
  ): Promise<Tenant> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.tenant.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.Tenant,
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

  const baseMethods: BaseTenantsMethods = {
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

  const service: TenantsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
