import {
  ListMetadata,
  MutationCreateDelegationArgs,
  MutationUpdateDelegationArgs,
  MutationRemoveDelegationArgs,
  QueryAllDelegationsArgs,
  Query_AllDelegationsMetaArgs,
  Delegation,
  DelegationFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalDelegationsMethods, getAdditionalMethods} from './additionalMethods';
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

export type StrictUpdateDelegationArgs = MutationUpdateDelegationArgs;
export type StrictCreateDelegationArgs = MutationCreateDelegationArgs;

export interface BaseDelegationsMethods {
  get: (id: number) =>
    Promise<Delegation | null>;
  all: (params?: QueryAllDelegationsArgs) =>
    Promise<Delegation[]>;
  findOne: (params?: QueryAllDelegationsArgs) =>
    Promise<Delegation | null>;
  count: (params?: Query_AllDelegationsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllDelegationsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateDelegationArgs, byUser?: boolean) =>
    Promise<Delegation>;
  createMany: (data: MutationCreateDelegationArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateDelegationArgs, byUser?: boolean) =>
    Promise<Delegation>;
  upsert: (data: MutationUpdateDelegationArgs, byUser?: boolean) =>
    Promise<Delegation>;
  upsertAdvanced: (
    filter: DelegationFilter,
    data: MutationCreateDelegationArgs,
    byUser?: boolean,
  ) =>
    Promise<Delegation>;
  delete: (params: MutationRemoveDelegationArgs) =>
    Promise<Delegation>;
}

export type DelegationsService = BaseDelegationsMethods
  & AdditionalDelegationsMethods
  & HooksAddType<
    Delegation,
    QueryAllDelegationsArgs,
    MutationCreateDelegationArgs,
    MutationUpdateDelegationArgs,
    MutationRemoveDelegationArgs,
    StrictCreateDelegationArgs,
    StrictUpdateDelegationArgs
  >;

export const getDelegationsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    Delegation,
    QueryAllDelegationsArgs,
    MutationCreateDelegationArgs,
    MutationUpdateDelegationArgs,
    MutationRemoveDelegationArgs,
    StrictCreateDelegationArgs,
    StrictUpdateDelegationArgs
  >();

  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.delegation.findUnique,
    forbiddenForUserFields,
  );

  const all = async (
    params: QueryAllDelegationsArgs = {},
  ): Promise<Delegation[]> => {
    return ctx.prisma.delegation.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<Delegation[]>;
  };

  const findOne = async (
    params: QueryAllDelegationsArgs = {},
  ): Promise<Delegation | null> => {
    return ctx.prisma.delegation.findFirst(toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}));
  };

  const get = async (
    id: number,
  ): Promise<Delegation | null> => {
    return findOne({filter: {id}});
  };

  const count = async (
    params: Query_AllDelegationsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.delegation.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllDelegationsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateDelegationArgs,
    byUser = false,
  ): Promise<Delegation> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await runHooks.beforeCreate(ctx, data);

    const createOperation = ctx.prisma.delegation.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'fromId',
                  'toId',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'expiresAt',
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
      ctx.prisma.delegation.update({
        where: {id: result.id},
        data: {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'fromId',
                  'toId',
                ], result),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'expiresAt',
                ], result),
              )
              .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
          ].join(' '),
        },
      }),
      ctx.prisma.auditLog.create({
        data: {
          date: new Date(),
          title: 'Delegations create',
          entityTypeId: Entity.Delegation,
          entityId: result.id.toString(),
          actionTypeId: AuditLogActionType.Create,
          actionData: JSON.stringify(data),
          managerId: ctx.service('profile').getManagerId(),
          userId: ctx.service('profile').getUserId(),
        },
      }),
      runHooks.afterCreate(ctx, result as Delegation),
    ]);

    return result as Delegation;
  };

  const createMany = async (
    entries: MutationCreateDelegationArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.delegation.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'fromId',
                  'toId',
                ], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'expiresAt',
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
    data: MutationUpdateDelegationArgs,
    byUser = false,
  ): Promise<Delegation> => {
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdateDelegationArgs;

    processedData = await runHooks.beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.delegation.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'fromId',
                  'toId',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'expiresAt',
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
        title: 'Delegations update',
        entityTypeId: Entity.Delegation,
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
      runHooks.afterUpdate(ctx, result as Delegation),
    ]);

    return result as Delegation;
  };

  const upsert = async (
    data: MutationUpdateDelegationArgs,
    byUser = false,
  ): Promise<Delegation> => {
    const augmented = await augmentDataFromDb(data);

    let createData = byUser ? R.mergeDeepLeft(
      {},
      data,
    ) : data as StrictCreateDelegationArgs;
    let updateData = byUser ? augmented : {...augmented, ...data} as StrictUpdateDelegationArgs;

    const handledData = await runHooks.beforeUpsert(ctx, {createData, updateData});
    createData = handledData.createData;
    updateData = handledData.updateData;

    const result = await ctx.prisma.delegation.upsert({create: R.mergeDeepLeft(
      createData,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'fromId',
                'toId',
              ], createData),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'expiresAt',
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
                'fromId',
                'toId',
              ], updateData),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'expiresAt',
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
    filter: DelegationFilter,
    data: MutationCreateDelegationArgs,
    byUser = false,
  ): Promise<Delegation> => {
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
    params: MutationRemoveDelegationArgs,
  ): Promise<Delegation> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.delegation.delete({where: {id: params.id}});

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Delegations delete',
        entityTypeId: Entity.Delegation,
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

  const baseMethods: BaseDelegationsMethods = {
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

  const service: DelegationsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
