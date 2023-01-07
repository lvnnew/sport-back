import {
  ListMetadata,
  MutationCreateRolesToPermissionArgs,
  MutationUpdateRolesToPermissionArgs,
  MutationRemoveRolesToPermissionArgs,
  QueryAllRolesToPermissionsArgs,
  Query_AllRolesToPermissionsMetaArgs,
  RolesToPermission,
  RolesToPermissionFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalRolesToPermissionsMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutodefinableRolesToPermissionKeys = never;
export type ForbidenForUserRolesToPermissionKeys = never;
export type RequiredDbNotUserRolesToPermissionKeys = never;

export type AutodefinableRolesToPermissionPart = DefinedRecord<Pick<MutationCreateRolesToPermissionArgs, AutodefinableRolesToPermissionKeys>>;

export type ReliableRolesToPermissionCreateUserInput =
  Omit<MutationCreateRolesToPermissionArgs, ForbidenForUserRolesToPermissionKeys>
  & AutodefinableRolesToPermissionPart;

export type AllowedRolesToPermissionForUserCreateInput = Omit<MutationCreateRolesToPermissionArgs, ForbidenForUserRolesToPermissionKeys>;

export type StrictCreateRolesToPermissionArgs = DefinedFieldsInRecord<MutationCreateRolesToPermissionArgs, RequiredDbNotUserRolesToPermissionKeys> & AutodefinableRolesToPermissionPart;
export type StrictUpdateRolesToPermissionArgs = DefinedFieldsInRecord<MutationUpdateRolesToPermissionArgs, RequiredDbNotUserRolesToPermissionKeys> & AutodefinableRolesToPermissionPart;

export type StrictCreateRolesToPermissionArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateRolesToPermissionArgs, AutodefinableRolesToPermissionKeys>;
export type MutationCreateRolesToPermissionArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateRolesToPermissionArgs, AutodefinableRolesToPermissionKeys>;
export type MutationUpdateRolesToPermissionArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateRolesToPermissionArgs, AutodefinableRolesToPermissionKeys>;

export interface BaseRolesToPermissionsMethods {
  get: (id: number) =>
    Promise<RolesToPermission | null>;
  getRequired: (id: number) =>
    Promise<RolesToPermission>;
  all: (params?: QueryAllRolesToPermissionsArgs) =>
    Promise<RolesToPermission[]>;
  findOne: (params?: QueryAllRolesToPermissionsArgs) =>
    Promise<RolesToPermission | null>;
  findOneRequired: (params?: QueryAllRolesToPermissionsArgs) =>
    Promise<RolesToPermission>;
  count: (params?: Query_AllRolesToPermissionsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllRolesToPermissionsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateRolesToPermissionArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<RolesToPermission>;
  createMany: (data: StrictCreateRolesToPermissionArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateRolesToPermissionArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<RolesToPermission>;
  upsert: (
    data: PartialFieldsInRecord<MutationUpdateRolesToPermissionArgsWithoutAutodefinable, 'id'>,
    byUser?: boolean,
  ) =>
    Promise<RolesToPermission>;
  upsertAdvanced: (
    filter: RolesToPermissionFilter,
    data: MutationCreateRolesToPermissionArgsWithoutAutodefinable,
    byUser?: boolean,
  ) =>
    Promise<RolesToPermission>;
  delete: (params: MutationRemoveRolesToPermissionArgs) =>
    Promise<RolesToPermission>;
}

export type RolesToPermissionsService = BaseRolesToPermissionsMethods
  & AdditionalRolesToPermissionsMethods
  & HooksAddType<
    RolesToPermission,
    QueryAllRolesToPermissionsArgs,
    ReliableRolesToPermissionCreateUserInput,
    MutationUpdateRolesToPermissionArgs,
    MutationRemoveRolesToPermissionArgs,
    StrictCreateRolesToPermissionArgs,
    StrictUpdateRolesToPermissionArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [
  'id',
  'roleId',
  'permissionId',
];

export const getRolesToPermissionsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    RolesToPermission,
    QueryAllRolesToPermissionsArgs,
    ReliableRolesToPermissionCreateUserInput,
    MutationUpdateRolesToPermissionArgs,
    MutationRemoveRolesToPermissionArgs,
    StrictCreateRolesToPermissionArgs,
    StrictUpdateRolesToPermissionArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableRolesToPermissionPart> =>
    currentData as T & AutodefinableRolesToPermissionPart;

  const all = async (
    params: QueryAllRolesToPermissionsArgs = {},
  ): Promise<RolesToPermission[]> => {
    return ctx.prisma.rolesToPermission.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<RolesToPermission[]>;
  };

  const findOne = async (
    params: QueryAllRolesToPermissionsArgs = {},
  ): Promise<RolesToPermission | null> => {
    return ctx.prisma.rolesToPermission.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params),
      {noId: false},
    ));
  };

  const findOneRequired = async (
    params: QueryAllRolesToPermissionsArgs = {},
  ): Promise<RolesToPermission> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<RolesToPermission | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<RolesToPermission> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllRolesToPermissionsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.rolesToPermission.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllRolesToPermissionsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateRolesToPermissionArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<RolesToPermission> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedRolesToPermissionForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableRolesToPermissionCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.rolesToPermission.create({
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
      ctx.prisma.rolesToPermission.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.RolesToPermission,
        entityId: result.id,
        actionData: data,
      }),
    ]);

    await runHooks.afterCreate(ctx, result as RolesToPermission);

    return result as RolesToPermission;
  };

  const createMany = async (
    entries: StrictCreateRolesToPermissionArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateRolesToPermissionArgs[];

    const result = await ctx.prisma.rolesToPermission.createMany({
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
    data: MutationUpdateRolesToPermissionArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<RolesToPermission> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateRolesToPermissionArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.rolesToPermission.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.RolesToPermission,
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
      runHooks.afterUpdate(ctx, result as RolesToPermission),
    ]);

    return result as RolesToPermission;
  };

  const upsert = async (
    data: PartialFieldsInRecord<MutationUpdateRolesToPermissionArgsWithoutAutodefinable, 'id'>,
    byUser = false,
  ): Promise<RolesToPermission> => {
    // Get db version
    const dbVersion = data.id ? await get(data.id) : null;

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateRolesToPermissionArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as RolesToPermission);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.rolesToPermission.upsert({
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
    filter: RolesToPermissionFilter,
    data: MutationCreateRolesToPermissionArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<RolesToPermission> => {
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
    params: MutationRemoveRolesToPermissionArgs,
  ): Promise<RolesToPermission> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.rolesToPermission.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.RolesToPermission,
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

  const baseMethods: BaseRolesToPermissionsMethods = {
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

  const service: RolesToPermissionsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
