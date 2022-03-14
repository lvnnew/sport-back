import {
  ListMetadata,
  MutationCreateRolesToPermissionArgs,
  MutationUpdateRolesToPermissionArgs,
  MutationRemoveRolesToPermissionArgs,
  QueryAllRolesToPermissionsArgs,
  Query_AllRolesToPermissionsMetaArgs,
  RolesToPermission,
  RolesToPermissionFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalRolesToPermissionsMethods, getAdditionalMethods} from './additionalMethods';
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
import AuditLogActionType from '../../../types/AuditLogActionType';
import Entity from '../../../types/Entity';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type StrictUpdateRolesToPermissionArgs = MutationUpdateRolesToPermissionArgs;
export type StrictCreateRolesToPermissionArgs = MutationCreateRolesToPermissionArgs;

export interface BaseRolesToPermissionsMethods {
  get: (id: number) =>
    Promise<RolesToPermission | null>;
  all: (params?: QueryAllRolesToPermissionsArgs) =>
    Promise<RolesToPermission[]>;
  findOne: (params?: QueryAllRolesToPermissionsArgs) =>
    Promise<RolesToPermission | null>;
  count: (params?: Query_AllRolesToPermissionsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllRolesToPermissionsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateRolesToPermissionArgs, byUser?: boolean) =>
    Promise<RolesToPermission>;
  createMany: (data: MutationCreateRolesToPermissionArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateRolesToPermissionArgs, byUser?: boolean) =>
    Promise<RolesToPermission>;
  upsert: (data: MutationUpdateRolesToPermissionArgs, byUser?: boolean) =>
    Promise<RolesToPermission>;
  upsertAdvanced: (
    filter: RolesToPermissionFilter,
    data: MutationCreateRolesToPermissionArgs,
    byUser?: boolean,
  ) =>
    Promise<RolesToPermission>;
  delete: (params: MutationRemoveRolesToPermissionArgs) =>
    Promise<RolesToPermission>;
}

export type RolesToPermissionsService = BaseRolesToPermissionsMethods & AdditionalRolesToPermissionsMethods;

export const getRolesToPermissionsService = (ctx: Context) => {
  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.rolesToPermission.findUnique,
    forbiddenForUserFields,
  );

  const get = async (
    id: number,
  ): Promise<RolesToPermission | null> => {
    return ctx.prisma.rolesToPermission.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllRolesToPermissionsArgs = {},
  ): Promise<RolesToPermission[]> => {
    return ctx.prisma.rolesToPermission.findMany(
      toPrismaRequest(params, {noId: false}),
    ) as unknown as Promise<RolesToPermission[]>;
  };

  const findOne = async (
    params: QueryAllRolesToPermissionsArgs = {},
  ): Promise<RolesToPermission | null> => {
    return ctx.prisma.rolesToPermission.findFirst(toPrismaRequest(params, {noId: false}));
  };

  const count = async (
    params: Query_AllRolesToPermissionsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.rolesToPermission.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllRolesToPermissionsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateRolesToPermissionArgs,
    byUser = false,
  ): Promise<RolesToPermission> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await beforeCreate(ctx, data);

    const createOperation = ctx.prisma.rolesToPermission.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'roleId',
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
      ...(await additionalOperationsOnCreate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
    // update search. earlier we does not have id
      ctx.prisma.rolesToPermission.update({
        where: {id: result.id},
        data: {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'roleId',
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
          title: 'Roles to permissions create',
          entityTypeId: Entity.RolesToPermission,
          entityId: result.id.toString(),
          actionTypeId: AuditLogActionType.Create,
          actionData: JSON.stringify(data),
          managerId: ctx.service('profile').getManagerId(),
          userId: ctx.service('profile').getUserId(),
        },
      }),
      afterCreate(ctx, result as RolesToPermission),
    ]);

    return result as RolesToPermission;
  };

  const createMany = async (
    entries: MutationCreateRolesToPermissionArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.rolesToPermission.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'roleId',
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
    data: MutationUpdateRolesToPermissionArgs,
    byUser = false,
  ): Promise<RolesToPermission> => {
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdateRolesToPermissionArgs;

    processedData = await beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.rolesToPermission.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'roleId',
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
        title: 'Roles to permissions update',
        entityTypeId: Entity.RolesToPermission,
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
      ...(await additionalOperationsOnUpdate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      afterUpdate(ctx, result as RolesToPermission),
    ]);

    return result as RolesToPermission;
  };

  const upsert = async (
    data: MutationUpdateRolesToPermissionArgs,
    byUser = false,
  ): Promise<RolesToPermission> => {
    const augmented = await augmentDataFromDb(data);

    const processedDataToUpdate = byUser ? augmented : {...augmented, ...data} as StrictUpdateRolesToPermissionArgs;
    const processedDataToCreate = byUser ? R.mergeDeepLeft(
      {},
      data,
    ) : data as StrictCreateRolesToPermissionArgs;

    const result = await ctx.prisma.rolesToPermission.upsert({create: R.mergeDeepLeft(
      processedDataToCreate,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'roleId',
                'permissionId',
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
                'roleId',
                'permissionId',
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
    filter: RolesToPermissionFilter,
    data: MutationCreateRolesToPermissionArgs,
    byUser = false,
  ): Promise<RolesToPermission> => {
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
    params: MutationRemoveRolesToPermissionArgs,
  ): Promise<RolesToPermission> => {
    const deleteOperation = ctx.prisma.rolesToPermission.delete({where: {id: params.id}});

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Roles to permissions delete',
        entityTypeId: Entity.RolesToPermission,
        entityId: params.id.toString(),
        actionTypeId: AuditLogActionType.Delete,
        managerId: ctx.service('profile').getManagerId(),
        userId: ctx.service('profile').getUserId(),
      },
    });

    const operations = [
      deleteOperation,
      auditOperation,
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

  const baseMethods: BaseRolesToPermissionsMethods = {
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
