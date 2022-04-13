import {
  ListMetadata,
  MutationCreateEntityArgs,
  MutationUpdateEntityArgs,
  MutationRemoveEntityArgs,
  QueryAllEntitiesArgs,
  Query_AllEntitiesMetaArgs,
  Entity,
  EntityFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalEntitiesMethods, getAdditionalMethods} from './additionalMethods';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {getHooksUtils, HooksAddType} from '../getHooksUtils';
import * as R from 'ramda';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type AutoDefinableEntityKeys = never;
export type ForbidenForUserEntityKeys = never;
export type RequiredDbNotUserEntityKeys = never;

export type AutodefinableEntityPart = DefinedRecord<Pick<MutationCreateEntityArgs, AutoDefinableEntityKeys>>;

export type ReliableEntityCreateUserInput =
  Omit<MutationCreateEntityArgs, ForbidenForUserEntityKeys>
  & AutodefinableEntityPart;

export type AllowedEntityForUserCreateInput = Omit<MutationCreateEntityArgs, ForbidenForUserEntityKeys>;

export type StrictCreateEntityArgs = DefinedFieldsInRecord<MutationCreateEntityArgs, RequiredDbNotUserEntityKeys> & AutodefinableEntityPart;
export type StrictUpdateEntityArgs = DefinedFieldsInRecord<MutationUpdateEntityArgs, RequiredDbNotUserEntityKeys> & AutodefinableEntityPart;

export type StrictCreateEntityArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateEntityArgs, AutoDefinableEntityKeys>;

export interface BaseEntitiesMethods {
  get: (id: string) =>
    Promise<Entity | null>;
  getRequired: (id: string) =>
    Promise<Entity>;
  all: (params?: QueryAllEntitiesArgs) =>
    Promise<Entity[]>;
  findOne: (params?: QueryAllEntitiesArgs) =>
    Promise<Entity | null>;
  findOneRequired: (params?: QueryAllEntitiesArgs) =>
    Promise<Entity>;
  count: (params?: Query_AllEntitiesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllEntitiesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateEntityArgs, byUser?: boolean) =>
    Promise<Entity>;
  createMany: (data: StrictCreateEntityArgsWithoutAutoDefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateEntityArgs, byUser?: boolean) =>
    Promise<Entity>;
  upsert: (data: MutationUpdateEntityArgs, byUser?: boolean) =>
    Promise<Entity>;
  upsertAdvanced: (
    filter: EntityFilter,
    data: MutationCreateEntityArgs,
    byUser?: boolean,
  ) =>
    Promise<Entity>;
  delete: (params: MutationRemoveEntityArgs) =>
    Promise<Entity>;
}

export type EntitiesService = BaseEntitiesMethods
  & AdditionalEntitiesMethods
  & HooksAddType<
    Entity,
    QueryAllEntitiesArgs,
    ReliableEntityCreateUserInput,
    MutationUpdateEntityArgs,
    MutationRemoveEntityArgs,
    StrictCreateEntityArgs,
    StrictUpdateEntityArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [];

export const getEntitiesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    Entity,
    QueryAllEntitiesArgs,
    ReliableEntityCreateUserInput,
    MutationUpdateEntityArgs,
    MutationRemoveEntityArgs,
    StrictCreateEntityArgs,
    StrictUpdateEntityArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const getDefaultPart = async () => ({});

  const all = async (
    params: QueryAllEntitiesArgs = {},
  ): Promise<Entity[]> => {
    return ctx.prisma.entity.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<Entity[]>;
  };

  const findOne = async (
    params: QueryAllEntitiesArgs = {},
  ): Promise<Entity | null> => {
    return ctx.prisma.entity.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findOneRequired = async (
    params: QueryAllEntitiesArgs = {},
  ): Promise<Entity> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: string,
  ): Promise<Entity | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: string,
  ): Promise<Entity> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllEntitiesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.entity.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllEntitiesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateEntityArgs,
    byUser = false,
  ): Promise<Entity> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedEntityForUserCreateInput :
      data;

    // augment data by default fields
    const augmented = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

    const createOperation = ctx.prisma.entity.create({
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
      ctx.prisma.entity.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      runHooks.afterCreate(ctx, result as Entity),
    ]);

    return result as Entity;
  };

  const createMany = async (
    entries: StrictCreateEntityArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData = clearedData.map(data => R.mergeLeft(
      data,
      defaultPart,
    ) as StrictCreateEntityArgs);

    const result = await ctx.prisma.entity.createMany({
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
    data: MutationUpdateEntityArgs,
    byUser = false,
  ): Promise<Entity> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateEntityArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.entity.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const operations = [
      updateOperation,
      ...(await runHooks.additionalOperationsOnUpdate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      runHooks.afterUpdate(ctx, result as Entity),
    ]);

    return result as Entity;
  };

  const upsert = async (
    data: MutationUpdateEntityArgs,
    byUser = false,
  ): Promise<Entity> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateEntityArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.entity.upsert({
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
    filter: EntityFilter,
    data: MutationCreateEntityArgs,
    byUser = false,
  ): Promise<Entity> => {
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
    params: MutationRemoveEntityArgs,
  ): Promise<Entity> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.entity.delete({where: {id: params.id}});

    const operations = [
      deleteOperation,
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

  const baseMethods: BaseEntitiesMethods = {
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

  const service: EntitiesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
