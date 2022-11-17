import {
  ListMetadata,
  MutationCreateManagersToRoleArgs,
  MutationUpdateManagersToRoleArgs,
  MutationRemoveManagersToRoleArgs,
  QueryAllManagersToRolesArgs,
  Query_AllManagersToRolesMetaArgs,
  ManagersToRole,
  ManagersToRoleFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalManagersToRolesMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutodefinableManagersToRoleKeys = never;
export type ForbidenForUserManagersToRoleKeys = never;
export type RequiredDbNotUserManagersToRoleKeys = never;

export type AutodefinableManagersToRolePart = DefinedRecord<Pick<MutationCreateManagersToRoleArgs, AutodefinableManagersToRoleKeys>>;

export type ReliableManagersToRoleCreateUserInput =
  Omit<MutationCreateManagersToRoleArgs, ForbidenForUserManagersToRoleKeys>
  & AutodefinableManagersToRolePart;

export type AllowedManagersToRoleForUserCreateInput = Omit<MutationCreateManagersToRoleArgs, ForbidenForUserManagersToRoleKeys>;

export type StrictCreateManagersToRoleArgs = DefinedFieldsInRecord<MutationCreateManagersToRoleArgs, RequiredDbNotUserManagersToRoleKeys> & AutodefinableManagersToRolePart;
export type StrictUpdateManagersToRoleArgs = DefinedFieldsInRecord<MutationUpdateManagersToRoleArgs, RequiredDbNotUserManagersToRoleKeys> & AutodefinableManagersToRolePart;

export type StrictCreateManagersToRoleArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateManagersToRoleArgs, AutodefinableManagersToRoleKeys>;
export type MutationCreateManagersToRoleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateManagersToRoleArgs, AutodefinableManagersToRoleKeys>;
export type MutationUpdateManagersToRoleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateManagersToRoleArgs, AutodefinableManagersToRoleKeys>;

export interface BaseManagersToRolesMethods {
  get: (id: number) =>
    Promise<ManagersToRole | null>;
  getRequired: (id: number) =>
    Promise<ManagersToRole>;
  all: (params?: QueryAllManagersToRolesArgs) =>
    Promise<ManagersToRole[]>;
  findOne: (params?: QueryAllManagersToRolesArgs) =>
    Promise<ManagersToRole | null>;
  findOneRequired: (params?: QueryAllManagersToRolesArgs) =>
    Promise<ManagersToRole>;
  count: (params?: Query_AllManagersToRolesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllManagersToRolesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateManagersToRoleArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<ManagersToRole>;
  createMany: (data: StrictCreateManagersToRoleArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateManagersToRoleArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<ManagersToRole>;
  upsert: (
    data: PartialFieldsInRecord<MutationUpdateManagersToRoleArgsWithoutAutodefinable, 'id'>,
    byUser?: boolean,
  ) =>
    Promise<ManagersToRole>;
  upsertAdvanced: (
    filter: ManagersToRoleFilter,
    data: MutationCreateManagersToRoleArgsWithoutAutodefinable,
    byUser?: boolean,
  ) =>
    Promise<ManagersToRole>;
  delete: (params: MutationRemoveManagersToRoleArgs) =>
    Promise<ManagersToRole>;
}

export type ManagersToRolesService = BaseManagersToRolesMethods
  & AdditionalManagersToRolesMethods
  & HooksAddType<
    ManagersToRole,
    QueryAllManagersToRolesArgs,
    ReliableManagersToRoleCreateUserInput,
    MutationUpdateManagersToRoleArgs,
    MutationRemoveManagersToRoleArgs,
    StrictCreateManagersToRoleArgs,
    StrictUpdateManagersToRoleArgs
  >;

const dateFieldsForSearch: string[] = [
  'expiresAt',
];

const otherFieldsForSearch: string[] = [
  'id',
  'managerId',
  'roleId',
];

export const getManagersToRolesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    ManagersToRole,
    QueryAllManagersToRolesArgs,
    ReliableManagersToRoleCreateUserInput,
    MutationUpdateManagersToRoleArgs,
    MutationRemoveManagersToRoleArgs,
    StrictCreateManagersToRoleArgs,
    StrictUpdateManagersToRoleArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableManagersToRolePart> => currentData as T & AutodefinableManagersToRolePart;

  const all = async (
    params: QueryAllManagersToRolesArgs = {},
  ): Promise<ManagersToRole[]> => {
    return ctx.prisma.managersToRole.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<ManagersToRole[]>;
  };

  const findOne = async (
    params: QueryAllManagersToRolesArgs = {},
  ): Promise<ManagersToRole | null> => {
    return ctx.prisma.managersToRole.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params),
      {noId: false},
    ));
  };

  const findOneRequired = async (
    params: QueryAllManagersToRolesArgs = {},
  ): Promise<ManagersToRole> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<ManagersToRole | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<ManagersToRole> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllManagersToRolesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.managersToRole.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllManagersToRolesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateManagersToRoleArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<ManagersToRole> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedManagersToRoleForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableManagersToRoleCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.managersToRole.create({
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
      ctx.prisma.managersToRole.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.ManagersToRole,
        entityId: result.id,
        actionData: data,
      }),
    ]);

    await runHooks.afterCreate(ctx, result as ManagersToRole);

    return result as ManagersToRole;
  };

  const createMany = async (
    entries: StrictCreateManagersToRoleArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateManagersToRoleArgs[];

    const result = await ctx.prisma.managersToRole.createMany({
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
    data: MutationUpdateManagersToRoleArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<ManagersToRole> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateManagersToRoleArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.managersToRole.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.ManagersToRole,
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
      runHooks.afterUpdate(ctx, result as ManagersToRole),
    ]);

    return result as ManagersToRole;
  };

  const upsert = async (
    data: PartialFieldsInRecord<MutationUpdateManagersToRoleArgsWithoutAutodefinable, 'id'>,
    byUser = false,
  ): Promise<ManagersToRole> => {
    // Get db version
    const dbVersion = data.id ? await get(data.id) : null;

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateManagersToRoleArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as ManagersToRole);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.managersToRole.upsert({
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
    filter: ManagersToRoleFilter,
    data: MutationCreateManagersToRoleArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<ManagersToRole> => {
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
    params: MutationRemoveManagersToRoleArgs,
  ): Promise<ManagersToRole> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.managersToRole.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.ManagersToRole,
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

  const baseMethods: BaseManagersToRolesMethods = {
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

  const service: ManagersToRolesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
