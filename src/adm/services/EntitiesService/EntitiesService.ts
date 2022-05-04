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

export type AutodefinableEntityKeys = never;
export type ForbidenForUserEntityKeys = never;
export type RequiredDbNotUserEntityKeys = never;

export type AutodefinableEntityPart = DefinedRecord<Pick<MutationCreateEntityArgs, AutodefinableEntityKeys>>;

export type ReliableEntityCreateUserInput =
  Omit<MutationCreateEntityArgs, ForbidenForUserEntityKeys>
  & AutodefinableEntityPart;

export type AllowedEntityForUserCreateInput = Omit<MutationCreateEntityArgs, ForbidenForUserEntityKeys>;

export type StrictCreateEntityArgs = DefinedFieldsInRecord<MutationCreateEntityArgs, RequiredDbNotUserEntityKeys> & AutodefinableEntityPart;
export type StrictUpdateEntityArgs = DefinedFieldsInRecord<MutationUpdateEntityArgs, RequiredDbNotUserEntityKeys> & AutodefinableEntityPart;

export type StrictCreateEntityArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateEntityArgs, AutodefinableEntityKeys>;
export type MutationCreateEntityArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateEntityArgs, AutodefinableEntityKeys>;
export type MutationUpdateEntityArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateEntityArgs, AutodefinableEntityKeys>;

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
  create: (data: MutationCreateEntityArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<Entity>;
  createMany: (data: StrictCreateEntityArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateEntityArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<Entity>;
  upsert: (data: MutationUpdateEntityArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<Entity>;
  upsertAdvanced: (
    filter: EntityFilter,
    data: MutationCreateEntityArgsWithoutAutodefinable,
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

const otherFieldsForSearch: string[] = [
  'id',
  'title',
];

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

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableEntityPart> => currentData as T;

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
    data: MutationCreateEntityArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Entity> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedEntityForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableEntityCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

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
    entries: StrictCreateEntityArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateEntityArgs[];

    const result = await ctx.prisma.entity.createMany({
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
    data: MutationUpdateEntityArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Entity> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateEntityArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.entity.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
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
    data: MutationUpdateEntityArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Entity> => {
    // Get db version
    const dbVersion = await get(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateEntityArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as Entity);

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
    data: MutationCreateEntityArgsWithoutAutodefinable,
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
