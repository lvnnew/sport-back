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

export type AutoDefinableUserKeys = never;
export type ForbidenForUserUserKeys = 'tenantId';
export type RequiredDbNotUserUserKeys = never;

export type AutodefinableUserPart = DefinedRecord<Pick<MutationCreateUserArgs, AutoDefinableUserKeys>>;

export type ReliableUserCreateUserInput =
  Omit<MutationCreateUserArgs, ForbidenForUserUserKeys>
  & AutodefinableUserPart;

export type AllowedUserForUserCreateInput = Omit<MutationCreateUserArgs, ForbidenForUserUserKeys>;

export type StrictCreateUserArgs = DefinedFieldsInRecord<MutationCreateUserArgs, RequiredDbNotUserUserKeys> & AutodefinableUserPart;
export type StrictUpdateUserArgs = DefinedFieldsInRecord<MutationUpdateUserArgs, RequiredDbNotUserUserKeys> & AutodefinableUserPart;

export type StrictCreateUserArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateUserArgs, AutoDefinableUserKeys>;

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
  createMany: (data: StrictCreateUserArgsWithoutAutoDefinable[], byUser?: boolean) =>
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
    ReliableUserCreateUserInput,
    MutationUpdateUserArgs,
    MutationRemoveUserArgs,
    StrictCreateUserArgs,
    StrictUpdateUserArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [];

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

  const getDefaultPart = async () => ({});

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
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findRequired = async (
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
    data: MutationCreateUserArgs,
    byUser = false,
  ): Promise<User> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedUserForUserCreateInput :
      data;

    // augment data by default fields
    const augmented = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

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
      runHooks.afterCreate(ctx, result as User),
    ]);

    return result as User;
  };

  const createMany = async (
    entries: StrictCreateUserArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData = clearedData.map(data => R.mergeLeft(
      data,
      defaultPart,
    ) as StrictCreateUserArgs);

    const result = await ctx.prisma.user.createMany({
      data: augmentedData.map(data => R.mergeDeepLeft(
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
    data: MutationUpdateUserArgs,
    byUser = false,
  ): Promise<User> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateUserArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.user.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
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
    data: MutationUpdateUserArgs,
    byUser = false,
  ): Promise<User> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateUserArgs = R.mergeLeft(cleared, augmentationBase);

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
    data: MutationCreateUserArgs,
    byUser = false,
  ): Promise<User> => {
    const cnt = await count({filter});

    if (cnt > 1) {
      throw new Error(`There is more then one entity (${cnt}) that fits filter "${JSON.stringify(filter)}"`);
    }

    // Compose object for augmentation
    const dbVersion = await findRequired({filter});
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateUserArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    if (cnt === 0) {
      return create(createData, false);
    } else {
      return update({...updateData, id: dbVersion.id}, false);
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
