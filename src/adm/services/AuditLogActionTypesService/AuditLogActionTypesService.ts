import {
  ListMetadata,
  MutationCreateAuditLogActionTypeArgs,
  MutationUpdateAuditLogActionTypeArgs,
  MutationRemoveAuditLogActionTypeArgs,
  QueryAllAuditLogActionTypesArgs,
  Query_AllAuditLogActionTypesMetaArgs,
  AuditLogActionType,
  AuditLogActionTypeFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAuditLogActionTypesMethods, getAdditionalMethods} from './additionalMethods';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {getHooksUtils, HooksAddType} from '../getHooksUtils';
import getAugmenterByDataFromDb from '../utils/getAugmenterByDataFromDb';
import * as R from 'ramda';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type StrictUpdateAuditLogActionTypeArgs = MutationUpdateAuditLogActionTypeArgs;
export type StrictCreateAuditLogActionTypeArgs = MutationCreateAuditLogActionTypeArgs;

export interface BaseAuditLogActionTypesMethods {
  get: (id: string) =>
    Promise<AuditLogActionType | null>;
  all: (params?: QueryAllAuditLogActionTypesArgs) =>
    Promise<AuditLogActionType[]>;
  findOne: (params?: QueryAllAuditLogActionTypesArgs) =>
    Promise<AuditLogActionType | null>;
  count: (params?: Query_AllAuditLogActionTypesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAuditLogActionTypesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAuditLogActionTypeArgs, byUser?: boolean) =>
    Promise<AuditLogActionType>;
  createMany: (data: MutationCreateAuditLogActionTypeArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAuditLogActionTypeArgs, byUser?: boolean) =>
    Promise<AuditLogActionType>;
  upsert: (data: MutationUpdateAuditLogActionTypeArgs, byUser?: boolean) =>
    Promise<AuditLogActionType>;
  upsertAdvanced: (
    filter: AuditLogActionTypeFilter,
    data: MutationCreateAuditLogActionTypeArgs,
    byUser?: boolean,
  ) =>
    Promise<AuditLogActionType>;
  delete: (params: MutationRemoveAuditLogActionTypeArgs) =>
    Promise<AuditLogActionType>;
}

export type AuditLogActionTypesService = BaseAuditLogActionTypesMethods
  & AdditionalAuditLogActionTypesMethods
  & HooksAddType<
    AuditLogActionType,
    QueryAllAuditLogActionTypesArgs,
    MutationCreateAuditLogActionTypeArgs,
    MutationUpdateAuditLogActionTypeArgs,
    MutationRemoveAuditLogActionTypeArgs,
    StrictCreateAuditLogActionTypeArgs,
    StrictUpdateAuditLogActionTypeArgs
  >;

export const getAuditLogActionTypesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    AuditLogActionType,
    QueryAllAuditLogActionTypesArgs,
    MutationCreateAuditLogActionTypeArgs,
    MutationUpdateAuditLogActionTypeArgs,
    MutationRemoveAuditLogActionTypeArgs,
    StrictCreateAuditLogActionTypeArgs,
    StrictUpdateAuditLogActionTypeArgs
  >();

  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.auditLogActionType.findUnique,
    forbiddenForUserFields,
  );

  const all = async (
    params: QueryAllAuditLogActionTypesArgs = {},
  ): Promise<AuditLogActionType[]> => {
    return ctx.prisma.auditLogActionType.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<AuditLogActionType[]>;
  };

  const findOne = async (
    params: QueryAllAuditLogActionTypesArgs = {},
  ): Promise<AuditLogActionType | null> => {
    return ctx.prisma.auditLogActionType.findFirst(toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}));
  };

  const get = async (
    id: string,
  ): Promise<AuditLogActionType | null> => {
    return findOne({filter: {id}});
  };

  const count = async (
    params: Query_AllAuditLogActionTypesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.auditLogActionType.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllAuditLogActionTypesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAuditLogActionTypeArgs,
    byUser = false,
  ): Promise<AuditLogActionType> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await runHooks.beforeCreate(ctx, data);

    const createOperation = ctx.prisma.auditLogActionType.create({
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
      ...(await runHooks.additionalOperationsOnCreate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
    // update search. earlier we does not have id
      ctx.prisma.auditLogActionType.update({
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
      runHooks.afterCreate(ctx, result as AuditLogActionType),
    ]);

    return result as AuditLogActionType;
  };

  const createMany = async (
    entries: MutationCreateAuditLogActionTypeArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.auditLogActionType.createMany({
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
    data: MutationUpdateAuditLogActionTypeArgs,
    byUser = false,
  ): Promise<AuditLogActionType> => {
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdateAuditLogActionTypeArgs;

    processedData = await runHooks.beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.auditLogActionType.update({
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
      ...(await runHooks.additionalOperationsOnUpdate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      runHooks.afterUpdate(ctx, result as AuditLogActionType),
    ]);

    return result as AuditLogActionType;
  };

  const upsert = async (
    data: MutationUpdateAuditLogActionTypeArgs,
    byUser = false,
  ): Promise<AuditLogActionType> => {
    const augmented = await augmentDataFromDb(data);

    let createData = byUser ? R.mergeDeepLeft(
      {},
      data,
    ) : data as StrictCreateAuditLogActionTypeArgs;
    let updateData = byUser ? augmented : {...augmented, ...data} as StrictUpdateAuditLogActionTypeArgs;

    const handledData = await runHooks.beforeUpsert(ctx, {createData, updateData});
    createData = handledData.createData;
    updateData = handledData.updateData;

    const result = await ctx.prisma.auditLogActionType.upsert({create: R.mergeDeepLeft(
      createData,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
              ], createData),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
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
                'title',
              ], updateData),
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
    filter: AuditLogActionTypeFilter,
    data: MutationCreateAuditLogActionTypeArgs,
    byUser = false,
  ): Promise<AuditLogActionType> => {
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
    params: MutationRemoveAuditLogActionTypeArgs,
  ): Promise<AuditLogActionType> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.auditLogActionType.delete({where: {id: params.id}});

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

  const baseMethods: BaseAuditLogActionTypesMethods = {
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

  const service: AuditLogActionTypesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
