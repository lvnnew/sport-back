import {
  ListMetadata,
  MutationCreateManagerArgs,
  MutationUpdateManagerArgs,
  MutationRemoveManagerArgs,
  QueryAllManagersArgs,
  Query_AllManagersMetaArgs,
  Manager,
  ManagerFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalManagersMethods, getAdditionalMethods} from './additionalMethods';
import {additionalOperationsOnCreate} from './hooks/additionalOperationsOnCreate';
import {additionalOperationsOnUpdate} from './hooks/additionalOperationsOnUpdate';
import {additionalOperationsOnDelete} from './hooks/additionalOperationsOnDelete';
import {beforeCreate} from './hooks/beforeCreate';
import {beforeUpdate} from './hooks/beforeUpdate';
import {afterCreate} from './hooks/afterCreate';
import {afterUpdate} from './hooks/afterUpdate';
import {afterDelete} from './hooks/afterDelete';
import * as R from 'ramda';

// DO NOT EDIT! THIS IS GENERATED FILE

export interface BaseManagersMethods {
  get: (id: number) =>
    Promise<Manager | null>;
  all: (params?: QueryAllManagersArgs) =>
    Promise<Manager[]>;
  findOne: (params?: QueryAllManagersArgs) =>
    Promise<Manager | null>;
  count: (params?: Query_AllManagersMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllManagersMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateManagerArgs, byUser?: boolean) =>
    Promise<Manager>;
  createMany: (data: MutationCreateManagerArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateManagerArgs, byUser?: boolean) =>
    Promise<Manager>;
  upsert: (data: MutationUpdateManagerArgs, byUser?: boolean) =>
    Promise<Manager>;
  upsertAdvanced: (
    filter: ManagerFilter,
    data: MutationCreateManagerArgs,
    byUser?: boolean,
  ) =>
    Promise<Manager>;
  delete: (params: MutationRemoveManagerArgs) =>
    Promise<Manager>;
}

export type ManagersService = BaseManagersMethods & AdditionalManagersMethods;

export const getManagersService = (ctx: Context) => {
  const get = async (
    id: number,
  ): Promise<Manager | null> => {
    return ctx.prisma.manager.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllManagersArgs = {},
  ): Promise<Manager[]> => {
    return ctx.prisma.manager.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<Manager[]>;
  };

  const findOne = async (
    params: QueryAllManagersArgs = {},
  ): Promise<Manager | null> => {
    return ctx.prisma.manager.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllManagersMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.manager.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllManagersMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateManagerArgs,
    byUser = false,
  ): Promise<Manager> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await beforeCreate(ctx, data);

    const createOperation = ctx.prisma.manager.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'lastName',
                  'firstName',
                  'languageId',
                  'email',
                  'telegramLogin',
                  'unitId',
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

    // update search. earlier we does not have id
    await ctx.prisma.manager.update({
      where: {id: result.id},
      data: {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
                'lastName',
                'firstName',
                'languageId',
                'email',
                'telegramLogin',
                'unitId',
              ], result),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    });

    await afterCreate(ctx, result as Manager);

    return result as Manager;
  };

  const createMany = async (
    entries: MutationCreateManagerArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.manager.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'lastName',
                  'firstName',
                  'languageId',
                  'email',
                  'telegramLogin',
                  'unitId',
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
    data: MutationUpdateManagerArgs,
    byUser = false,
  ): Promise<Manager> => {
    let processedData = data;

    if (byUser) {
      processedData = R.omit(
        [],
        processedData,
      );
    }

    processedData = await beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.manager.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'lastName',
                  'firstName',
                  'languageId',
                  'email',
                  'telegramLogin',
                  'unitId',
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

    await afterUpdate(ctx, result as Manager);

    return result as Manager;
  };

  const upsert = async (
    data: MutationUpdateManagerArgs,
    byUser = false,
  ): Promise<Manager> => {
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

    const result = await ctx.prisma.manager.upsert({create: R.mergeDeepLeft(
      processedDataToCreate,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
                'lastName',
                'firstName',
                'languageId',
                'email',
                'telegramLogin',
                'unitId',
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
                'lastName',
                'firstName',
                'languageId',
                'email',
                'telegramLogin',
                'unitId',
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
    filter: ManagerFilter,
    data: MutationCreateManagerArgs,
    byUser = false,
  ): Promise<Manager> => {
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
    params: MutationRemoveManagerArgs,
  ): Promise<Manager> => {
    const deleteOperation = ctx.prisma.manager.delete({where: {id: params.id}});

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

  const baseMethods: BaseManagersMethods = {
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
