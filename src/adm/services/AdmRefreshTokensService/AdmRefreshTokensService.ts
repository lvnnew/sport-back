import {
  ListMetadata,
  MutationCreateAdmRefreshTokenArgs,
  MutationUpdateAdmRefreshTokenArgs,
  MutationRemoveAdmRefreshTokenArgs,
  QueryAllAdmRefreshTokensArgs,
  Query_AllAdmRefreshTokensMetaArgs,
  AdmRefreshToken,
  AdmRefreshTokenFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAdmRefreshTokensMethods, getAdditionalMethods} from './additionalMethods';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {getHooksUtils, HooksAddType} from '../getHooksUtils';
import * as R from 'ramda';
import Entity from '../../../types/Entity';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {DefinedFieldsInRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type AutoDefinableAdmRefreshTokenKeys = never;
export type AutoDefinableAdmRefreshTokenPart = MutationCreateAdmRefreshTokenArgs;
export type MutationCreateAdmRefreshTokenArgsWithAutoDefinable = AutoDefinableAdmRefreshTokenPart & MutationCreateAdmRefreshTokenArgs;
export type MutationCreateAdmRefreshTokenArgsWithoutAutoDefinable = Omit<MutationCreateAdmRefreshTokenArgs, AutoDefinableAdmRefreshTokenKeys>;

export type StrictUpdateAdmRefreshTokenArgs = DefinedFieldsInRecord<MutationUpdateAdmRefreshTokenArgs, AutoDefinableAdmRefreshTokenKeys>;
export type StrictCreateAdmRefreshTokenArgs = DefinedFieldsInRecord<MutationCreateAdmRefreshTokenArgs, AutoDefinableAdmRefreshTokenKeys>;

export type StrictCreateAdmRefreshTokenArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateAdmRefreshTokenArgs, AutoDefinableAdmRefreshTokenKeys>;

export interface BaseAdmRefreshTokensMethods {
  get: (id: number) =>
    Promise<AdmRefreshToken | null>;
  all: (params?: QueryAllAdmRefreshTokensArgs) =>
    Promise<AdmRefreshToken[]>;
  findOne: (params?: QueryAllAdmRefreshTokensArgs) =>
    Promise<AdmRefreshToken | null>;
  count: (params?: Query_AllAdmRefreshTokensMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAdmRefreshTokensMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAdmRefreshTokenArgs, byUser?: boolean) =>
    Promise<AdmRefreshToken>;
  createMany: (data: StrictCreateAdmRefreshTokenArgsWithoutAutoDefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAdmRefreshTokenArgs, byUser?: boolean) =>
    Promise<AdmRefreshToken>;
  upsert: (data: MutationUpdateAdmRefreshTokenArgs, byUser?: boolean) =>
    Promise<AdmRefreshToken>;
  upsertAdvanced: (
    filter: AdmRefreshTokenFilter,
    data: MutationCreateAdmRefreshTokenArgs,
    byUser?: boolean,
  ) =>
    Promise<AdmRefreshToken>;
  delete: (params: MutationRemoveAdmRefreshTokenArgs) =>
    Promise<AdmRefreshToken>;
}

export type AdmRefreshTokensService = BaseAdmRefreshTokensMethods
  & AdditionalAdmRefreshTokensMethods
  & HooksAddType<
    AdmRefreshToken,
    QueryAllAdmRefreshTokensArgs,
    MutationCreateAdmRefreshTokenArgsWithAutoDefinable,
    MutationUpdateAdmRefreshTokenArgs,
    MutationRemoveAdmRefreshTokenArgs,
    StrictCreateAdmRefreshTokenArgs,
    StrictUpdateAdmRefreshTokenArgs
  >;

const dateFieldsForSearch: string[] = [
  'create',
];

const otherFieldsForSearch: string[] = [
  'id',
  'managerId',
  'token',
];

export const getAdmRefreshTokensService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    AdmRefreshToken,
    QueryAllAdmRefreshTokensArgs,
    MutationCreateAdmRefreshTokenArgsWithAutoDefinable,
    MutationUpdateAdmRefreshTokenArgs,
    MutationRemoveAdmRefreshTokenArgs,
    StrictCreateAdmRefreshTokenArgs,
    StrictUpdateAdmRefreshTokenArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const getDefaultPart = () => ({});

  const all = async (
    params: QueryAllAdmRefreshTokensArgs = {},
  ): Promise<AdmRefreshToken[]> => {
    return ctx.prisma.admRefreshToken.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<AdmRefreshToken[]>;
  };

  const findOne = async (
    params: QueryAllAdmRefreshTokensArgs = {},
  ): Promise<AdmRefreshToken | null> => {
    return ctx.prisma.admRefreshToken.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findRequired = async (
    params: QueryAllAdmRefreshTokensArgs = {},
  ): Promise<AdmRefreshToken> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<AdmRefreshToken | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<AdmRefreshToken> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllAdmRefreshTokensMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.admRefreshToken.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllAdmRefreshTokensMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAdmRefreshTokenArgs,
    byUser = false,
  ): Promise<AdmRefreshToken> => {
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as MutationCreateAdmRefreshTokenArgsWithoutAutoDefinable :
      data;

    // augment data by default fields
    const augmented: MutationCreateAdmRefreshTokenArgsWithAutoDefinable = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

    const createOperation = ctx.prisma.admRefreshToken.create({
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
      ctx.prisma.admRefreshToken.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.AdmRefreshToken,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as AdmRefreshToken),
    ]);

    return result as AdmRefreshToken;
  };

  const createMany = async (
    entries: StrictCreateAdmRefreshTokenArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData =
      clearedData.map(data => R.mergeLeft(data, defaultPart) as MutationCreateAdmRefreshTokenArgsWithAutoDefinable);

    const result = await ctx.prisma.admRefreshToken.createMany({
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
    data: MutationUpdateAdmRefreshTokenArgs,
    byUser = false,
  ): Promise<AdmRefreshToken> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAdmRefreshTokenArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.admRefreshToken.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.AdmRefreshToken,
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
      runHooks.afterUpdate(ctx, result as AdmRefreshToken),
    ]);

    return result as AdmRefreshToken;
  };

  const upsert = async (
    data: MutationUpdateAdmRefreshTokenArgs,
    byUser = false,
  ): Promise<AdmRefreshToken> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAdmRefreshTokenArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.admRefreshToken.upsert({
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
    filter: AdmRefreshTokenFilter,
    data: MutationCreateAdmRefreshTokenArgs,
    byUser = false,
  ): Promise<AdmRefreshToken> => {
    const cnt = await count({filter});

    if (cnt > 1) {
      throw new Error(`There is more then one entity (${cnt}) that fits filter "${JSON.stringify(filter)}"`);
    }

    // Compose object for augmentation
    const dbVersion = await findRequired({filter});
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAdmRefreshTokenArgs = R.mergeLeft(cleared, augmentationBase);

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
    params: MutationRemoveAdmRefreshTokenArgs,
  ): Promise<AdmRefreshToken> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.admRefreshToken.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.AdmRefreshToken,
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

  const baseMethods: BaseAdmRefreshTokensMethods = {
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

  const service: AdmRefreshTokensService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
