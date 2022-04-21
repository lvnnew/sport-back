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
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type AutodefinableAdmRefreshTokenKeys = never;
export type ForbidenForUserAdmRefreshTokenKeys = never;
export type RequiredDbNotUserAdmRefreshTokenKeys = never;

export type AutodefinableAdmRefreshTokenPart = DefinedRecord<Pick<MutationCreateAdmRefreshTokenArgs, AutodefinableAdmRefreshTokenKeys>>;

export type ReliableAdmRefreshTokenCreateUserInput =
  Omit<MutationCreateAdmRefreshTokenArgs, ForbidenForUserAdmRefreshTokenKeys>
  & AutodefinableAdmRefreshTokenPart;

export type AllowedAdmRefreshTokenForUserCreateInput = Omit<MutationCreateAdmRefreshTokenArgs, ForbidenForUserAdmRefreshTokenKeys>;

export type StrictCreateAdmRefreshTokenArgs = DefinedFieldsInRecord<MutationCreateAdmRefreshTokenArgs, RequiredDbNotUserAdmRefreshTokenKeys> & AutodefinableAdmRefreshTokenPart;
export type StrictUpdateAdmRefreshTokenArgs = DefinedFieldsInRecord<MutationUpdateAdmRefreshTokenArgs, RequiredDbNotUserAdmRefreshTokenKeys> & AutodefinableAdmRefreshTokenPart;

export type StrictCreateAdmRefreshTokenArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateAdmRefreshTokenArgs, AutodefinableAdmRefreshTokenKeys>;
export type MutationCreateAdmRefreshTokenArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateAdmRefreshTokenArgs, AutodefinableAdmRefreshTokenKeys>;
export type MutationUpdateAdmRefreshTokenArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateAdmRefreshTokenArgs, AutodefinableAdmRefreshTokenKeys>;

export interface BaseAdmRefreshTokensMethods {
  get: (id: number) =>
    Promise<AdmRefreshToken | null>;
  getRequired: (id: number) =>
    Promise<AdmRefreshToken>;
  all: (params?: QueryAllAdmRefreshTokensArgs) =>
    Promise<AdmRefreshToken[]>;
  findOne: (params?: QueryAllAdmRefreshTokensArgs) =>
    Promise<AdmRefreshToken | null>;
  findOneRequired: (params?: QueryAllAdmRefreshTokensArgs) =>
    Promise<AdmRefreshToken>;
  count: (params?: Query_AllAdmRefreshTokensMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAdmRefreshTokensMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAdmRefreshTokenArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<AdmRefreshToken>;
  createMany: (data: StrictCreateAdmRefreshTokenArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAdmRefreshTokenArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<AdmRefreshToken>;
  upsert: (data: MutationUpdateAdmRefreshTokenArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<AdmRefreshToken>;
  upsertAdvanced: (
    filter: AdmRefreshTokenFilter,
    data: MutationCreateAdmRefreshTokenArgsWithoutAutodefinable,
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
    ReliableAdmRefreshTokenCreateUserInput,
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
    ReliableAdmRefreshTokenCreateUserInput,
    MutationUpdateAdmRefreshTokenArgs,
    MutationRemoveAdmRefreshTokenArgs,
    StrictCreateAdmRefreshTokenArgs,
    StrictUpdateAdmRefreshTokenArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableAdmRefreshTokenPart> => currentData as T;

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

  const findOneRequired = async (
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
    data: MutationCreateAdmRefreshTokenArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<AdmRefreshToken> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedAdmRefreshTokenForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableAdmRefreshTokenCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

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
    entries: StrictCreateAdmRefreshTokenArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateAdmRefreshTokenArgs[];

    const result = await ctx.prisma.admRefreshToken.createMany({
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
    data: MutationUpdateAdmRefreshTokenArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<AdmRefreshToken> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateAdmRefreshTokenArgs = R.mergeLeft(augmentedByDefault, dbVersion);

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
    data: MutationUpdateAdmRefreshTokenArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<AdmRefreshToken> => {
    // Get db version
    const dbVersion = await get(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateAdmRefreshTokenArgs = R.mergeLeft(augmentedByDefault, dbVersion || {} as AdmRefreshToken);

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
    data: MutationCreateAdmRefreshTokenArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<AdmRefreshToken> => {
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

  const service: AdmRefreshTokensService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
