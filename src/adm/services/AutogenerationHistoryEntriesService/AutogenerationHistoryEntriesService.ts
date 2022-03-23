import {
  ListMetadata,
  MutationCreateAutogenerationHistoryEntryArgs,
  MutationUpdateAutogenerationHistoryEntryArgs,
  MutationRemoveAutogenerationHistoryEntryArgs,
  QueryAllAutogenerationHistoryEntriesArgs,
  Query_AllAutogenerationHistoryEntriesMetaArgs,
  AutogenerationHistoryEntry,
  AutogenerationHistoryEntryFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAutogenerationHistoryEntriesMethods, getAdditionalMethods} from './additionalMethods';
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

export type StrictUpdateAutogenerationHistoryEntryArgs = MutationUpdateAutogenerationHistoryEntryArgs;
export type StrictCreateAutogenerationHistoryEntryArgs = MutationCreateAutogenerationHistoryEntryArgs;

export interface BaseAutogenerationHistoryEntriesMethods {
  get: (id: number) =>
    Promise<AutogenerationHistoryEntry | null>;
  all: (params?: QueryAllAutogenerationHistoryEntriesArgs) =>
    Promise<AutogenerationHistoryEntry[]>;
  findOne: (params?: QueryAllAutogenerationHistoryEntriesArgs) =>
    Promise<AutogenerationHistoryEntry | null>;
  count: (params?: Query_AllAutogenerationHistoryEntriesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAutogenerationHistoryEntriesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAutogenerationHistoryEntryArgs, byUser?: boolean) =>
    Promise<AutogenerationHistoryEntry>;
  createMany: (data: MutationCreateAutogenerationHistoryEntryArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAutogenerationHistoryEntryArgs, byUser?: boolean) =>
    Promise<AutogenerationHistoryEntry>;
  upsert: (data: MutationUpdateAutogenerationHistoryEntryArgs, byUser?: boolean) =>
    Promise<AutogenerationHistoryEntry>;
  upsertAdvanced: (
    filter: AutogenerationHistoryEntryFilter,
    data: MutationCreateAutogenerationHistoryEntryArgs,
    byUser?: boolean,
  ) =>
    Promise<AutogenerationHistoryEntry>;
  delete: (params: MutationRemoveAutogenerationHistoryEntryArgs) =>
    Promise<AutogenerationHistoryEntry>;
}

export type AutogenerationHistoryEntriesService = BaseAutogenerationHistoryEntriesMethods
  & AdditionalAutogenerationHistoryEntriesMethods
  & HooksAddType<
    AutogenerationHistoryEntry,
    QueryAllAutogenerationHistoryEntriesArgs,
    MutationCreateAutogenerationHistoryEntryArgs,
    MutationUpdateAutogenerationHistoryEntryArgs,
    MutationRemoveAutogenerationHistoryEntryArgs,
    StrictCreateAutogenerationHistoryEntryArgs,
    StrictUpdateAutogenerationHistoryEntryArgs
  >;

export const getAutogenerationHistoryEntriesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    AutogenerationHistoryEntry,
    QueryAllAutogenerationHistoryEntriesArgs,
    MutationCreateAutogenerationHistoryEntryArgs,
    MutationUpdateAutogenerationHistoryEntryArgs,
    MutationRemoveAutogenerationHistoryEntryArgs,
    StrictCreateAutogenerationHistoryEntryArgs,
    StrictUpdateAutogenerationHistoryEntryArgs
  >();

  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.autogenerationHistoryEntry.findUnique,
    forbiddenForUserFields,
  );

  const all = async (
    params: QueryAllAutogenerationHistoryEntriesArgs = {},
  ): Promise<AutogenerationHistoryEntry[]> => {
    return ctx.prisma.autogenerationHistoryEntry.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<AutogenerationHistoryEntry[]>;
  };

  const findOne = async (
    params: QueryAllAutogenerationHistoryEntriesArgs = {},
  ): Promise<AutogenerationHistoryEntry | null> => {
    return ctx.prisma.autogenerationHistoryEntry.findFirst(toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}));
  };

  const get = async (
    id: number,
  ): Promise<AutogenerationHistoryEntry | null> => {
    return findOne({filter: {id}});
  };

  const count = async (
    params: Query_AllAutogenerationHistoryEntriesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.autogenerationHistoryEntry.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllAutogenerationHistoryEntriesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAutogenerationHistoryEntryArgs,
    byUser = false,
  ): Promise<AutogenerationHistoryEntry> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await runHooks.beforeCreate(ctx, data);

    const createOperation = ctx.prisma.autogenerationHistoryEntry.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'originalEntityType',
                  'originalEntityId',
                  'autogenerationRuleId',
                  'error',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'date',
                  'version',
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
      ctx.prisma.autogenerationHistoryEntry.update({
        where: {id: result.id},
        data: {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'originalEntityType',
                  'originalEntityId',
                  'autogenerationRuleId',
                  'error',
                ], result),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'date',
                  'version',
                ], result),
              )
              .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
          ].join(' '),
        },
      }),
      ctx.prisma.auditLog.create({
        data: {
          date: new Date(),
          title: 'Autogeneration history entries create',
          entityTypeId: Entity.AutogenerationHistoryEntry,
          entityId: result.id.toString(),
          actionTypeId: AuditLogActionType.Create,
          actionData: JSON.stringify(data),
          managerId: ctx.service('profile').getManagerId(),
          userId: ctx.service('profile').getUserId(),
        },
      }),
      runHooks.afterCreate(ctx, result as AutogenerationHistoryEntry),
    ]);

    return result as AutogenerationHistoryEntry;
  };

  const createMany = async (
    entries: MutationCreateAutogenerationHistoryEntryArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.autogenerationHistoryEntry.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'originalEntityType',
                  'originalEntityId',
                  'autogenerationRuleId',
                  'error',
                ], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'date',
                  'version',
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
    data: MutationUpdateAutogenerationHistoryEntryArgs,
    byUser = false,
  ): Promise<AutogenerationHistoryEntry> => {
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdateAutogenerationHistoryEntryArgs;

    processedData = await runHooks.beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.autogenerationHistoryEntry.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'originalEntityType',
                  'originalEntityId',
                  'autogenerationRuleId',
                  'error',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'date',
                  'version',
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
        title: 'Autogeneration history entries update',
        entityTypeId: Entity.AutogenerationHistoryEntry,
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
      runHooks.afterUpdate(ctx, result as AutogenerationHistoryEntry),
    ]);

    return result as AutogenerationHistoryEntry;
  };

  const upsert = async (
    data: MutationUpdateAutogenerationHistoryEntryArgs,
    byUser = false,
  ): Promise<AutogenerationHistoryEntry> => {
    const augmented = await augmentDataFromDb(data);

    let createData = byUser ? R.mergeDeepLeft(
      {},
      data,
    ) : data as StrictCreateAutogenerationHistoryEntryArgs;
    let updateData = byUser ? augmented : {...augmented, ...data} as StrictUpdateAutogenerationHistoryEntryArgs;

    const handledData = await runHooks.beforeUpsert(ctx, {createData, updateData});
    createData = handledData.createData;
    updateData = handledData.updateData;

    const result = await ctx.prisma.autogenerationHistoryEntry.upsert({create: R.mergeDeepLeft(
      createData,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'originalEntityType',
                'originalEntityId',
                'autogenerationRuleId',
                'error',
              ], createData),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'date',
                'version',
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
                'originalEntityType',
                'originalEntityId',
                'autogenerationRuleId',
                'error',
              ], updateData),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'date',
                'version',
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
    filter: AutogenerationHistoryEntryFilter,
    data: MutationCreateAutogenerationHistoryEntryArgs,
    byUser = false,
  ): Promise<AutogenerationHistoryEntry> => {
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
    params: MutationRemoveAutogenerationHistoryEntryArgs,
  ): Promise<AutogenerationHistoryEntry> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.autogenerationHistoryEntry.delete({where: {id: params.id}});

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Autogeneration history entries delete',
        entityTypeId: Entity.AutogenerationHistoryEntry,
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

  const baseMethods: BaseAutogenerationHistoryEntriesMethods = {
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

  const service: AutogenerationHistoryEntriesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
