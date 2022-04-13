import {
  ListMetadata,
  MutationCreatePermissionArgs,
  MutationUpdatePermissionArgs,
  MutationRemovePermissionArgs,
  QueryAllPermissionsArgs,
  Query_AllPermissionsMetaArgs,
  Permission,
  PermissionFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalPermissionsMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutodefinablePermissionKeys = never;
export type ForbidenForUserPermissionKeys = never;
export type RequiredDbNotUserPermissionKeys = never;

export type AutodefinablePermissionPart = DefinedRecord<Pick<MutationCreatePermissionArgs, AutodefinablePermissionKeys>>;

export type ReliablePermissionCreateUserInput =
  Omit<MutationCreatePermissionArgs, ForbidenForUserPermissionKeys>
  & AutodefinablePermissionPart;

export type AllowedPermissionForUserCreateInput = Omit<MutationCreatePermissionArgs, ForbidenForUserPermissionKeys>;

export type StrictCreatePermissionArgs = DefinedFieldsInRecord<MutationCreatePermissionArgs, RequiredDbNotUserPermissionKeys> & AutodefinablePermissionPart;
export type StrictUpdatePermissionArgs = DefinedFieldsInRecord<MutationUpdatePermissionArgs, RequiredDbNotUserPermissionKeys> & AutodefinablePermissionPart;

export type StrictCreatePermissionArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreatePermissionArgs, AutodefinablePermissionKeys>;

export interface BasePermissionsMethods {
  get: (id: string) =>
    Promise<Permission | null>;
  getRequired: (id: string) =>
    Promise<Permission>;
  all: (params?: QueryAllPermissionsArgs) =>
    Promise<Permission[]>;
  findOne: (params?: QueryAllPermissionsArgs) =>
    Promise<Permission | null>;
  findOneRequired: (params?: QueryAllPermissionsArgs) =>
    Promise<Permission>;
  count: (params?: Query_AllPermissionsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllPermissionsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreatePermissionArgs, byUser?: boolean) =>
    Promise<Permission>;
  createMany: (data: StrictCreatePermissionArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdatePermissionArgs, byUser?: boolean) =>
    Promise<Permission>;
  upsert: (data: MutationUpdatePermissionArgs, byUser?: boolean) =>
    Promise<Permission>;
  upsertAdvanced: (
    filter: PermissionFilter,
    data: MutationCreatePermissionArgs,
    byUser?: boolean,
  ) =>
    Promise<Permission>;
  delete: (params: MutationRemovePermissionArgs) =>
    Promise<Permission>;
}

export type PermissionsService = BasePermissionsMethods
  & AdditionalPermissionsMethods
  & HooksAddType<
    Permission,
    QueryAllPermissionsArgs,
    ReliablePermissionCreateUserInput,
    MutationUpdatePermissionArgs,
    MutationRemovePermissionArgs,
    StrictCreatePermissionArgs,
    StrictUpdatePermissionArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [];

export const getPermissionsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    Permission,
    QueryAllPermissionsArgs,
    ReliablePermissionCreateUserInput,
    MutationUpdatePermissionArgs,
    MutationRemovePermissionArgs,
    StrictCreatePermissionArgs,
    StrictUpdatePermissionArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(currentData: Record<string, any>): Promise<T & AutodefinablePermissionPart> => currentData as T;

  const all = async (
    params: QueryAllPermissionsArgs = {},
  ): Promise<Permission[]> => {
    return ctx.prisma.permission.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<Permission[]>;
  };

  const findOne = async (
    params: QueryAllPermissionsArgs = {},
  ): Promise<Permission | null> => {
    return ctx.prisma.permission.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findOneRequired = async (
    params: QueryAllPermissionsArgs = {},
  ): Promise<Permission> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: string,
  ): Promise<Permission | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: string,
  ): Promise<Permission> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllPermissionsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.permission.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllPermissionsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreatePermissionArgs,
    byUser = false,
  ): Promise<Permission> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedPermissionForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliablePermissionCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.permission.create({
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
      ctx.prisma.permission.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.Permission,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as Permission),
    ]);

    return result as Permission;
  };

  const createMany = async (
    entries: StrictCreatePermissionArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(clearedData.map(el => augmentByDefault(el))) as ReliablePermissionCreateUserInput[];

    const result = await ctx.prisma.permission.createMany({
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
    data: MutationUpdatePermissionArgs,
    byUser = false,
  ): Promise<Permission> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdatePermissionArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.permission.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.Permission,
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
      runHooks.afterUpdate(ctx, result as Permission),
    ]);

    return result as Permission;
  };

  const upsert = async (
    data: MutationUpdatePermissionArgs,
    byUser = false,
  ): Promise<Permission> => {
    // Get db version
    const dbVersion = await get(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdatePermissionArgs = R.mergeLeft(augmentedByDefault, dbVersion || {} as Permission);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.permission.upsert({
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
    filter: PermissionFilter,
    data: MutationCreatePermissionArgs,
    byUser = false,
  ): Promise<Permission> => {
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
    params: MutationRemovePermissionArgs,
  ): Promise<Permission> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.permission.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.Permission,
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

  const baseMethods: BasePermissionsMethods = {
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

  const service: PermissionsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
