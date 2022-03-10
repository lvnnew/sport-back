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
import {additionalOperationsOnCreate} from './hooks/additionalOperationsOnCreate';
import {additionalOperationsOnUpdate} from './hooks/additionalOperationsOnUpdate';
import {additionalOperationsOnDelete} from './hooks/additionalOperationsOnDelete';
import {beforeCreate} from './hooks/beforeCreate';
import {beforeUpdate} from './hooks/beforeUpdate';
import {afterCreate} from './hooks/afterCreate';
import {afterUpdate} from './hooks/afterUpdate';
import {afterDelete} from './hooks/afterDelete';
import getAugmenterByDataFromDb from '../utils/getAugmenterByDataFromDb';
import * as R from 'ramda';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type StrictUpdateEntityArgs = MutationUpdateEntityArgs;
export type StrictCreateEntityArgs = MutationCreateEntityArgs;

export interface BaseEntitiesMethods {
  get: (id: string) =>
    Promise<Entity | null>;
  all: (params?: QueryAllEntitiesArgs) =>
    Promise<Entity[]>;
  findOne: (params?: QueryAllEntitiesArgs) =>
    Promise<Entity | null>;
  count: (params?: Query_AllEntitiesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllEntitiesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateEntityArgs, byUser?: boolean) =>
    Promise<Entity>;
  createMany: (data: MutationCreateEntityArgs[], byUser?: boolean) =>
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

export type EntitiesService = BaseEntitiesMethods & AdditionalEntitiesMethods;

export const getEntitiesService = (ctx: Context) => {
  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.entity.findUnique,
    forbiddenForUserFields,
  );

  const get = async (
    id: string,
  ): Promise<Entity | null> => {
    return ctx.prisma.entity.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllEntitiesArgs = {},
  ): Promise<Entity[]> => {
    return ctx.prisma.entity.findMany(
      toPrismaRequest(params, {noId: false}),
    ) as unknown as Promise<Entity[]>;
  };

  const findOne = async (
    params: QueryAllEntitiesArgs = {},
  ): Promise<Entity | null> => {
    return ctx.prisma.entity.findFirst(toPrismaRequest(params, {noId: false}));
  };

  const count = async (
    params: Query_AllEntitiesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.entity.count(toPrismaTotalRequest(params));
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
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await beforeCreate(ctx, data);

    const createOperation = ctx.prisma.entity.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ].join(' '),
        },
      ),
    });

    const operations = [
      createOperation,
      ...(await additionalOperationsOnCreate(ctx, processedData)),
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
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                ], result),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ].join(' '),
        },
      }),
      afterCreate(ctx, result as Entity),
    ]);

    return result as Entity;
  };

  const createMany = async (
    entries: MutationCreateEntityArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.entity.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                ], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ].join(' '),
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
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdateEntityArgs;

    processedData = await beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.entity.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ].join(' '),
        },
      ),
      where: {id},
    });

    const operations = [
      updateOperation,
      ...(await additionalOperationsOnUpdate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      afterUpdate(ctx, result as Entity),
    ]);

    return result as Entity;
  };

  const upsert = async (
    data: MutationUpdateEntityArgs,
    byUser = false,
  ): Promise<Entity> => {
    let processedDataToCreate = data;
    let processedDataToUpdate = data;

    if (byUser) {
      processedDataToCreate = R.mergeDeepLeft(
        {},
        processedDataToCreate,
      );

      processedDataToUpdate = await augmentDataFromDb(processedDataToUpdate);
    }

    const result = await ctx.prisma.entity.upsert({create: R.mergeDeepLeft(
      processedDataToCreate,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
              ], processedDataToCreate),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    ), update: R.mergeDeepLeft(
      processedDataToUpdate,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
              ], processedDataToUpdate),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    ), where: {id: data.id}});

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
    let processedDataToCreate = data;
    let processedDataToUpdate = data;

    if (byUser) {
      processedDataToCreate = R.mergeDeepLeft(
        {},
        processedDataToCreate,
      );

      processedDataToUpdate = R.omit(
        [],
        processedDataToUpdate,
      );
    }

    const cnt = await count({filter});

    if (cnt > 1) {
      throw new Error(`There is more then one entity (${cnt}) that fits filter "${JSON.stringify(filter)}"`);
    }

    if (cnt === 0) {
      return create(processedDataToCreate, false);
    } else {
      const current = await findOne({filter});

      if (!current) {
        return create(processedDataToCreate, false);
      }

      return update({
        ...processedDataToUpdate,
        id: current.id,
      },
      false);
    }
  };

  const del = async (
    params: MutationRemoveEntityArgs,
  ): Promise<Entity> => {
    const deleteOperation = ctx.prisma.entity.delete({where: {id: params.id}});

    const operations = [
      deleteOperation,
      ...(await additionalOperationsOnDelete(ctx, params)),
    ];

    const entity = await get(params.id);

    if (!entity) {
      throw new Error(`There is no entity with "${params.id}" id`);
    }

    const [result] = await ctx.prisma.$transaction(operations as any);

    if (!result) {
      throw new Error('There is no such entity');
    }

    await afterDelete(ctx, entity);

    return entity;
  };

  const baseMethods: BaseEntitiesMethods = {
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

  return {
    ...baseMethods,
    ...additionalMethods,
  };
};
