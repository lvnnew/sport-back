import {
  ListMetadata,
  MutationCreateTenantArgs,
  MutationUpdateTenantArgs,
  MutationRemoveTenantArgs,
  QueryAllTenantsArgs,
  Query_AllTenantsMetaArgs,
  Tenant,
  TenantFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalTenantsMethods, getAdditionalMethods} from './additionalMethods';
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
import AuditLogActionType from '../../../types/AuditLogActionType';
import Entity from '../../../types/Entity';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type StrictUpdateTenantArgs = MutationUpdateTenantArgs;
export type StrictCreateTenantArgs = MutationCreateTenantArgs;

export interface BaseTenantsMethods {
  get: (id: number) =>
    Promise<Tenant | null>;
  all: (params?: QueryAllTenantsArgs) =>
    Promise<Tenant[]>;
  findOne: (params?: QueryAllTenantsArgs) =>
    Promise<Tenant | null>;
  count: (params?: Query_AllTenantsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllTenantsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateTenantArgs, byUser?: boolean) =>
    Promise<Tenant>;
  createMany: (data: MutationCreateTenantArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateTenantArgs, byUser?: boolean) =>
    Promise<Tenant>;
  upsert: (data: MutationUpdateTenantArgs, byUser?: boolean) =>
    Promise<Tenant>;
  upsertAdvanced: (
    filter: TenantFilter,
    data: MutationCreateTenantArgs,
    byUser?: boolean,
  ) =>
    Promise<Tenant>;
  delete: (params: MutationRemoveTenantArgs) =>
    Promise<Tenant>;
}

export type TenantsService = BaseTenantsMethods & AdditionalTenantsMethods;

export const getTenantsService = (ctx: Context) => {
  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.tenant.findUnique,
    forbiddenForUserFields,
  );

  const all = async (
    params: QueryAllTenantsArgs = {},
  ): Promise<Tenant[]> => {
    return ctx.prisma.tenant.findMany(
      toPrismaRequest(await changeListFilter(params, ctx), {noId: false}),
    ) as unknown as Promise<Tenant[]>;
  };

  const findOne = async (
    params: QueryAllTenantsArgs = {},
  ): Promise<Tenant | null> => {
    return ctx.prisma.tenant.findFirst(toPrismaRequest(await changeListFilter(params, ctx), {noId: false}));
  };

  const get = async (
    id: number,
  ): Promise<Tenant | null> => {
    return findOne({filter: {id}});
  };

  const count = async (
    params: Query_AllTenantsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.tenant.count(toPrismaTotalRequest(await changeListFilter(params, ctx)));
  };

  const meta = async (
    params: Query_AllTenantsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateTenantArgs,
    byUser = false,
  ): Promise<Tenant> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await beforeCreate(ctx, data);

    const createOperation = ctx.prisma.tenant.create({
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
      ...(await additionalOperationsOnCreate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
    // update search. earlier we does not have id
      ctx.prisma.tenant.update({
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
          title: 'Tenants create',
          entityTypeId: Entity.Tenant,
          entityId: result.id.toString(),
          actionTypeId: AuditLogActionType.Create,
          actionData: JSON.stringify(data),
          managerId: ctx.service('profile').getManagerId(),
          userId: ctx.service('profile').getUserId(),
        },
      }),
      afterCreate(ctx, result as Tenant),
    ]);

    return result as Tenant;
  };

  const createMany = async (
    entries: MutationCreateTenantArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.tenant.createMany({
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
    data: MutationUpdateTenantArgs,
    byUser = false,
  ): Promise<Tenant> => {
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdateTenantArgs;

    processedData = await beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.tenant.update({
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
        title: 'Tenants update',
        entityTypeId: Entity.Tenant,
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
      afterUpdate(ctx, result as Tenant),
    ]);

    return result as Tenant;
  };

  const upsert = async (
    data: MutationUpdateTenantArgs,
    byUser = false,
  ): Promise<Tenant> => {
    const augmented = await augmentDataFromDb(data);

    const processedDataToUpdate = byUser ? augmented : {...augmented, ...data} as StrictUpdateTenantArgs;
    const processedDataToCreate = byUser ? R.mergeDeepLeft(
      {},
      data,
    ) : data as StrictCreateTenantArgs;

    const {createData, updateData} = await beforeUpsert(ctx, processedDataToCreate, processedDataToUpdate);

    const result = await ctx.prisma.tenant.upsert({create: R.mergeDeepLeft(
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
    filter: TenantFilter,
    data: MutationCreateTenantArgs,
    byUser = false,
  ): Promise<Tenant> => {
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
    params: MutationRemoveTenantArgs,
  ): Promise<Tenant> => {
    await beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.tenant.delete({where: {id: params.id}});

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Tenants delete',
        entityTypeId: Entity.Tenant,
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

  const baseMethods: BaseTenantsMethods = {
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
