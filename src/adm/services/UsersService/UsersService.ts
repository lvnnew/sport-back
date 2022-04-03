import {
  ListMetadata,
  MutationCreateUserArgs,
  MutationUpdateUserArgs,
  MutationRemoveUserArgs,
  QueryAllUsersArgs,
  Query_AllUsersMetaArgs,
  User,
  UserFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalUsersMethods, getAdditionalMethods} from './additionalMethods';
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

export type StrictUpdateUserArgs = MutationUpdateUserArgs;
export type StrictCreateUserArgs = MutationCreateUserArgs;

export interface BaseUsersMethods {
  get: (id: number) =>
    Promise<User | null>;
  all: (params?: QueryAllUsersArgs) =>
    Promise<User[]>;
  findOne: (params?: QueryAllUsersArgs) =>
    Promise<User | null>;
  count: (params?: Query_AllUsersMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllUsersMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateUserArgs, byUser?: boolean) =>
    Promise<User>;
  createMany: (data: MutationCreateUserArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateUserArgs, byUser?: boolean) =>
    Promise<User>;
  upsert: (data: MutationUpdateUserArgs, byUser?: boolean) =>
    Promise<User>;
  upsertAdvanced: (
    filter: UserFilter,
    data: MutationCreateUserArgs,
    byUser?: boolean,
  ) =>
    Promise<User>;
  delete: (params: MutationRemoveUserArgs) =>
    Promise<User>;
}

export type UsersService = BaseUsersMethods
  & AdditionalUsersMethods
  & HooksAddType<
    User,
    QueryAllUsersArgs,
    MutationCreateUserArgs,
    MutationUpdateUserArgs,
    MutationRemoveUserArgs,
    StrictCreateUserArgs,
    StrictUpdateUserArgs
  >;

export const getUsersService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    User,
    QueryAllUsersArgs,
    MutationCreateUserArgs,
    MutationUpdateUserArgs,
    MutationRemoveUserArgs,
    StrictCreateUserArgs,
    StrictUpdateUserArgs
  >();

  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.user.findUnique,
    forbiddenForUserFields,
  );

  const all = async (
    params: QueryAllUsersArgs = {},
  ): Promise<User[]> => {
    return ctx.prisma.user.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<User[]>;
  };

  const findOne = async (
    params: QueryAllUsersArgs = {},
  ): Promise<User | null> => {
    return ctx.prisma.user.findFirst(toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}));
  };

  const get = async (
    id: number,
  ): Promise<User | null> => {
    return findOne({filter: {id}});
  };

  const count = async (
    params: Query_AllUsersMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.user.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllUsersMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateUserArgs,
    byUser = false,
  ): Promise<User> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await runHooks.beforeCreate(ctx, data);

    const createOperation = ctx.prisma.user.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'lastname',
                  'firstname',
                  'email',
                  'tenantId',
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
      ctx.prisma.user.update({
        where: {id: result.id},
        data: {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'lastname',
                  'firstname',
                  'email',
                  'tenantId',
                ], result),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ].join(' '),
        },
      }),
      ctx.prisma.auditLog.create({
        data: {
          date: new Date(),
          title: 'Users create',
          entityTypeId: Entity.User,
          entityId: result.id.toString(),
          actionTypeId: AuditLogActionType.Create,
          actionData: JSON.stringify(data),
          managerId: ctx.service('profile').getManagerId(),
          userId: ctx.service('profile').getUserId(),
        },
      }),
      runHooks.afterCreate(ctx, result as User),
    ]);

    return result as User;
  };

  const createMany = async (
    entries: MutationCreateUserArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.user.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'lastname',
                  'firstname',
                  'email',
                  'tenantId',
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
    data: MutationUpdateUserArgs,
    byUser = false,
  ): Promise<User> => {
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdateUserArgs;

    processedData = await runHooks.beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.user.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'lastname',
                  'firstname',
                  'email',
                  'tenantId',
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
        title: 'Users update',
        entityTypeId: Entity.User,
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
      runHooks.afterUpdate(ctx, result as User),
    ]);

    return result as User;
  };

  const upsert = async (
    data: MutationUpdateUserArgs,
    byUser = false,
  ): Promise<User> => {
    const augmented = await augmentDataFromDb(data);

    let createData = byUser ? R.mergeDeepLeft(
      {},
      data,
    ) : data as StrictCreateUserArgs;
    let updateData = byUser ? augmented : {...augmented, ...data} as StrictUpdateUserArgs;

    const handledData = await runHooks.beforeUpsert(ctx, {createData, updateData});
    createData = handledData.createData;
    updateData = handledData.updateData;

    const result = await ctx.prisma.user.upsert({create: R.mergeDeepLeft(
      createData,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
                'lastname',
                'firstname',
                'email',
                'tenantId',
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
                'lastname',
                'firstname',
                'email',
                'tenantId',
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
    filter: UserFilter,
    data: MutationCreateUserArgs,
    byUser = false,
  ): Promise<User> => {
    let processedDataToCreate = data;
    let processedDataToUpdate = data;

    if (byUser) {
      processedDataToCreate = R.mergeDeepLeft(
        {},
        processedDataToCreate,
      );

      processedDataToUpdate = R.omit(
        [
          'tenantId',
        ],
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
    params: MutationRemoveUserArgs,
  ): Promise<User> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.user.delete({where: {id: params.id}});

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Users delete',
        entityTypeId: Entity.User,
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

  const baseMethods: BaseUsersMethods = {
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

  const service: UsersService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
