import {
  ListMetadata,
  MutationCreateRoleArgs,
  MutationUpdateRoleArgs,
  MutationRemoveRoleArgs,
  QueryAllRolesArgs,
  Query_AllRolesMetaArgs,
  Role,
  RoleFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalRolesMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutodefinableRoleKeys = never;
export type ForbidenForUserRoleKeys = never;
export type RequiredDbNotUserRoleKeys = never;

export type AutodefinableRolePart = DefinedRecord<Pick<MutationCreateRoleArgs, AutodefinableRoleKeys>>;

export type ReliableRoleCreateUserInput =
  Omit<MutationCreateRoleArgs, ForbidenForUserRoleKeys>
  & AutodefinableRolePart;

export type AllowedRoleForUserCreateInput = Omit<MutationCreateRoleArgs, ForbidenForUserRoleKeys>;

export type StrictCreateRoleArgs = DefinedFieldsInRecord<MutationCreateRoleArgs, RequiredDbNotUserRoleKeys> & AutodefinableRolePart;
export type StrictUpdateRoleArgs = DefinedFieldsInRecord<MutationUpdateRoleArgs, RequiredDbNotUserRoleKeys> & AutodefinableRolePart;

export type StrictCreateRoleArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateRoleArgs, AutodefinableRoleKeys>;
export type MutationCreateRoleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateRoleArgs, AutodefinableRoleKeys>;
export type MutationUpdateRoleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateRoleArgs, AutodefinableRoleKeys>;

export interface BaseRolesMethods {
  get: (id: string) =>
    Promise<Role | null>;
  getRequired: (id: string) =>
    Promise<Role>;
  all: (params?: QueryAllRolesArgs) =>
    Promise<Role[]>;
  findOne: (params?: QueryAllRolesArgs) =>
    Promise<Role | null>;
  findOneRequired: (params?: QueryAllRolesArgs) =>
    Promise<Role>;
  count: (params?: Query_AllRolesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllRolesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateRoleArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<Role>;
  createMany: (data: StrictCreateRoleArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateRoleArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<Role>;
  upsert: (data: MutationUpdateRoleArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<Role>;
  upsertAdvanced: (
    filter: RoleFilter,
    data: MutationCreateRoleArgsWithoutAutodefinable,
    byUser?: boolean,
  ) =>
    Promise<Role>;
  delete: (params: MutationRemoveRoleArgs) =>
    Promise<Role>;
}

export type RolesService = BaseRolesMethods
  & AdditionalRolesMethods
  & HooksAddType<
    Role,
    QueryAllRolesArgs,
    ReliableRoleCreateUserInput,
    MutationUpdateRoleArgs,
    MutationRemoveRoleArgs,
    StrictCreateRoleArgs,
    StrictUpdateRoleArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [
  'id',
  'title',
];

export const getRolesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    Role,
    QueryAllRolesArgs,
    ReliableRoleCreateUserInput,
    MutationUpdateRoleArgs,
    MutationRemoveRoleArgs,
    StrictCreateRoleArgs,
    StrictUpdateRoleArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableRolePart> => currentData as T;

  const all = async (
    params: QueryAllRolesArgs = {},
  ): Promise<Role[]> => {
    return ctx.prisma.role.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<Role[]>;
  };

  const findOne = async (
    params: QueryAllRolesArgs = {},
  ): Promise<Role | null> => {
    return ctx.prisma.role.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findOneRequired = async (
    params: QueryAllRolesArgs = {},
  ): Promise<Role> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: string,
  ): Promise<Role | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: string,
  ): Promise<Role> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllRolesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.role.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllRolesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateRoleArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Role> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedRoleForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableRoleCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.role.create({
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
      ctx.prisma.role.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.Role,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as Role),
    ]);

    return result as Role;
  };

  const createMany = async (
    entries: StrictCreateRoleArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateRoleArgs[];

    const result = await ctx.prisma.role.createMany({
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
    data: MutationUpdateRoleArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Role> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateRoleArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.role.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.Role,
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
      runHooks.afterUpdate(ctx, result as Role),
    ]);

    return result as Role;
  };

  const upsert = async (
    data: MutationUpdateRoleArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Role> => {
    // Get db version
    const dbVersion = await get(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateRoleArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as Role);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.role.upsert({
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
    filter: RoleFilter,
    data: MutationCreateRoleArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Role> => {
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
    params: MutationRemoveRoleArgs,
  ): Promise<Role> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.role.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.Role,
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

  const baseMethods: BaseRolesMethods = {
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

  const service: RolesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
