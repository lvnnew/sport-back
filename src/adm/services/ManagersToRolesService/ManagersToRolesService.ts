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

export type AutoDefinableManagersToRoleKeys = never;
export type ForbidenForUserManagersToRoleKeys = never;
export type RequiredDbNotUserManagersToRoleKeys = never;

export type AutodefinableManagersToRolePart = DefinedRecord<Pick<MutationCreateManagersToRoleArgs, AutoDefinableManagersToRoleKeys>>;

export type ReliableManagersToRoleCreateUserInput =
  Omit<MutationCreateManagersToRoleArgs, ForbidenForUserManagersToRoleKeys>
  & AutodefinableManagersToRolePart;

export type AllowedManagersToRoleForUserCreateInput = Omit<MutationCreateManagersToRoleArgs, ForbidenForUserManagersToRoleKeys>;

export type StrictCreateManagersToRoleArgs = DefinedFieldsInRecord<MutationCreateManagersToRoleArgs, RequiredDbNotUserManagersToRoleKeys> & AutodefinableManagersToRolePart;
export type StrictUpdateManagersToRoleArgs = DefinedFieldsInRecord<MutationUpdateManagersToRoleArgs, RequiredDbNotUserManagersToRoleKeys> & AutodefinableManagersToRolePart;

export type StrictCreateManagersToRoleArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateManagersToRoleArgs, AutoDefinableManagersToRoleKeys>;

export interface BaseManagersToRolesMethods {
  get: (id: number) =>
    Promise<ManagersToRole | null>;
  all: (params?: QueryAllManagersToRolesArgs) =>
    Promise<ManagersToRole[]>;
  findOne: (params?: QueryAllManagersToRolesArgs) =>
    Promise<ManagersToRole | null>;
  count: (params?: Query_AllManagersToRolesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllManagersToRolesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateManagersToRoleArgs, byUser?: boolean) =>
    Promise<ManagersToRole>;
  createMany: (data: StrictCreateManagersToRoleArgsWithoutAutoDefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateManagersToRoleArgs, byUser?: boolean) =>
    Promise<ManagersToRole>;
  upsert: (data: MutationUpdateManagersToRoleArgs, byUser?: boolean) =>
    Promise<ManagersToRole>;
  upsertAdvanced: (
    filter: ManagersToRoleFilter,
    data: MutationCreateManagersToRoleArgs,
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

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [];

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

  const getDefaultPart = async () => ({});

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
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findRequired = async (
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
    data: MutationCreateManagersToRoleArgs,
    byUser = false,
  ): Promise<ManagersToRole> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedManagersToRoleForUserCreateInput :
      data;

    // augment data by default fields
    const augmented = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

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
      runHooks.afterCreate(ctx, result as ManagersToRole),
    ]);

    return result as ManagersToRole;
  };

  const createMany = async (
    entries: StrictCreateManagersToRoleArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData = clearedData.map(data => R.mergeLeft(
      data,
      defaultPart,
    ) as StrictCreateManagersToRoleArgs);

    const result = await ctx.prisma.managersToRole.createMany({
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
    data: MutationUpdateManagersToRoleArgs,
    byUser = false,
  ): Promise<ManagersToRole> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateManagersToRoleArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.managersToRole.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
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
    data: MutationUpdateManagersToRoleArgs,
    byUser = false,
  ): Promise<ManagersToRole> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateManagersToRoleArgs = R.mergeLeft(cleared, augmentationBase);

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
    data: MutationCreateManagersToRoleArgs,
    byUser = false,
  ): Promise<ManagersToRole> => {
    const cnt = await count({filter});

    if (cnt > 1) {
      throw new Error(`There is more then one entity (${cnt}) that fits filter "${JSON.stringify(filter)}"`);
    }

    // Compose object for augmentation
    const dbVersion = await findRequired({filter});
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateManagersToRoleArgs = R.mergeLeft(cleared, augmentationBase);

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

  const service: ManagersToRolesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
