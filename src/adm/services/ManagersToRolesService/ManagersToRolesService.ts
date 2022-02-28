import {
  ListMetadata,
  MutationCreateManagersToRoleArgs,
  MutationUpdateManagersToRoleArgs,
  MutationRemoveManagersToRoleArgs,
  QueryAllManagersToRolesArgs,
  Query_AllManagersToRolesMetaArgs,
  ManagersToRole,
  ManagersToRoleFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalManagersToRolesMethods, getAdditionalMethods} from './additionalMethods';
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

export interface BaseManagersToRolesMethods {
  get: (id: number) =>
    Promise<ManagersToRole | null>;
  all: (params?: QueryAllManagersToRolesArgs) =>
    Promise<ManagersToRole[]>;
  findOne: (params?: QueryAllManagersToRolesArgs) =>
    Promise<ManagersToRole | null>;
  count: (params?: Query_AllManagersToRolesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllManagersToRolesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateManagersToRoleArgs, byUser?: boolean) =>
    Promise<ManagersToRole>;
  createMany: (data: MutationCreateManagersToRoleArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateManagersToRoleArgs, byUser?: boolean) =>
    Promise<ManagersToRole>;
  upsert: (data: MutationUpdateManagersToRoleArgs, byUser?: boolean) =>
    Promise<ManagersToRole>;
  upsertAdvanced: (
    filter: ManagersToRoleFilter,
    data: MutationCreateManagersToRoleArgs,
    byUser?: boolean,
  ) =>
    Promise<ManagersToRole>;
  delete: (params: MutationRemoveManagersToRoleArgs) =>
    Promise<ManagersToRole>;
}

export type ManagersToRolesService = BaseManagersToRolesMethods & AdditionalManagersToRolesMethods;

export const getManagersToRolesService = (ctx: Context) => {
  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.managersToRole.findUnique,
    forbiddenForUserFields,
  );

  const get = async (
    id: number,
  ): Promise<ManagersToRole | null> => {
    return ctx.prisma.managersToRole.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllManagersToRolesArgs = {},
  ): Promise<ManagersToRole[]> => {
    return ctx.prisma.managersToRole.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<ManagersToRole[]>;
  };

  const findOne = async (
    params: QueryAllManagersToRolesArgs = {},
  ): Promise<ManagersToRole | null> => {
    return ctx.prisma.managersToRole.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllManagersToRolesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.managersToRole.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllManagersToRolesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateManagersToRoleArgs,
    byUser = false,
  ): Promise<ManagersToRole> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await beforeCreate(ctx, data);

    const createOperation = ctx.prisma.managersToRole.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'managerId',
                  'roleId',
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
      ctx.prisma.managersToRole.update({
        where: {id: result.id},
        data: {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'managerId',
                  'roleId',
                ], result),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ].join(' '),
        },
      }),
      ctx.prisma.auditLog.create({
        data: {
          date: new Date(),
          title: 'Managers to roles create',
          entityTypeId: Entity.ManagersToRole,
          entityId: result.id.toString(),
          actionTypeId: AuditLogActionType.Create,
          actionData: JSON.stringify(data),
          managerId: ctx.service('profile').getManagerId(),
          userId: ctx.service('profile').getUserId(),
        },
      }),
      afterCreate(ctx, result as ManagersToRole),
    ]);

    return result as ManagersToRole;
  };

  const createMany = async (
    entries: MutationCreateManagersToRoleArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.managersToRole.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'managerId',
                  'roleId',
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
    data: MutationUpdateManagersToRoleArgs,
    byUser = false,
  ): Promise<ManagersToRole> => {
    let processedData = data;

    if (byUser) {
      processedData = await augmentDataFromDb(processedData);
    }

    processedData = await beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.managersToRole.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'managerId',
                  'roleId',
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
        title: 'Managers to roles update',
        entityTypeId: Entity.ManagersToRole,
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
      afterUpdate(ctx, result as ManagersToRole),
    ]);

    return result as ManagersToRole;
  };

  const upsert = async (
    data: MutationUpdateManagersToRoleArgs,
    byUser = false,
  ): Promise<ManagersToRole> => {
    let processedDataToCreate = data;
    let processedDataToUpdate = data;

    if (byUser) {
      processedDataToCreate = R.mergeDeepLeft(
        {},
        processedDataToCreate,
      );

      processedDataToUpdate = await augmentDataFromDb(processedDataToUpdate);
    }

    const result = await ctx.prisma.managersToRole.upsert({create: R.mergeDeepLeft(
      processedDataToCreate,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'managerId',
                'roleId',
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
                'managerId',
                'roleId',
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
    filter: ManagersToRoleFilter,
    data: MutationCreateManagersToRoleArgs,
    byUser = false,
  ): Promise<ManagersToRole> => {
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
    params: MutationRemoveManagersToRoleArgs,
  ): Promise<ManagersToRole> => {
    const deleteOperation = ctx.prisma.managersToRole.delete({where: {id: params.id}});

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Managers to roles delete',
        entityTypeId: Entity.ManagersToRole,
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

  const baseMethods: BaseManagersToRolesMethods = {
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
