import {
  ListMetadata,
  MutationCreatePermissionArgs,
  MutationUpdatePermissionArgs,
  MutationRemovePermissionArgs,
  QueryAllPermissionsArgs,
  Query_AllPermissionsMetaArgs,
  Permission,
  PermissionFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalPermissionsMethods, getAdditionalMethods} from './additionalMethods';
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

export type StrictUpdatePermissionArgs = MutationUpdatePermissionArgs;
export type StrictCreatePermissionArgs = MutationCreatePermissionArgs;

export interface BasePermissionsMethods {
  get: (id: string) =>
    Promise<Permission | null>;
  all: (params?: QueryAllPermissionsArgs) =>
    Promise<Permission[]>;
  findOne: (params?: QueryAllPermissionsArgs) =>
    Promise<Permission | null>;
  count: (params?: Query_AllPermissionsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllPermissionsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreatePermissionArgs, byUser?: boolean) =>
    Promise<Permission>;
  createMany: (data: MutationCreatePermissionArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdatePermissionArgs, byUser?: boolean) =>
    Promise<Permission>;
  upsert: (data: MutationUpdatePermissionArgs, byUser?: boolean) =>
    Promise<Permission>;
  upsertAdvanced: (
    filter: PermissionFilter,
    data: MutationCreatePermissionArgs,
    byUser?: boolean,
  ) =>
    Promise<Permission>;
  delete: (params: MutationRemovePermissionArgs) =>
    Promise<Permission>;
}

export type PermissionsService = BasePermissionsMethods
  & AdditionalPermissionsMethods
  & HooksAddType<
    Permission,
    QueryAllPermissionsArgs,
    MutationCreatePermissionArgs,
    MutationUpdatePermissionArgs,
    MutationRemovePermissionArgs,
    StrictCreatePermissionArgs,
    StrictUpdatePermissionArgs
  >;

export const getPermissionsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    Permission,
    QueryAllPermissionsArgs,
    MutationCreatePermissionArgs,
    MutationUpdatePermissionArgs,
    MutationRemovePermissionArgs,
    StrictCreatePermissionArgs,
    StrictUpdatePermissionArgs
  >();

  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.permission.findUnique,
    forbiddenForUserFields,
  );

  const all = async (
    params: QueryAllPermissionsArgs = {},
  ): Promise<Permission[]> => {
    return ctx.prisma.permission.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<Permission[]>;
  };

  const findOne = async (
    params: QueryAllPermissionsArgs = {},
  ): Promise<Permission | null> => {
    return ctx.prisma.permission.findFirst(toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}));
  };

  const get = async (
    id: string,
  ): Promise<Permission | null> => {
    return findOne({filter: {id}});
  };

  const count = async (
    params: Query_AllPermissionsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.permission.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllPermissionsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreatePermissionArgs,
    byUser = false,
  ): Promise<Permission> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await runHooks.beforeCreate(ctx, data);

    const createOperation = ctx.prisma.permission.create({
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
      ctx.prisma.permission.update({
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
      ctx.prisma.auditLog.create({
        data: {
          date: new Date(),
          title: 'Permissions create',
          entityTypeId: Entity.Permission,
          entityId: result.id.toString(),
          actionTypeId: AuditLogActionType.Create,
          actionData: JSON.stringify(data),
          managerId: ctx.service('profile').getManagerId(),
          userId: ctx.service('profile').getUserId(),
        },
      }),
      runHooks.afterCreate(ctx, result as Permission),
    ]);

    return result as Permission;
  };

  const createMany = async (
    entries: MutationCreatePermissionArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.permission.createMany({
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
    data: MutationUpdatePermissionArgs,
    byUser = false,
  ): Promise<Permission> => {
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdatePermissionArgs;

    processedData = await runHooks.beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.permission.update({
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

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Permissions update',
        entityTypeId: Entity.Permission,
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
      runHooks.afterUpdate(ctx, result as Permission),
    ]);

    return result as Permission;
  };

  const upsert = async (
    data: MutationUpdatePermissionArgs,
    byUser = false,
  ): Promise<Permission> => {
    const augmented = await augmentDataFromDb(data);

    let createData = byUser ? R.mergeDeepLeft(
      {},
      data,
    ) : data as StrictCreatePermissionArgs;
    let updateData = byUser ? augmented : {...augmented, ...data} as StrictUpdatePermissionArgs;

    const handledData = await runHooks.beforeUpsert(ctx, {createData, updateData});
    createData = handledData.createData;
    updateData = handledData.updateData;

    const result = await ctx.prisma.permission.upsert({create: R.mergeDeepLeft(
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
    filter: PermissionFilter,
    data: MutationCreatePermissionArgs,
    byUser = false,
  ): Promise<Permission> => {
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
    params: MutationRemovePermissionArgs,
  ): Promise<Permission> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.permission.delete({where: {id: params.id}});

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Permissions delete',
        entityTypeId: Entity.Permission,
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

  const baseMethods: BasePermissionsMethods = {
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

  const service: PermissionsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
