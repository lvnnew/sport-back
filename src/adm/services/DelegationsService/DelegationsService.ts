import {
  ListMetadata,
  MutationCreateDelegationArgs,
  MutationUpdateDelegationArgs,
  MutationRemoveDelegationArgs,
  QueryAllDelegationsArgs,
  Query_AllDelegationsMetaArgs,
  Delegation,
  DelegationFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalDelegationsMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutoDefinableDelegationKeys = never;
export type AutoDefinableDelegationPart = MutationCreateDelegationArgs;
export type MutationCreateDelegationArgsWithAutoDefinable = AutoDefinableDelegationPart & MutationCreateDelegationArgs;
export type MutationCreateDelegationArgsWithoutAutoDefinable = Omit<MutationCreateDelegationArgs, AutoDefinableDelegationKeys>;

export type StrictUpdateDelegationArgs = DefinedFieldsInRecord<MutationUpdateDelegationArgs, AutoDefinableDelegationKeys>;
export type StrictCreateDelegationArgs = DefinedFieldsInRecord<MutationCreateDelegationArgs, AutoDefinableDelegationKeys>;

export type StrictCreateDelegationArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateDelegationArgs, AutoDefinableDelegationKeys>;

export interface BaseDelegationsMethods {
  get: (id: number) =>
    Promise<Delegation | null>;
  all: (params?: QueryAllDelegationsArgs) =>
    Promise<Delegation[]>;
  findOne: (params?: QueryAllDelegationsArgs) =>
    Promise<Delegation | null>;
  count: (params?: Query_AllDelegationsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllDelegationsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateDelegationArgs, byUser?: boolean) =>
    Promise<Delegation>;
  createMany: (data: StrictCreateDelegationArgsWithoutAutoDefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateDelegationArgs, byUser?: boolean) =>
    Promise<Delegation>;
  upsert: (data: MutationUpdateDelegationArgs, byUser?: boolean) =>
    Promise<Delegation>;
  upsertAdvanced: (
    filter: DelegationFilter,
    data: MutationCreateDelegationArgs,
    byUser?: boolean,
  ) =>
    Promise<Delegation>;
  delete: (params: MutationRemoveDelegationArgs) =>
    Promise<Delegation>;
}

export type DelegationsService = BaseDelegationsMethods
  & AdditionalDelegationsMethods
  & HooksAddType<
    Delegation,
    QueryAllDelegationsArgs,
    MutationCreateDelegationArgsWithAutoDefinable,
    MutationUpdateDelegationArgs,
    MutationRemoveDelegationArgs,
    StrictCreateDelegationArgs,
    StrictUpdateDelegationArgs
  >;

const dateFieldsForSearch: string[] = [
  'expiresAt',
];

const otherFieldsForSearch: string[] = [
  'id',
  'fromId',
  'toId',
];

export const getDelegationsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    Delegation,
    QueryAllDelegationsArgs,
    MutationCreateDelegationArgsWithAutoDefinable,
    MutationUpdateDelegationArgs,
    MutationRemoveDelegationArgs,
    StrictCreateDelegationArgs,
    StrictUpdateDelegationArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const getDefaultPart = () => ({});

  const all = async (
    params: QueryAllDelegationsArgs = {},
  ): Promise<Delegation[]> => {
    return ctx.prisma.delegation.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<Delegation[]>;
  };

  const findOne = async (
    params: QueryAllDelegationsArgs = {},
  ): Promise<Delegation | null> => {
    return ctx.prisma.delegation.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findRequired = async (
    params: QueryAllDelegationsArgs = {},
  ): Promise<Delegation> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<Delegation | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<Delegation> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllDelegationsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.delegation.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllDelegationsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateDelegationArgs,
    byUser = false,
  ): Promise<Delegation> => {
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as MutationCreateDelegationArgsWithoutAutoDefinable :
      data;

    // augment data by default fields
    const augmented: MutationCreateDelegationArgsWithAutoDefinable = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

    const createOperation = ctx.prisma.delegation.create({
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
      ctx.prisma.delegation.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.Delegation,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as Delegation),
    ]);

    return result as Delegation;
  };

  const createMany = async (
    entries: StrictCreateDelegationArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData =
      clearedData.map(data => R.mergeLeft(data, defaultPart) as MutationCreateDelegationArgsWithAutoDefinable);

    const result = await ctx.prisma.delegation.createMany({
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
    data: MutationUpdateDelegationArgs,
    byUser = false,
  ): Promise<Delegation> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateDelegationArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.delegation.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.Delegation,
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
      runHooks.afterUpdate(ctx, result as Delegation),
    ]);

    return result as Delegation;
  };

  const upsert = async (
    data: MutationUpdateDelegationArgs,
    byUser = false,
  ): Promise<Delegation> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateDelegationArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.delegation.upsert({
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
    filter: DelegationFilter,
    data: MutationCreateDelegationArgs,
    byUser = false,
  ): Promise<Delegation> => {
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
    const augmented: StrictUpdateDelegationArgs = R.mergeLeft(cleared, augmentationBase);

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
    params: MutationRemoveDelegationArgs,
  ): Promise<Delegation> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.delegation.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.Delegation,
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

  const baseMethods: BaseDelegationsMethods = {
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

  const service: DelegationsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
