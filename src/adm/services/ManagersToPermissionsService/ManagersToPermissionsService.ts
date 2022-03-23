import {
  ListMetadata,
  MutationCreateManagersToPermissionArgs,
  MutationUpdateManagersToPermissionArgs,
  MutationRemoveManagersToPermissionArgs,
  QueryAllManagersToPermissionsArgs,
  Query_AllManagersToPermissionsMetaArgs,
  ManagersToPermission,
  ManagersToPermissionFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalManagersToPermissionsMethods, getAdditionalMethods} from './additionalMethods';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {getHooksUtils, HooksAddType} from '../getHooksUtils';
import getAugmenterByDataFromDb from '../utils/getAugmenterByDataFromDb';
import * as R from 'ramda';
import AuditLogActionType from '../../../types/AuditLogActionType';
import Entity from '../../../types/Entity';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type StrictUpdateManagersToPermissionArgs = MutationUpdateManagersToPermissionArgs;
export type StrictCreateManagersToPermissionArgs = MutationCreateManagersToPermissionArgs;

export interface BaseManagersToPermissionsMethods {
  get: (id: number) =>
    Promise<ManagersToPermission | null>;
  all: (params?: QueryAllManagersToPermissionsArgs) =>
    Promise<ManagersToPermission[]>;
  findOne: (params?: QueryAllManagersToPermissionsArgs) =>
    Promise<ManagersToPermission | null>;
  count: (params?: Query_AllManagersToPermissionsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllManagersToPermissionsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateManagersToPermissionArgs, byUser?: boolean) =>
    Promise<ManagersToPermission>;
  createMany: (data: MutationCreateManagersToPermissionArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateManagersToPermissionArgs, byUser?: boolean) =>
    Promise<ManagersToPermission>;
  upsert: (data: MutationUpdateManagersToPermissionArgs, byUser?: boolean) =>
    Promise<ManagersToPermission>;
  upsertAdvanced: (
    filter: ManagersToPermissionFilter,
    data: MutationCreateManagersToPermissionArgs,
    byUser?: boolean,
  ) =>
    Promise<ManagersToPermission>;
  delete: (params: MutationRemoveManagersToPermissionArgs) =>
    Promise<ManagersToPermission>;
}

export type ManagersToPermissionsService = BaseManagersToPermissionsMethods
  & AdditionalManagersToPermissionsMethods
  & HooksAddType<
    ManagersToPermission,
    QueryAllManagersToPermissionsArgs,
    MutationCreateManagersToPermissionArgs,
    MutationUpdateManagersToPermissionArgs,
    MutationRemoveManagersToPermissionArgs,
    StrictCreateManagersToPermissionArgs,
    StrictUpdateManagersToPermissionArgs
  >;

export const getManagersToPermissionsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    ManagersToPermission,
    QueryAllManagersToPermissionsArgs,
    MutationCreateManagersToPermissionArgs,
    MutationUpdateManagersToPermissionArgs,
    MutationRemoveManagersToPermissionArgs,
    StrictCreateManagersToPermissionArgs,
    StrictUpdateManagersToPermissionArgs
  >();

  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.managersToPermission.findUnique,
    forbiddenForUserFields,
  );

  const all = async (
    params: QueryAllManagersToPermissionsArgs = {},
  ): Promise<ManagersToPermission[]> => {
    return ctx.prisma.managersToPermission.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<ManagersToPermission[]>;
  };

  const findOne = async (
    params: QueryAllManagersToPermissionsArgs = {},
  ): Promise<ManagersToPermission | null> => {
    return ctx.prisma.managersToPermission.findFirst(toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}));
  };

  const get = async (
    id: number,
  ): Promise<ManagersToPermission | null> => {
    return findOne({filter: {id}});
  };

  const count = async (
    params: Query_AllManagersToPermissionsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.managersToPermission.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllManagersToPermissionsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateManagersToPermissionArgs,
    byUser = false,
  ): Promise<ManagersToPermission> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await runHooks.beforeCreate(ctx, data);

    const createOperation = ctx.prisma.managersToPermission.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'managerId',
                  'permissionId',
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
      ctx.prisma.managersToPermission.update({
        where: {id: result.id},
        data: {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'managerId',
                  'permissionId',
                ], result),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ].join(' '),
        },
      }),
      ctx.prisma.auditLog.create({
        data: {
          date: new Date(),
          title: 'Managers to permissions create',
          entityTypeId: Entity.ManagersToPermission,
          entityId: result.id.toString(),
          actionTypeId: AuditLogActionType.Create,
          actionData: JSON.stringify(data),
          managerId: ctx.service('profile').getManagerId(),
          userId: ctx.service('profile').getUserId(),
        },
      }),
      runHooks.afterCreate(ctx, result as ManagersToPermission),
    ]);

    return result as ManagersToPermission;
  };

  const createMany = async (
    entries: MutationCreateManagersToPermissionArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.managersToPermission.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'managerId',
                  'permissionId',
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
    data: MutationUpdateManagersToPermissionArgs,
    byUser = false,
  ): Promise<ManagersToPermission> => {
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdateManagersToPermissionArgs;

    processedData = await runHooks.beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.managersToPermission.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'managerId',
                  'permissionId',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ].join(' '),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Managers to permissions update',
        entityTypeId: Entity.ManagersToPermission,
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
      runHooks.afterUpdate(ctx, result as ManagersToPermission),
    ]);

    return result as ManagersToPermission;
  };

  const upsert = async (
    data: MutationUpdateManagersToPermissionArgs,
    byUser = false,
  ): Promise<ManagersToPermission> => {
    const augmented = await augmentDataFromDb(data);

    let createData = byUser ? R.mergeDeepLeft(
      {},
      data,
    ) : data as StrictCreateManagersToPermissionArgs;
    let updateData = byUser ? augmented : {...augmented, ...data} as StrictUpdateManagersToPermissionArgs;

    const handledData = await runHooks.beforeUpsert(ctx, {createData, updateData});
    createData = handledData.createData;
    updateData = handledData.updateData;

    const result = await ctx.prisma.managersToPermission.upsert({create: R.mergeDeepLeft(
      createData,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'managerId',
                'permissionId',
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
                'managerId',
                'permissionId',
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
    filter: ManagersToPermissionFilter,
    data: MutationCreateManagersToPermissionArgs,
    byUser = false,
  ): Promise<ManagersToPermission> => {
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
    params: MutationRemoveManagersToPermissionArgs,
  ): Promise<ManagersToPermission> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.managersToPermission.delete({where: {id: params.id}});

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Managers to permissions delete',
        entityTypeId: Entity.ManagersToPermission,
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

  const baseMethods: BaseManagersToPermissionsMethods = {
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

  const service: ManagersToPermissionsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
