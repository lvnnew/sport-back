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
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {getHooksUtils, HooksAddType} from '../getHooksUtils';
import * as R from 'ramda';
import Entity from '../../../types/Entity';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type AutodefinableManagerLoginKeys = never;
export type ForbidenForUserManagerLoginKeys = never;
export type RequiredDbNotUserManagerLoginKeys = never;

export type AutodefinableManagerLoginPart = DefinedRecord<Pick<MutationCreateManagerLoginArgs, AutodefinableManagerLoginKeys>>;

export type ReliableManagerLoginCreateUserInput =
  Omit<MutationCreateManagerLoginArgs, ForbidenForUserManagerLoginKeys>
  & AutodefinableManagerLoginPart;

export type AllowedManagerLoginForUserCreateInput = Omit<MutationCreateManagerLoginArgs, ForbidenForUserManagerLoginKeys>;

export type StrictCreateManagerLoginArgs = DefinedFieldsInRecord<MutationCreateManagerLoginArgs, RequiredDbNotUserManagerLoginKeys> & AutodefinableManagerLoginPart;
export type StrictUpdateManagerLoginArgs = DefinedFieldsInRecord<MutationUpdateManagerLoginArgs, RequiredDbNotUserManagerLoginKeys> & AutodefinableManagerLoginPart;

export type StrictCreateManagerLoginArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateManagerLoginArgs, AutodefinableManagerLoginKeys>;
export type MutationCreateManagerLoginArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateManagerLoginArgs, AutodefinableManagerLoginKeys>;
export type MutationUpdateManagerLoginArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateManagerLoginArgs, AutodefinableManagerLoginKeys>;

export interface BaseManagerLoginsMethods {
  get: (id: number) =>
    Promise<ManagerLogin | null>;
  getRequired: (id: number) =>
    Promise<ManagerLogin>;
  all: (params?: QueryAllManagerLoginsArgs) =>
    Promise<ManagerLogin[]>;
  findOne: (params?: QueryAllManagerLoginsArgs) =>
    Promise<ManagerLogin | null>;
  findOneRequired: (params?: QueryAllManagerLoginsArgs) =>
    Promise<ManagerLogin>;
  count: (params?: Query_AllManagerLoginsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllManagerLoginsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateManagerLoginArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<ManagerLogin>;
  createMany: (data: StrictCreateManagerLoginArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateManagerLoginArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<ManagerLogin>;
  upsert: (data: MutationUpdateManagerLoginArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<ManagerLogin>;
  upsertAdvanced: (
    filter: ManagerLoginFilter,
    data: MutationCreateManagerLoginArgsWithoutAutodefinable,
    byUser?: boolean,
  ) =>
    Promise<ManagerLogin>;
  delete: (params: MutationRemoveManagerLoginArgs) =>
    Promise<ManagerLogin>;
}

export type ManagerLoginsService = BaseManagerLoginsMethods
  & AdditionalManagerLoginsMethods
  & HooksAddType<
    ManagerLogin,
    QueryAllManagerLoginsArgs,
    ReliableManagerLoginCreateUserInput,
    MutationUpdateManagerLoginArgs,
    MutationRemoveManagerLoginArgs,
    StrictCreateManagerLoginArgs,
    StrictUpdateManagerLoginArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [
  'id',
  'login',
  'passwordHash',
  'role',
  'managerId',
];

export const getManagerLoginsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    ManagerLogin,
    QueryAllManagerLoginsArgs,
    ReliableManagerLoginCreateUserInput,
    MutationUpdateManagerLoginArgs,
    MutationRemoveManagerLoginArgs,
    StrictCreateManagerLoginArgs,
    StrictUpdateManagerLoginArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableManagerLoginPart> => currentData as T;

  const all = async (
    params: QueryAllManagerLoginsArgs = {},
  ): Promise<ManagerLogin[]> => {
    return ctx.prisma.managerLogin.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<ManagerLogin[]>;
  };

  const findOne = async (
    params: QueryAllManagerLoginsArgs = {},
  ): Promise<ManagerLogin | null> => {
    return ctx.prisma.managerLogin.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findOneRequired = async (
    params: QueryAllManagerLoginsArgs = {},
  ): Promise<ManagerLogin> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<ManagerLogin | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<ManagerLogin> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllManagerLoginsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.managerLogin.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllManagerLoginsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateManagerLoginArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<ManagerLogin> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedManagerLoginForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableManagerLoginCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.managerLogin.create({
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
      ctx.prisma.managerLogin.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.ManagerLogin,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as ManagerLogin),
    ]);

    return result as ManagerLogin;
  };

  const createMany = async (
    entries: StrictCreateManagerLoginArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateManagerLoginArgs[];

    const result = await ctx.prisma.managerLogin.createMany({
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
    data: MutationUpdateManagerLoginArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<ManagerLogin> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateManagerLoginArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.managerLogin.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.ManagerLogin,
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
      runHooks.afterUpdate(ctx, result as ManagerLogin),
    ]);

    return result as ManagerLogin;
  };

  const upsert = async (
    data: MutationUpdateManagerLoginArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<ManagerLogin> => {
    // Get db version
    const dbVersion = await get(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateManagerLoginArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as ManagerLogin);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.managerLogin.upsert({
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
    filter: ManagerLoginFilter,
    data: MutationCreateManagerLoginArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<ManagerLogin> => {
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
    params: MutationRemoveManagerLoginArgs,
  ): Promise<ManagerLogin> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.managerLogin.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.ManagerLogin,
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

  const baseMethods: BaseManagerLoginsMethods = {
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

  const service: ManagerLoginsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
