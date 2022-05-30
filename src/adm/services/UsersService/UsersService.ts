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
import * as R from 'ramda';
import Entity from '../../../types/Entity';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [
  'tenantId',
];

export type AutodefinableUserKeys = never;
export type ForbidenForUserUserKeys = 'tenantId';
export type RequiredDbNotUserUserKeys = never;

export type AutodefinableUserPart = DefinedRecord<Pick<MutationCreateUserArgs, AutodefinableUserKeys>>;

export type ReliableUserCreateUserInput =
  Omit<MutationCreateUserArgs, ForbidenForUserUserKeys>
  & AutodefinableUserPart;

export type AllowedUserForUserCreateInput = Omit<MutationCreateUserArgs, ForbidenForUserUserKeys>;

export type StrictCreateUserArgs = DefinedFieldsInRecord<MutationCreateUserArgs, RequiredDbNotUserUserKeys> & AutodefinableUserPart;
export type StrictUpdateUserArgs = DefinedFieldsInRecord<MutationUpdateUserArgs, RequiredDbNotUserUserKeys> & AutodefinableUserPart;

export type StrictCreateUserArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateUserArgs, AutodefinableUserKeys>;
export type MutationCreateUserArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateUserArgs, AutodefinableUserKeys>;
export type MutationUpdateUserArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateUserArgs, AutodefinableUserKeys>;

export interface BaseUsersMethods {
  get: (id: number) =>
    Promise<User | null>;
  getRequired: (id: number) =>
    Promise<User>;
  all: (params?: QueryAllUsersArgs) =>
    Promise<User[]>;
  findOne: (params?: QueryAllUsersArgs) =>
    Promise<User | null>;
  findOneRequired: (params?: QueryAllUsersArgs) =>
    Promise<User>;
  count: (params?: Query_AllUsersMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllUsersMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateUserArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<User>;
  createMany: (data: StrictCreateUserArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateUserArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<User>;
  upsert: (data: MutationUpdateUserArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<User>;
  upsertAdvanced: (
    filter: UserFilter,
    data: MutationCreateUserArgsWithoutAutodefinable,
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
    ReliableUserCreateUserInput,
    MutationUpdateUserArgs,
    MutationRemoveUserArgs,
    StrictCreateUserArgs,
    StrictUpdateUserArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [
  'id',
  'title',
  'lastname',
  'firstname',
  'email',
  'tenantId',
];

export const getUsersService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    User,
    QueryAllUsersArgs,
    ReliableUserCreateUserInput,
    MutationUpdateUserArgs,
    MutationRemoveUserArgs,
    StrictCreateUserArgs,
    StrictUpdateUserArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableUserPart> => currentData as T;

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
    return ctx.prisma.user.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params),
      {noId: false},
    ));
  };

  const findOneRequired = async (
    params: QueryAllUsersArgs = {},
  ): Promise<User> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<User | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<User> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
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
    data: MutationCreateUserArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<User> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedUserForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableUserCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.user.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: getSearchString(processedData),
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
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.User,
        entityId: result.id,
        actionData: data,
      }),
    ]);

    await runHooks.afterCreate(ctx, result as User);

    return result as User;
  };

  const createMany = async (
    entries: StrictCreateUserArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateUserArgs[];

    const result = await ctx.prisma.user.createMany({
      data: augmentedByDefault.map(data => R.mergeDeepLeft(
        data,
        {
          search: getSearchString(data),
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
    data: MutationUpdateUserArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<User> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateUserArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.user.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.User,
      entityId: data.id,
      actionData: data,
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
    data: MutationUpdateUserArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<User> => {
    // Get db version
    const dbVersion = await get(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateUserArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as User);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.user.upsert({
      create: createData,
      update: updateData,
      where: {id: data.id},
    });

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvanced = async (
    filter: UserFilter,
    data: MutationCreateUserArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<User> => {
    const cnt = await count({filter});

    if (cnt > 1) {
      throw new Error(`There is more then one entity (${cnt}) that fits filter "${JSON.stringify(filter)}"`);
    } else if (cnt === 0) {
      return create(data, byUser);
    } else {
      const dbVersion = await findOneRequired({filter});
      return update({...data, id: dbVersion.id}, byUser);
    }
  };

  const del = async (
    params: MutationRemoveUserArgs,
  ): Promise<User> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.user.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.User,
      entityId: params.id,
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
    getRequired,
    all,
    findOne,
    findOneRequired,
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
