import {
  ListMetadata,
  MutationCreateAppRefreshTokenArgs,
  MutationUpdateAppRefreshTokenArgs,
  MutationRemoveAppRefreshTokenArgs,
  QueryAllAppRefreshTokensArgs,
  Query_AllAppRefreshTokensMetaArgs,
  AppRefreshToken,
  AppRefreshTokenFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAppRefreshTokensMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutoDefinableAppRefreshTokenKeys = never;
export type ForbidenForUserAppRefreshTokenKeys = never;
export type RequiredDbNotUserAppRefreshTokenKeys = never;

export type AutodefinableAppRefreshTokenPart = DefinedRecord<Pick<MutationCreateAppRefreshTokenArgs, AutoDefinableAppRefreshTokenKeys>>;

export type ReliableAppRefreshTokenCreateUserInput =
  Omit<MutationCreateAppRefreshTokenArgs, ForbidenForUserAppRefreshTokenKeys>
  & AutodefinableAppRefreshTokenPart;

export type AllowedAppRefreshTokenForUserCreateInput = Omit<MutationCreateAppRefreshTokenArgs, ForbidenForUserAppRefreshTokenKeys>;

export type StrictCreateAppRefreshTokenArgs = DefinedFieldsInRecord<MutationCreateAppRefreshTokenArgs, RequiredDbNotUserAppRefreshTokenKeys> & AutodefinableAppRefreshTokenPart;
export type StrictUpdateAppRefreshTokenArgs = DefinedFieldsInRecord<MutationUpdateAppRefreshTokenArgs, RequiredDbNotUserAppRefreshTokenKeys> & AutodefinableAppRefreshTokenPart;

export type StrictCreateAppRefreshTokenArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateAppRefreshTokenArgs, AutoDefinableAppRefreshTokenKeys>;

export interface BaseAppRefreshTokensMethods {
  get: (id: number) =>
    Promise<AppRefreshToken | null>;
  getRequired: (id: number) =>
    Promise<AppRefreshToken>;
  all: (params?: QueryAllAppRefreshTokensArgs) =>
    Promise<AppRefreshToken[]>;
  findOne: (params?: QueryAllAppRefreshTokensArgs) =>
    Promise<AppRefreshToken | null>;
  findOneRequired: (params?: QueryAllAppRefreshTokensArgs) =>
    Promise<AppRefreshToken>;
  count: (params?: Query_AllAppRefreshTokensMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAppRefreshTokensMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAppRefreshTokenArgs, byUser?: boolean) =>
    Promise<AppRefreshToken>;
  createMany: (data: StrictCreateAppRefreshTokenArgsWithoutAutoDefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAppRefreshTokenArgs, byUser?: boolean) =>
    Promise<AppRefreshToken>;
  upsert: (data: MutationUpdateAppRefreshTokenArgs, byUser?: boolean) =>
    Promise<AppRefreshToken>;
  upsertAdvanced: (
    filter: AppRefreshTokenFilter,
    data: MutationCreateAppRefreshTokenArgs,
    byUser?: boolean,
  ) =>
    Promise<AppRefreshToken>;
  delete: (params: MutationRemoveAppRefreshTokenArgs) =>
    Promise<AppRefreshToken>;
}

export type AppRefreshTokensService = BaseAppRefreshTokensMethods
  & AdditionalAppRefreshTokensMethods
  & HooksAddType<
    AppRefreshToken,
    QueryAllAppRefreshTokensArgs,
    ReliableAppRefreshTokenCreateUserInput,
    MutationUpdateAppRefreshTokenArgs,
    MutationRemoveAppRefreshTokenArgs,
    StrictCreateAppRefreshTokenArgs,
    StrictUpdateAppRefreshTokenArgs
  >;

const dateFieldsForSearch: string[] = [
  'create',
];

const otherFieldsForSearch: string[] = [
  'id',
  'userId',
  'token',
];

export const getAppRefreshTokensService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    AppRefreshToken,
    QueryAllAppRefreshTokensArgs,
    ReliableAppRefreshTokenCreateUserInput,
    MutationUpdateAppRefreshTokenArgs,
    MutationRemoveAppRefreshTokenArgs,
    StrictCreateAppRefreshTokenArgs,
    StrictUpdateAppRefreshTokenArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const getDefaultPart = async () => ({});

  const all = async (
    params: QueryAllAppRefreshTokensArgs = {},
  ): Promise<AppRefreshToken[]> => {
    return ctx.prisma.appRefreshToken.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<AppRefreshToken[]>;
  };

  const findOne = async (
    params: QueryAllAppRefreshTokensArgs = {},
  ): Promise<AppRefreshToken | null> => {
    return ctx.prisma.appRefreshToken.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findOneRequired = async (
    params: QueryAllAppRefreshTokensArgs = {},
  ): Promise<AppRefreshToken> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<AppRefreshToken | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<AppRefreshToken> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllAppRefreshTokensMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.appRefreshToken.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllAppRefreshTokensMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAppRefreshTokenArgs,
    byUser = false,
  ): Promise<AppRefreshToken> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedAppRefreshTokenForUserCreateInput :
      data;

    // augment data by default fields
    const augmented = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

    const createOperation = ctx.prisma.appRefreshToken.create({
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
      ctx.prisma.appRefreshToken.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.AppRefreshToken,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as AppRefreshToken),
    ]);

    return result as AppRefreshToken;
  };

  const createMany = async (
    entries: StrictCreateAppRefreshTokenArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData = clearedData.map(data => R.mergeLeft(
      data,
      defaultPart,
    ) as StrictCreateAppRefreshTokenArgs);

    const result = await ctx.prisma.appRefreshToken.createMany({
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
    data: MutationUpdateAppRefreshTokenArgs,
    byUser = false,
  ): Promise<AppRefreshToken> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAppRefreshTokenArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.appRefreshToken.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.AppRefreshToken,
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
      runHooks.afterUpdate(ctx, result as AppRefreshToken),
    ]);

    return result as AppRefreshToken;
  };

  const upsert = async (
    data: MutationUpdateAppRefreshTokenArgs,
    byUser = false,
  ): Promise<AppRefreshToken> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAppRefreshTokenArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.appRefreshToken.upsert({
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
    filter: AppRefreshTokenFilter,
    data: MutationCreateAppRefreshTokenArgs,
    byUser = false,
  ): Promise<AppRefreshToken> => {
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
    params: MutationRemoveAppRefreshTokenArgs,
  ): Promise<AppRefreshToken> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.appRefreshToken.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.AppRefreshToken,
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

  const baseMethods: BaseAppRefreshTokensMethods = {
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

  const service: AppRefreshTokensService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
