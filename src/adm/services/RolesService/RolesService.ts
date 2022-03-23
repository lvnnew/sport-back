import {
  ListMetadata,
  MutationCreateRoleArgs,
  MutationUpdateRoleArgs,
  MutationRemoveRoleArgs,
  QueryAllRolesArgs,
  Query_AllRolesMetaArgs,
  Role,
  RoleFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalRolesMethods, getAdditionalMethods} from './additionalMethods';
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

export type StrictUpdateRoleArgs = MutationUpdateRoleArgs;
export type StrictCreateRoleArgs = MutationCreateRoleArgs;

export interface BaseRolesMethods {
  get: (id: string) =>
    Promise<Role | null>;
  all: (params?: QueryAllRolesArgs) =>
    Promise<Role[]>;
  findOne: (params?: QueryAllRolesArgs) =>
    Promise<Role | null>;
  count: (params?: Query_AllRolesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllRolesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateRoleArgs, byUser?: boolean) =>
    Promise<Role>;
  createMany: (data: MutationCreateRoleArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateRoleArgs, byUser?: boolean) =>
    Promise<Role>;
  upsert: (data: MutationUpdateRoleArgs, byUser?: boolean) =>
    Promise<Role>;
  upsertAdvanced: (
    filter: RoleFilter,
    data: MutationCreateRoleArgs,
    byUser?: boolean,
  ) =>
    Promise<Role>;
  delete: (params: MutationRemoveRoleArgs) =>
    Promise<Role>;
}

export type RolesService = BaseRolesMethods
  & AdditionalRolesMethods
  & HooksAddType<
    Role,
    QueryAllRolesArgs,
    MutationCreateRoleArgs,
    MutationUpdateRoleArgs,
    MutationRemoveRoleArgs,
    StrictCreateRoleArgs,
    StrictUpdateRoleArgs
  >;

export const getRolesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    Role,
    QueryAllRolesArgs,
    MutationCreateRoleArgs,
    MutationUpdateRoleArgs,
    MutationRemoveRoleArgs,
    StrictCreateRoleArgs,
    StrictUpdateRoleArgs
  >();

  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.role.findUnique,
    forbiddenForUserFields,
  );

  const all = async (
    params: QueryAllRolesArgs = {},
  ): Promise<Role[]> => {
    return ctx.prisma.role.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<Role[]>;
  };

  const findOne = async (
    params: QueryAllRolesArgs = {},
  ): Promise<Role | null> => {
    return ctx.prisma.role.findFirst(toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}));
  };

  const get = async (
    id: string,
  ): Promise<Role | null> => {
    return findOne({filter: {id}});
  };

  const count = async (
    params: Query_AllRolesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.role.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllRolesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateRoleArgs,
    byUser = false,
  ): Promise<Role> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await runHooks.beforeCreate(ctx, data);

    const createOperation = ctx.prisma.role.create({
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
      ctx.prisma.role.update({
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
          title: 'Roles create',
          entityTypeId: Entity.Role,
          entityId: result.id.toString(),
          actionTypeId: AuditLogActionType.Create,
          actionData: JSON.stringify(data),
          managerId: ctx.service('profile').getManagerId(),
          userId: ctx.service('profile').getUserId(),
        },
      }),
      runHooks.afterCreate(ctx, result as Role),
    ]);

    return result as Role;
  };

  const createMany = async (
    entries: MutationCreateRoleArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.role.createMany({
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
    data: MutationUpdateRoleArgs,
    byUser = false,
  ): Promise<Role> => {
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdateRoleArgs;

    processedData = await runHooks.beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.role.update({
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
        title: 'Roles update',
        entityTypeId: Entity.Role,
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
      runHooks.afterUpdate(ctx, result as Role),
    ]);

    return result as Role;
  };

  const upsert = async (
    data: MutationUpdateRoleArgs,
    byUser = false,
  ): Promise<Role> => {
    const augmented = await augmentDataFromDb(data);

    let createData = byUser ? R.mergeDeepLeft(
      {},
      data,
    ) : data as StrictCreateRoleArgs;
    let updateData = byUser ? augmented : {...augmented, ...data} as StrictUpdateRoleArgs;

    const handledData = await runHooks.beforeUpsert(ctx, {createData, updateData});
    createData = handledData.createData;
    updateData = handledData.updateData;

    const result = await ctx.prisma.role.upsert({create: R.mergeDeepLeft(
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
    filter: RoleFilter,
    data: MutationCreateRoleArgs,
    byUser = false,
  ): Promise<Role> => {
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
    params: MutationRemoveRoleArgs,
  ): Promise<Role> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.role.delete({where: {id: params.id}});

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Roles delete',
        entityTypeId: Entity.Role,
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

  const baseMethods: BaseRolesMethods = {
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

  const service: RolesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
