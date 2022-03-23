import {
  ListMetadata,
  MutationCreateAdmRefreshTokenArgs,
  MutationUpdateAdmRefreshTokenArgs,
  MutationRemoveAdmRefreshTokenArgs,
  QueryAllAdmRefreshTokensArgs,
  Query_AllAdmRefreshTokensMetaArgs,
  AdmRefreshToken,
  AdmRefreshTokenFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAdmRefreshTokensMethods, getAdditionalMethods} from './additionalMethods';
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

export type StrictUpdateAdmRefreshTokenArgs = MutationUpdateAdmRefreshTokenArgs;
export type StrictCreateAdmRefreshTokenArgs = MutationCreateAdmRefreshTokenArgs;

export interface BaseAdmRefreshTokensMethods {
  get: (id: number) =>
    Promise<AdmRefreshToken | null>;
  all: (params?: QueryAllAdmRefreshTokensArgs) =>
    Promise<AdmRefreshToken[]>;
  findOne: (params?: QueryAllAdmRefreshTokensArgs) =>
    Promise<AdmRefreshToken | null>;
  count: (params?: Query_AllAdmRefreshTokensMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAdmRefreshTokensMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAdmRefreshTokenArgs, byUser?: boolean) =>
    Promise<AdmRefreshToken>;
  createMany: (data: MutationCreateAdmRefreshTokenArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAdmRefreshTokenArgs, byUser?: boolean) =>
    Promise<AdmRefreshToken>;
  upsert: (data: MutationUpdateAdmRefreshTokenArgs, byUser?: boolean) =>
    Promise<AdmRefreshToken>;
  upsertAdvanced: (
    filter: AdmRefreshTokenFilter,
    data: MutationCreateAdmRefreshTokenArgs,
    byUser?: boolean,
  ) =>
    Promise<AdmRefreshToken>;
  delete: (params: MutationRemoveAdmRefreshTokenArgs) =>
    Promise<AdmRefreshToken>;
}

export type AdmRefreshTokensService = BaseAdmRefreshTokensMethods
  & AdditionalAdmRefreshTokensMethods
  & HooksAddType<
    AdmRefreshToken,
    QueryAllAdmRefreshTokensArgs,
    MutationCreateAdmRefreshTokenArgs,
    MutationUpdateAdmRefreshTokenArgs,
    MutationRemoveAdmRefreshTokenArgs,
    StrictCreateAdmRefreshTokenArgs,
    StrictUpdateAdmRefreshTokenArgs
  >;

export const getAdmRefreshTokensService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    AdmRefreshToken,
    QueryAllAdmRefreshTokensArgs,
    MutationCreateAdmRefreshTokenArgs,
    MutationUpdateAdmRefreshTokenArgs,
    MutationRemoveAdmRefreshTokenArgs,
    StrictCreateAdmRefreshTokenArgs,
    StrictUpdateAdmRefreshTokenArgs
  >();

  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.admRefreshToken.findUnique,
    forbiddenForUserFields,
  );

  const all = async (
    params: QueryAllAdmRefreshTokensArgs = {},
  ): Promise<AdmRefreshToken[]> => {
    return ctx.prisma.admRefreshToken.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<AdmRefreshToken[]>;
  };

  const findOne = async (
    params: QueryAllAdmRefreshTokensArgs = {},
  ): Promise<AdmRefreshToken | null> => {
    return ctx.prisma.admRefreshToken.findFirst(toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}));
  };

  const get = async (
    id: number,
  ): Promise<AdmRefreshToken | null> => {
    return findOne({filter: {id}});
  };

  const count = async (
    params: Query_AllAdmRefreshTokensMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.admRefreshToken.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllAdmRefreshTokensMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAdmRefreshTokenArgs,
    byUser = false,
  ): Promise<AdmRefreshToken> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await runHooks.beforeCreate(ctx, data);

    const createOperation = ctx.prisma.admRefreshToken.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'managerId',
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
      ctx.prisma.admRefreshToken.update({
        where: {id: result.id},
        data: {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'managerId',
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
          title: 'Adm refresh tokens create',
          entityTypeId: Entity.AdmRefreshToken,
          entityId: result.id.toString(),
          actionTypeId: AuditLogActionType.Create,
          actionData: JSON.stringify(data),
          managerId: ctx.service('profile').getManagerId(),
          userId: ctx.service('profile').getUserId(),
        },
      }),
      runHooks.afterCreate(ctx, result as AdmRefreshToken),
    ]);

    return result as AdmRefreshToken;
  };

  const createMany = async (
    entries: MutationCreateAdmRefreshTokenArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.admRefreshToken.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'managerId',
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
    data: MutationUpdateAdmRefreshTokenArgs,
    byUser = false,
  ): Promise<AdmRefreshToken> => {
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdateAdmRefreshTokenArgs;

    processedData = await runHooks.beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.admRefreshToken.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'managerId',
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
        title: 'Adm refresh tokens update',
        entityTypeId: Entity.AdmRefreshToken,
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
      runHooks.afterUpdate(ctx, result as AdmRefreshToken),
    ]);

    return result as AdmRefreshToken;
  };

  const upsert = async (
    data: MutationUpdateAdmRefreshTokenArgs,
    byUser = false,
  ): Promise<AdmRefreshToken> => {
    const augmented = await augmentDataFromDb(data);

    let createData = byUser ? R.mergeDeepLeft(
      {},
      data,
    ) : data as StrictCreateAdmRefreshTokenArgs;
    let updateData = byUser ? augmented : {...augmented, ...data} as StrictUpdateAdmRefreshTokenArgs;

    const handledData = await runHooks.beforeUpsert(ctx, {createData, updateData});
    createData = handledData.createData;
    updateData = handledData.updateData;

    const result = await ctx.prisma.admRefreshToken.upsert({create: R.mergeDeepLeft(
      createData,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'managerId',
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
                'managerId',
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
    filter: AdmRefreshTokenFilter,
    data: MutationCreateAdmRefreshTokenArgs,
    byUser = false,
  ): Promise<AdmRefreshToken> => {
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
    params: MutationRemoveAdmRefreshTokenArgs,
  ): Promise<AdmRefreshToken> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.admRefreshToken.delete({where: {id: params.id}});

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Adm refresh tokens delete',
        entityTypeId: Entity.AdmRefreshToken,
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

  const baseMethods: BaseAdmRefreshTokensMethods = {
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

  const service: AdmRefreshTokensService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
