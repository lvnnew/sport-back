import {
  ListMetadata,
  MutationCreateManagerLoginArgs,
  MutationUpdateManagerLoginArgs,
  MutationRemoveManagerLoginArgs,
  QueryAllManagerLoginsArgs,
  Query_AllManagerLoginsMetaArgs,
  ManagerLogin,
  ManagerLoginFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalManagerLoginsMethods, getAdditionalMethods} from './additionalMethods';
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

export type StrictUpdateManagerLoginArgs = MutationUpdateManagerLoginArgs;
export type StrictCreateManagerLoginArgs = MutationCreateManagerLoginArgs;

export interface BaseManagerLoginsMethods {
  get: (id: number) =>
    Promise<ManagerLogin | null>;
  all: (params?: QueryAllManagerLoginsArgs) =>
    Promise<ManagerLogin[]>;
  findOne: (params?: QueryAllManagerLoginsArgs) =>
    Promise<ManagerLogin | null>;
  count: (params?: Query_AllManagerLoginsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllManagerLoginsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateManagerLoginArgs, byUser?: boolean) =>
    Promise<ManagerLogin>;
  createMany: (data: MutationCreateManagerLoginArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateManagerLoginArgs, byUser?: boolean) =>
    Promise<ManagerLogin>;
  upsert: (data: MutationUpdateManagerLoginArgs, byUser?: boolean) =>
    Promise<ManagerLogin>;
  upsertAdvanced: (
    filter: ManagerLoginFilter,
    data: MutationCreateManagerLoginArgs,
    byUser?: boolean,
  ) =>
    Promise<ManagerLogin>;
  delete: (params: MutationRemoveManagerLoginArgs) =>
    Promise<ManagerLogin>;
}

export type ManagerLoginsService = BaseManagerLoginsMethods & AdditionalManagerLoginsMethods;

export const getManagerLoginsService = (ctx: Context) => {
  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.managerLogin.findUnique,
    forbiddenForUserFields,
  );

  const get = async (
    id: number,
  ): Promise<ManagerLogin | null> => {
    return ctx.prisma.managerLogin.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllManagerLoginsArgs = {},
  ): Promise<ManagerLogin[]> => {
    return ctx.prisma.managerLogin.findMany(
      toPrismaRequest(params, {noId: false}),
    ) as unknown as Promise<ManagerLogin[]>;
  };

  const findOne = async (
    params: QueryAllManagerLoginsArgs = {},
  ): Promise<ManagerLogin | null> => {
    return ctx.prisma.managerLogin.findFirst(toPrismaRequest(params, {noId: false}));
  };

  const count = async (
    params: Query_AllManagerLoginsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.managerLogin.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllManagerLoginsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateManagerLoginArgs,
    byUser = false,
  ): Promise<ManagerLogin> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await beforeCreate(ctx, data);

    const createOperation = ctx.prisma.managerLogin.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'login',
                  'passwordHash',
                  'role',
                  'managerId',
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
      ctx.prisma.managerLogin.update({
        where: {id: result.id},
        data: {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'login',
                  'passwordHash',
                  'role',
                  'managerId',
                ], result),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ].join(' '),
        },
      }),
      ctx.prisma.auditLog.create({
        data: {
          date: new Date(),
          title: 'Manager logins create',
          entityTypeId: Entity.ManagerLogin,
          entityId: result.id.toString(),
          actionTypeId: AuditLogActionType.Create,
          actionData: JSON.stringify(data),
          managerId: ctx.service('profile').getManagerId(),
          userId: ctx.service('profile').getUserId(),
        },
      }),
      afterCreate(ctx, result as ManagerLogin),
    ]);

    return result as ManagerLogin;
  };

  const createMany = async (
    entries: MutationCreateManagerLoginArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.managerLogin.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'login',
                  'passwordHash',
                  'role',
                  'managerId',
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
    data: MutationUpdateManagerLoginArgs,
    byUser = false,
  ): Promise<ManagerLogin> => {
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdateManagerLoginArgs;

    processedData = await beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.managerLogin.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'login',
                  'passwordHash',
                  'role',
                  'managerId',
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
        title: 'Manager logins update',
        entityTypeId: Entity.ManagerLogin,
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
      afterUpdate(ctx, result as ManagerLogin),
    ]);

    return result as ManagerLogin;
  };

  const upsert = async (
    data: MutationUpdateManagerLoginArgs,
    byUser = false,
  ): Promise<ManagerLogin> => {
    const augmented = await augmentDataFromDb(data);

    const processedDataToUpdate = byUser ? augmented : {...augmented, ...data} as StrictUpdateManagerLoginArgs;
    const processedDataToCreate = byUser ? R.mergeDeepLeft(
      {},
      data,
    ) : data as StrictCreateManagerLoginArgs;

    const result = await ctx.prisma.managerLogin.upsert({create: R.mergeDeepLeft(
      processedDataToCreate,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'login',
                'passwordHash',
                'role',
                'managerId',
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
                'login',
                'passwordHash',
                'role',
                'managerId',
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
    filter: ManagerLoginFilter,
    data: MutationCreateManagerLoginArgs,
    byUser = false,
  ): Promise<ManagerLogin> => {
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
    params: MutationRemoveManagerLoginArgs,
  ): Promise<ManagerLogin> => {
    const deleteOperation = ctx.prisma.managerLogin.delete({where: {id: params.id}});

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Manager logins delete',
        entityTypeId: Entity.ManagerLogin,
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

  const baseMethods: BaseManagerLoginsMethods = {
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
