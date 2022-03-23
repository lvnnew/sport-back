import {
  ListMetadata,
  MutationCreateAppRefreshTokenArgs,
  MutationUpdateAppRefreshTokenArgs,
  MutationRemoveAppRefreshTokenArgs,
  QueryAllAppRefreshTokensArgs,
  Query_AllAppRefreshTokensMetaArgs,
  AppRefreshToken,
  AppRefreshTokenFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAppRefreshTokensMethods, getAdditionalMethods} from './additionalMethods';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {getHooksUtils, HooksAddType} from '../getHooksUtils';
import getAugmenterByDataFromDb from '../utils/getAugmenterByDataFromDb';
import * as R from 'ramda';
import AuditLogActionType from '../../../types/AuditLogActionType';
import Entity from '../../../types/Entity';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type StrictUpdateAppRefreshTokenArgs = MutationUpdateAppRefreshTokenArgs;
export type StrictCreateAppRefreshTokenArgs = MutationCreateAppRefreshTokenArgs;

export interface BaseAppRefreshTokensMethods {
  get: (id: number) =>
    Promise<AppRefreshToken | null>;
  all: (params?: QueryAllAppRefreshTokensArgs) =>
    Promise<AppRefreshToken[]>;
  findOne: (params?: QueryAllAppRefreshTokensArgs) =>
    Promise<AppRefreshToken | null>;
  count: (params?: Query_AllAppRefreshTokensMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAppRefreshTokensMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAppRefreshTokenArgs, byUser?: boolean) =>
    Promise<AppRefreshToken>;
  createMany: (data: MutationCreateAppRefreshTokenArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAppRefreshTokenArgs, byUser?: boolean) =>
    Promise<AppRefreshToken>;
  upsert: (data: MutationUpdateAppRefreshTokenArgs, byUser?: boolean) =>
    Promise<AppRefreshToken>;
  upsertAdvanced: (
    filter: AppRefreshTokenFilter,
    data: MutationCreateAppRefreshTokenArgs,
    byUser?: boolean,
  ) =>
    Promise<AppRefreshToken>;
  delete: (params: MutationRemoveAppRefreshTokenArgs) =>
    Promise<AppRefreshToken>;
}

export type AppRefreshTokensService = BaseAppRefreshTokensMethods
  & AdditionalAppRefreshTokensMethods
  & HooksAddType<
    AppRefreshToken,
    QueryAllAppRefreshTokensArgs,
    MutationCreateAppRefreshTokenArgs,
    MutationUpdateAppRefreshTokenArgs,
    MutationRemoveAppRefreshTokenArgs,
    StrictCreateAppRefreshTokenArgs,
    StrictUpdateAppRefreshTokenArgs
  >;

export const getAppRefreshTokensService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    AppRefreshToken,
    QueryAllAppRefreshTokensArgs,
    MutationCreateAppRefreshTokenArgs,
    MutationUpdateAppRefreshTokenArgs,
    MutationRemoveAppRefreshTokenArgs,
    StrictCreateAppRefreshTokenArgs,
    StrictUpdateAppRefreshTokenArgs
  >();

  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.appRefreshToken.findUnique,
    forbiddenForUserFields,
  );

  const all = async (
    params: QueryAllAppRefreshTokensArgs = {},
  ): Promise<AppRefreshToken[]> => {
    return ctx.prisma.appRefreshToken.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<AppRefreshToken[]>;
  };

  const findOne = async (
    params: QueryAllAppRefreshTokensArgs = {},
  ): Promise<AppRefreshToken | null> => {
    return ctx.prisma.appRefreshToken.findFirst(toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}));
  };

  const get = async (
    id: number,
  ): Promise<AppRefreshToken | null> => {
    return findOne({filter: {id}});
  };

  const count = async (
    params: Query_AllAppRefreshTokensMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.appRefreshToken.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllAppRefreshTokensMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAppRefreshTokenArgs,
    byUser = false,
  ): Promise<AppRefreshToken> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await runHooks.beforeCreate(ctx, data);

    const createOperation = ctx.prisma.appRefreshToken.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'userId',
                  'token',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'create',
                ], processedData),
              )
              .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
          ].join(' '),
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
      ctx.prisma.appRefreshToken.update({
        where: {id: result.id},
        data: {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'userId',
                  'token',
                ], result),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'create',
                ], result),
              )
              .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
          ].join(' '),
        },
      }),
      ctx.prisma.auditLog.create({
        data: {
          date: new Date(),
          title: 'App refresh tokens create',
          entityTypeId: Entity.AppRefreshToken,
          entityId: result.id.toString(),
          actionTypeId: AuditLogActionType.Create,
          actionData: JSON.stringify(data),
          managerId: ctx.service('profile').getManagerId(),
          userId: ctx.service('profile').getUserId(),
        },
      }),
      runHooks.afterCreate(ctx, result as AppRefreshToken),
    ]);

    return result as AppRefreshToken;
  };

  const createMany = async (
    entries: MutationCreateAppRefreshTokenArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.appRefreshToken.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'userId',
                  'token',
                ], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'create',
                ], data),
              )
              .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
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
    data: MutationUpdateAppRefreshTokenArgs,
    byUser = false,
  ): Promise<AppRefreshToken> => {
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdateAppRefreshTokenArgs;

    processedData = await runHooks.beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.appRefreshToken.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'userId',
                  'token',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'create',
                ], processedData),
              )
              .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
          ].join(' '),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'App refresh tokens update',
        entityTypeId: Entity.AppRefreshToken,
        entityId: data.id.toString(),
        actionTypeId: AuditLogActionType.Update,
        actionData: JSON.stringify(data),
        managerId: ctx.service('profile').getManagerId(),
        userId: ctx.service('profile').getUserId(),
      },
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
      runHooks.afterUpdate(ctx, result as AppRefreshToken),
    ]);

    return result as AppRefreshToken;
  };

  const upsert = async (
    data: MutationUpdateAppRefreshTokenArgs,
    byUser = false,
  ): Promise<AppRefreshToken> => {
    const augmented = await augmentDataFromDb(data);

    let createData = byUser ? R.mergeDeepLeft(
      {},
      data,
    ) : data as StrictCreateAppRefreshTokenArgs;
    let updateData = byUser ? augmented : {...augmented, ...data} as StrictUpdateAppRefreshTokenArgs;

    const handledData = await runHooks.beforeUpsert(ctx, {createData, updateData});
    createData = handledData.createData;
    updateData = handledData.updateData;

    const result = await ctx.prisma.appRefreshToken.upsert({create: R.mergeDeepLeft(
      createData,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'userId',
                'token',
              ], createData),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'create',
              ], createData),
            )
            .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
        ].join(' '),
      },
    ), update: R.mergeDeepLeft(
      updateData,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'userId',
                'token',
              ], updateData),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'create',
              ], updateData),
            )
            .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
        ].join(' '),
      },
    ), where: {id: data.id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvanced = async (
    filter: AppRefreshTokenFilter,
    data: MutationCreateAppRefreshTokenArgs,
    byUser = false,
  ): Promise<AppRefreshToken> => {
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
    params: MutationRemoveAppRefreshTokenArgs,
  ): Promise<AppRefreshToken> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.appRefreshToken.delete({where: {id: params.id}});

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'App refresh tokens delete',
        entityTypeId: Entity.AppRefreshToken,
        entityId: params.id.toString(),
        actionTypeId: AuditLogActionType.Delete,
        managerId: ctx.service('profile').getManagerId(),
        userId: ctx.service('profile').getUserId(),
      },
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

  const baseMethods: BaseAppRefreshTokensMethods = {
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

  const service: AppRefreshTokensService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
