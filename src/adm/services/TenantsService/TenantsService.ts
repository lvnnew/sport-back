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
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type AutodefinableTenantKeys = never;
export type ForbidenForUserTenantKeys = never;
export type RequiredDbNotUserTenantKeys = never;

export type AutodefinableTenantPart = DefinedRecord<Pick<MutationCreateTenantArgs, AutodefinableTenantKeys>>;

export type ReliableTenantCreateUserInput =
  Omit<MutationCreateTenantArgs, ForbidenForUserTenantKeys>
  & AutodefinableTenantPart;

export type AllowedTenantForUserCreateInput = Omit<MutationCreateTenantArgs, ForbidenForUserTenantKeys>;

export type StrictCreateTenantArgs = DefinedFieldsInRecord<MutationCreateTenantArgs, RequiredDbNotUserTenantKeys> & AutodefinableTenantPart;
export type StrictUpdateTenantArgs = DefinedFieldsInRecord<MutationUpdateTenantArgs, RequiredDbNotUserTenantKeys> & AutodefinableTenantPart;

export type StrictCreateTenantArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateTenantArgs, AutodefinableTenantKeys>;
export type MutationCreateTenantArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateTenantArgs, AutodefinableTenantKeys>;
export type MutationUpdateTenantArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateTenantArgs, AutodefinableTenantKeys>;

export interface BaseTenantsMethods {
  get: (id: number) =>
    Promise<Tenant | null>;
  getRequired: (id: number) =>
    Promise<Tenant>;
  all: (params?: QueryAllTenantsArgs) =>
    Promise<Tenant[]>;
  findOne: (params?: QueryAllTenantsArgs) =>
    Promise<Tenant | null>;
  findOneRequired: (params?: QueryAllTenantsArgs) =>
    Promise<Tenant>;
  count: (params?: Query_AllTenantsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllTenantsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateTenantArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<Tenant>;
  createMany: (data: StrictCreateTenantArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateTenantArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<Tenant>;
  upsert: (data: MutationUpdateTenantArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<Tenant>;
  upsertAdvanced: (
    filter: TenantFilter,
    data: MutationCreateTenantArgsWithoutAutodefinable,
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
    ReliableTenantCreateUserInput,
    MutationUpdateTenantArgs,
    MutationRemoveTenantArgs,
    StrictCreateTenantArgs,
    StrictUpdateTenantArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [
  'id',
  'title',
  'utcOffset',
];

export const getTenantsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    Tenant,
    QueryAllTenantsArgs,
    ReliableTenantCreateUserInput,
    MutationUpdateTenantArgs,
    MutationRemoveTenantArgs,
    StrictCreateTenantArgs,
    StrictUpdateTenantArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableTenantPart> => currentData as T;

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

  const findOneRequired = async (
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
    data: MutationCreateTenantArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Tenant> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedTenantForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableTenantCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

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
    entries: StrictCreateTenantArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateTenantArgs[];

    const result = await ctx.prisma.tenant.createMany({
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
    data: MutationUpdateTenantArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Tenant> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateTenantArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.tenant.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
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
    data: MutationUpdateTenantArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Tenant> => {
    // Get db version
    const dbVersion = await get(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateTenantArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as Tenant);

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
    data: MutationCreateTenantArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Tenant> => {
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

  const service: TenantsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
