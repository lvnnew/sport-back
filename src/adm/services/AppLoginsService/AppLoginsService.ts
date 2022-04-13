import {
  ListMetadata,
  MutationCreateAppLoginArgs,
  MutationUpdateAppLoginArgs,
  MutationRemoveAppLoginArgs,
  QueryAllAppLoginsArgs,
  Query_AllAppLoginsMetaArgs,
  AppLogin,
  AppLoginFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAppLoginsMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutoDefinableAppLoginKeys = never;
export type ForbidenForUserAppLoginKeys = never;
export type RequiredDbNotUserAppLoginKeys = never;

export type AutodefinableAppLoginPart = DefinedRecord<Pick<MutationCreateAppLoginArgs, AutoDefinableAppLoginKeys>>;

export type ReliableAppLoginCreateUserInput =
  Omit<MutationCreateAppLoginArgs, ForbidenForUserAppLoginKeys>
  & AutodefinableAppLoginPart;

export type AllowedAppLoginForUserCreateInput = Omit<MutationCreateAppLoginArgs, ForbidenForUserAppLoginKeys>;

export type StrictCreateAppLoginArgs = DefinedFieldsInRecord<MutationCreateAppLoginArgs, RequiredDbNotUserAppLoginKeys> & AutodefinableAppLoginPart;
export type StrictUpdateAppLoginArgs = DefinedFieldsInRecord<MutationUpdateAppLoginArgs, RequiredDbNotUserAppLoginKeys> & AutodefinableAppLoginPart;

export type StrictCreateAppLoginArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateAppLoginArgs, AutoDefinableAppLoginKeys>;

export interface BaseAppLoginsMethods {
  get: (id: number) =>
    Promise<AppLogin | null>;
  getRequired: (id: number) =>
    Promise<AppLogin>;
  all: (params?: QueryAllAppLoginsArgs) =>
    Promise<AppLogin[]>;
  findOne: (params?: QueryAllAppLoginsArgs) =>
    Promise<AppLogin | null>;
  findOneRequired: (params?: QueryAllAppLoginsArgs) =>
    Promise<AppLogin>;
  count: (params?: Query_AllAppLoginsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAppLoginsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAppLoginArgs, byUser?: boolean) =>
    Promise<AppLogin>;
  createMany: (data: StrictCreateAppLoginArgsWithoutAutoDefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAppLoginArgs, byUser?: boolean) =>
    Promise<AppLogin>;
  upsert: (data: MutationUpdateAppLoginArgs, byUser?: boolean) =>
    Promise<AppLogin>;
  upsertAdvanced: (
    filter: AppLoginFilter,
    data: MutationCreateAppLoginArgs,
    byUser?: boolean,
  ) =>
    Promise<AppLogin>;
  delete: (params: MutationRemoveAppLoginArgs) =>
    Promise<AppLogin>;
}

export type AppLoginsService = BaseAppLoginsMethods
  & AdditionalAppLoginsMethods
  & HooksAddType<
    AppLogin,
    QueryAllAppLoginsArgs,
    ReliableAppLoginCreateUserInput,
    MutationUpdateAppLoginArgs,
    MutationRemoveAppLoginArgs,
    StrictCreateAppLoginArgs,
    StrictUpdateAppLoginArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [];

export const getAppLoginsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    AppLogin,
    QueryAllAppLoginsArgs,
    ReliableAppLoginCreateUserInput,
    MutationUpdateAppLoginArgs,
    MutationRemoveAppLoginArgs,
    StrictCreateAppLoginArgs,
    StrictUpdateAppLoginArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const getDefaultPart = async () => ({});

  const all = async (
    params: QueryAllAppLoginsArgs = {},
  ): Promise<AppLogin[]> => {
    return ctx.prisma.appLogin.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<AppLogin[]>;
  };

  const findOne = async (
    params: QueryAllAppLoginsArgs = {},
  ): Promise<AppLogin | null> => {
    return ctx.prisma.appLogin.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findOneRequired = async (
    params: QueryAllAppLoginsArgs = {},
  ): Promise<AppLogin> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<AppLogin | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<AppLogin> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllAppLoginsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.appLogin.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllAppLoginsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAppLoginArgs,
    byUser = false,
  ): Promise<AppLogin> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedAppLoginForUserCreateInput :
      data;

    // augment data by default fields
    const augmented = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

    const createOperation = ctx.prisma.appLogin.create({
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
      ctx.prisma.appLogin.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.AppLogin,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as AppLogin),
    ]);

    return result as AppLogin;
  };

  const createMany = async (
    entries: StrictCreateAppLoginArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData = clearedData.map(data => R.mergeLeft(
      data,
      defaultPart,
    ) as StrictCreateAppLoginArgs);

    const result = await ctx.prisma.appLogin.createMany({
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
    data: MutationUpdateAppLoginArgs,
    byUser = false,
  ): Promise<AppLogin> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAppLoginArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.appLogin.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.AppLogin,
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
      runHooks.afterUpdate(ctx, result as AppLogin),
    ]);

    return result as AppLogin;
  };

  const upsert = async (
    data: MutationUpdateAppLoginArgs,
    byUser = false,
  ): Promise<AppLogin> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAppLoginArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.appLogin.upsert({
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
    filter: AppLoginFilter,
    data: MutationCreateAppLoginArgs,
    byUser = false,
  ): Promise<AppLogin> => {
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
    params: MutationRemoveAppLoginArgs,
  ): Promise<AppLogin> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.appLogin.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.AppLogin,
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

  const baseMethods: BaseAppLoginsMethods = {
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

  const service: AppLoginsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
