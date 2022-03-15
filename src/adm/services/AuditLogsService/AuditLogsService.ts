import {
  ListMetadata,
  MutationCreateAuditLogArgs,
  MutationUpdateAuditLogArgs,
  MutationRemoveAuditLogArgs,
  QueryAllAuditLogsArgs,
  Query_AllAuditLogsMetaArgs,
  AuditLog,
  AuditLogFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAuditLogsMethods, getAdditionalMethods} from './additionalMethods';
import {additionalOperationsOnCreate} from './hooks/additionalOperationsOnCreate';
import {additionalOperationsOnUpdate} from './hooks/additionalOperationsOnUpdate';
import {additionalOperationsOnDelete} from './hooks/additionalOperationsOnDelete';
import {beforeCreate} from './hooks/beforeCreate';
import {beforeUpdate} from './hooks/beforeUpdate';
import {afterCreate} from './hooks/afterCreate';
import {afterUpdate} from './hooks/afterUpdate';
import {afterDelete} from './hooks/afterDelete';
import {beforeDelete} from './hooks/beforeDelete';
import {beforeUpsert} from './hooks/beforeUpsert';
import {changeListFilter} from './hooks/changeListFilter';
import getAugmenterByDataFromDb from '../utils/getAugmenterByDataFromDb';
import * as R from 'ramda';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type StrictUpdateAuditLogArgs = MutationUpdateAuditLogArgs;
export type StrictCreateAuditLogArgs = MutationCreateAuditLogArgs;

export interface BaseAuditLogsMethods {
  get: (id: number) =>
    Promise<AuditLog | null>;
  all: (params?: QueryAllAuditLogsArgs) =>
    Promise<AuditLog[]>;
  findOne: (params?: QueryAllAuditLogsArgs) =>
    Promise<AuditLog | null>;
  count: (params?: Query_AllAuditLogsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAuditLogsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAuditLogArgs, byUser?: boolean) =>
    Promise<AuditLog>;
  createMany: (data: MutationCreateAuditLogArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAuditLogArgs, byUser?: boolean) =>
    Promise<AuditLog>;
  upsert: (data: MutationUpdateAuditLogArgs, byUser?: boolean) =>
    Promise<AuditLog>;
  upsertAdvanced: (
    filter: AuditLogFilter,
    data: MutationCreateAuditLogArgs,
    byUser?: boolean,
  ) =>
    Promise<AuditLog>;
  delete: (params: MutationRemoveAuditLogArgs) =>
    Promise<AuditLog>;
}

export type AuditLogsService = BaseAuditLogsMethods & AdditionalAuditLogsMethods;

export const getAuditLogsService = (ctx: Context) => {
  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.auditLog.findUnique,
    forbiddenForUserFields,
  );

  const all = async (
    params: QueryAllAuditLogsArgs = {},
  ): Promise<AuditLog[]> => {
    return ctx.prisma.auditLog.findMany(
      toPrismaRequest(await changeListFilter(params, ctx), {noId: false}),
    ) as unknown as Promise<AuditLog[]>;
  };

  const findOne = async (
    params: QueryAllAuditLogsArgs = {},
  ): Promise<AuditLog | null> => {
    return ctx.prisma.auditLog.findFirst(toPrismaRequest(await changeListFilter(params, ctx), {noId: false}));
  };

  const get = async (
    id: number,
  ): Promise<AuditLog | null> => {
    return findOne({filter: {id}});
  };

  const count = async (
    params: Query_AllAuditLogsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.auditLog.count(toPrismaTotalRequest(await changeListFilter(params, ctx)));
  };

  const meta = async (
    params: Query_AllAuditLogsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAuditLogArgs,
    byUser = false,
  ): Promise<AuditLog> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await beforeCreate(ctx, data);

    const createOperation = ctx.prisma.auditLog.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'entityTypeId',
                  'entityId',
                  'actionTypeId',
                  'managerId',
                  'userId',
                  'foreignEntityType',
                  'foreignEntityId',
                  'actionData',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'date',
                ], processedData),
              )
              .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
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
      ctx.prisma.auditLog.update({
        where: {id: result.id},
        data: {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'entityTypeId',
                  'entityId',
                  'actionTypeId',
                  'managerId',
                  'userId',
                  'foreignEntityType',
                  'foreignEntityId',
                  'actionData',
                ], result),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'date',
                ], result),
              )
              .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
          ].join(' '),
        },
      }),
      afterCreate(ctx, result as AuditLog),
    ]);

    return result as AuditLog;
  };

  const createMany = async (
    entries: MutationCreateAuditLogArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.auditLog.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'entityTypeId',
                  'entityId',
                  'actionTypeId',
                  'managerId',
                  'userId',
                  'foreignEntityType',
                  'foreignEntityId',
                  'actionData',
                ], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'date',
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
    data: MutationUpdateAuditLogArgs,
    byUser = false,
  ): Promise<AuditLog> => {
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdateAuditLogArgs;

    processedData = await beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.auditLog.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'entityTypeId',
                  'entityId',
                  'actionTypeId',
                  'managerId',
                  'userId',
                  'foreignEntityType',
                  'foreignEntityId',
                  'actionData',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'date',
                ], processedData),
              )
              .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
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
      afterUpdate(ctx, result as AuditLog),
    ]);

    return result as AuditLog;
  };

  const upsert = async (
    data: MutationUpdateAuditLogArgs,
    byUser = false,
  ): Promise<AuditLog> => {
    const augmented = await augmentDataFromDb(data);

    const processedDataToUpdate = byUser ? augmented : {...augmented, ...data} as StrictUpdateAuditLogArgs;
    const processedDataToCreate = byUser ? R.mergeDeepLeft(
      {},
      data,
    ) : data as StrictCreateAuditLogArgs;

    const {createData, updateData} = await beforeUpsert(ctx, processedDataToCreate, processedDataToUpdate);

    const result = await ctx.prisma.auditLog.upsert({create: R.mergeDeepLeft(
      createData,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
                'entityTypeId',
                'entityId',
                'actionTypeId',
                'managerId',
                'userId',
                'foreignEntityType',
                'foreignEntityId',
                'actionData',
              ], createData),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'date',
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
                'title',
                'entityTypeId',
                'entityId',
                'actionTypeId',
                'managerId',
                'userId',
                'foreignEntityType',
                'foreignEntityId',
                'actionData',
              ], updateData),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'date',
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
    filter: AuditLogFilter,
    data: MutationCreateAuditLogArgs,
    byUser = false,
  ): Promise<AuditLog> => {
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
    params: MutationRemoveAuditLogArgs,
  ): Promise<AuditLog> => {
    await beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.auditLog.delete({where: {id: params.id}});

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

  const baseMethods: BaseAuditLogsMethods = {
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
