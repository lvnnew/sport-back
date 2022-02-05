import {
  ListMetadata,
  MutationCreateAppLoginArgs,
  MutationUpdateAppLoginArgs,
  MutationRemoveAppLoginArgs,
  QueryAllAppLoginsArgs,
  Query_AllAppLoginsMetaArgs,
  AppLogin,
  AppLoginFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAppLoginsMethods, getAdditionalMethods} from './additionalMethods';
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

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export interface BaseAppLoginsMethods {
  get: (id: number) =>
    Promise<AppLogin | null>;
  all: (params?: QueryAllAppLoginsArgs) =>
    Promise<AppLogin[]>;
  findOne: (params?: QueryAllAppLoginsArgs) =>
    Promise<AppLogin | null>;
  count: (params?: Query_AllAppLoginsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAppLoginsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAppLoginArgs, byUser?: boolean) =>
    Promise<AppLogin>;
  createMany: (data: MutationCreateAppLoginArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAppLoginArgs, byUser?: boolean) =>
    Promise<AppLogin>;
  upsert: (data: MutationUpdateAppLoginArgs, byUser?: boolean) =>
    Promise<AppLogin>;
  upsertAdvanced: (
    filter: AppLoginFilter,
    data: MutationCreateAppLoginArgs,
    byUser?: boolean,
  ) =>
    Promise<AppLogin>;
  delete: (params: MutationRemoveAppLoginArgs) =>
    Promise<AppLogin>;
}

export type AppLoginsService = BaseAppLoginsMethods & AdditionalAppLoginsMethods;

export const getAppLoginsService = (ctx: Context) => {
  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.appLogin.findUnique,
    forbiddenForUserFields,
  );

  const get = async (
    id: number,
  ): Promise<AppLogin | null> => {
    return ctx.prisma.appLogin.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllAppLoginsArgs = {},
  ): Promise<AppLogin[]> => {
    return ctx.prisma.appLogin.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<AppLogin[]>;
  };

  const findOne = async (
    params: QueryAllAppLoginsArgs = {},
  ): Promise<AppLogin | null> => {
    return ctx.prisma.appLogin.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllAppLoginsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.appLogin.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllAppLoginsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAppLoginArgs,
    byUser = false,
  ): Promise<AppLogin> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await beforeCreate(ctx, data);

    const createOperation = ctx.prisma.appLogin.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'login',
                  'passwordHash',
                  'userId',
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
    await ctx.prisma.appLogin.update({
      where: {id: result.id},
      data: {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'login',
                'passwordHash',
                'userId',
              ], result),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    });

    await afterCreate(ctx, result as AppLogin);

    return result as AppLogin;
  };

  const createMany = async (
    entries: MutationCreateAppLoginArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.appLogin.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'login',
                  'passwordHash',
                  'userId',
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
    data: MutationUpdateAppLoginArgs,
    byUser = false,
  ): Promise<AppLogin> => {
    let processedData = data;

    if (byUser) {
      processedData = await augmentDataFromDb(processedData);
    }

    processedData = await beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.appLogin.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'login',
                  'passwordHash',
                  'userId',
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

    await afterUpdate(ctx, result as AppLogin);

    return result as AppLogin;
  };

  const upsert = async (
    data: MutationUpdateAppLoginArgs,
    byUser = false,
  ): Promise<AppLogin> => {
    let processedDataToCreate = data;
    let processedDataToUpdate = data;

    if (byUser) {
      processedDataToCreate = R.mergeDeepLeft(
        {},
        processedDataToCreate,
      );

      processedDataToUpdate = await augmentDataFromDb(processedDataToUpdate);
    }

    const result = await ctx.prisma.appLogin.upsert({create: R.mergeDeepLeft(
      processedDataToCreate,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'login',
                'passwordHash',
                'userId',
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
                'login',
                'passwordHash',
                'userId',
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
    filter: AppLoginFilter,
    data: MutationCreateAppLoginArgs,
    byUser = false,
  ): Promise<AppLogin> => {
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
    params: MutationRemoveAppLoginArgs,
  ): Promise<AppLogin> => {
    const deleteOperation = ctx.prisma.appLogin.delete({where: {id: params.id}});

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

  const baseMethods: BaseAppLoginsMethods = {
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
