import {
  ListMetadata,
  MutationCreateManagersToPermissionArgs,
  MutationUpdateManagersToPermissionArgs,
  MutationRemoveManagersToPermissionArgs,
  QueryAllManagersToPermissionsArgs,
  Query_AllManagersToPermissionsMetaArgs,
  ManagersToPermission,
  ManagersToPermissionFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalManagersToPermissionsMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutoDefinableManagersToPermissionKeys = never;
export type ForbidenForUserManagersToPermissionKeys = never;
export type RequiredDbNotUserManagersToPermissionKeys = never;

export type AutodefinableManagersToPermissionPart = DefinedRecord<Pick<MutationCreateManagersToPermissionArgs, AutoDefinableManagersToPermissionKeys>>;

export type ReliableManagersToPermissionCreateUserInput =
  Omit<MutationCreateManagersToPermissionArgs, ForbidenForUserManagersToPermissionKeys>
  & AutodefinableManagersToPermissionPart;

export type AllowedManagersToPermissionForUserCreateInput = Omit<MutationCreateManagersToPermissionArgs, ForbidenForUserManagersToPermissionKeys>;

export type StrictCreateManagersToPermissionArgs = DefinedFieldsInRecord<MutationCreateManagersToPermissionArgs, RequiredDbNotUserManagersToPermissionKeys> & AutodefinableManagersToPermissionPart;
export type StrictUpdateManagersToPermissionArgs = DefinedFieldsInRecord<MutationUpdateManagersToPermissionArgs, RequiredDbNotUserManagersToPermissionKeys> & AutodefinableManagersToPermissionPart;

export type StrictCreateManagersToPermissionArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateManagersToPermissionArgs, AutoDefinableManagersToPermissionKeys>;

export interface BaseManagersToPermissionsMethods {
  get: (id: number) =>
    Promise<ManagersToPermission | null>;
  getRequired: (id: number) =>
    Promise<ManagersToPermission>;
  all: (params?: QueryAllManagersToPermissionsArgs) =>
    Promise<ManagersToPermission[]>;
  findOne: (params?: QueryAllManagersToPermissionsArgs) =>
    Promise<ManagersToPermission | null>;
  findOneRequired: (params?: QueryAllManagersToPermissionsArgs) =>
    Promise<ManagersToPermission>;
  count: (params?: Query_AllManagersToPermissionsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllManagersToPermissionsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateManagersToPermissionArgs, byUser?: boolean) =>
    Promise<ManagersToPermission>;
  createMany: (data: StrictCreateManagersToPermissionArgsWithoutAutoDefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateManagersToPermissionArgs, byUser?: boolean) =>
    Promise<ManagersToPermission>;
  upsert: (data: MutationUpdateManagersToPermissionArgs, byUser?: boolean) =>
    Promise<ManagersToPermission>;
  upsertAdvanced: (
    filter: ManagersToPermissionFilter,
    data: MutationCreateManagersToPermissionArgs,
    byUser?: boolean,
  ) =>
    Promise<ManagersToPermission>;
  delete: (params: MutationRemoveManagersToPermissionArgs) =>
    Promise<ManagersToPermission>;
}

export type ManagersToPermissionsService = BaseManagersToPermissionsMethods
  & AdditionalManagersToPermissionsMethods
  & HooksAddType<
    ManagersToPermission,
    QueryAllManagersToPermissionsArgs,
    ReliableManagersToPermissionCreateUserInput,
    MutationUpdateManagersToPermissionArgs,
    MutationRemoveManagersToPermissionArgs,
    StrictCreateManagersToPermissionArgs,
    StrictUpdateManagersToPermissionArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [];

export const getManagersToPermissionsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    ManagersToPermission,
    QueryAllManagersToPermissionsArgs,
    ReliableManagersToPermissionCreateUserInput,
    MutationUpdateManagersToPermissionArgs,
    MutationRemoveManagersToPermissionArgs,
    StrictCreateManagersToPermissionArgs,
    StrictUpdateManagersToPermissionArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const getDefaultPart = async () => ({});

  const all = async (
    params: QueryAllManagersToPermissionsArgs = {},
  ): Promise<ManagersToPermission[]> => {
    return ctx.prisma.managersToPermission.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<ManagersToPermission[]>;
  };

  const findOne = async (
    params: QueryAllManagersToPermissionsArgs = {},
  ): Promise<ManagersToPermission | null> => {
    return ctx.prisma.managersToPermission.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findOneRequired = async (
    params: QueryAllManagersToPermissionsArgs = {},
  ): Promise<ManagersToPermission> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<ManagersToPermission | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<ManagersToPermission> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllManagersToPermissionsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.managersToPermission.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllManagersToPermissionsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateManagersToPermissionArgs,
    byUser = false,
  ): Promise<ManagersToPermission> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedManagersToPermissionForUserCreateInput :
      data;

    // augment data by default fields
    const augmented = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

    const createOperation = ctx.prisma.managersToPermission.create({
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
      ctx.prisma.managersToPermission.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.ManagersToPermission,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as ManagersToPermission),
    ]);

    return result as ManagersToPermission;
  };

  const createMany = async (
    entries: StrictCreateManagersToPermissionArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData = clearedData.map(data => R.mergeLeft(
      data,
      defaultPart,
    ) as StrictCreateManagersToPermissionArgs);

    const result = await ctx.prisma.managersToPermission.createMany({
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
    data: MutationUpdateManagersToPermissionArgs,
    byUser = false,
  ): Promise<ManagersToPermission> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateManagersToPermissionArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.managersToPermission.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.ManagersToPermission,
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
      runHooks.afterUpdate(ctx, result as ManagersToPermission),
    ]);

    return result as ManagersToPermission;
  };

  const upsert = async (
    data: MutationUpdateManagersToPermissionArgs,
    byUser = false,
  ): Promise<ManagersToPermission> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateManagersToPermissionArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.managersToPermission.upsert({
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
    filter: ManagersToPermissionFilter,
    data: MutationCreateManagersToPermissionArgs,
    byUser = false,
  ): Promise<ManagersToPermission> => {
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
    params: MutationRemoveManagersToPermissionArgs,
  ): Promise<ManagersToPermission> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.managersToPermission.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.ManagersToPermission,
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

  const baseMethods: BaseManagersToPermissionsMethods = {
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

  const service: ManagersToPermissionsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
