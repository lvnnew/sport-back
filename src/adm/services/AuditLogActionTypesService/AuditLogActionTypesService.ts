import {
  ListMetadata,
  MutationCreateAuditLogActionTypeArgs,
  MutationUpdateAuditLogActionTypeArgs,
  MutationRemoveAuditLogActionTypeArgs,
  QueryAllAuditLogActionTypesArgs,
  Query_AllAuditLogActionTypesMetaArgs,
  AuditLogActionType,
  AuditLogActionTypeFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAuditLogActionTypesMethods, getAdditionalMethods} from './additionalMethods';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {getHooksUtils, HooksAddType} from '../getHooksUtils';
import * as R from 'ramda';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type AutodefinableAuditLogActionTypeKeys = never;
export type ForbidenForUserAuditLogActionTypeKeys = never;
export type RequiredDbNotUserAuditLogActionTypeKeys = never;

export type AutodefinableAuditLogActionTypePart = DefinedRecord<Pick<MutationCreateAuditLogActionTypeArgs, AutodefinableAuditLogActionTypeKeys>>;

export type ReliableAuditLogActionTypeCreateUserInput =
  Omit<MutationCreateAuditLogActionTypeArgs, ForbidenForUserAuditLogActionTypeKeys>
  & AutodefinableAuditLogActionTypePart;

export type AllowedAuditLogActionTypeForUserCreateInput = Omit<MutationCreateAuditLogActionTypeArgs, ForbidenForUserAuditLogActionTypeKeys>;

export type StrictCreateAuditLogActionTypeArgs = DefinedFieldsInRecord<MutationCreateAuditLogActionTypeArgs, RequiredDbNotUserAuditLogActionTypeKeys> & AutodefinableAuditLogActionTypePart;
export type StrictUpdateAuditLogActionTypeArgs = DefinedFieldsInRecord<MutationUpdateAuditLogActionTypeArgs, RequiredDbNotUserAuditLogActionTypeKeys> & AutodefinableAuditLogActionTypePart;

export type StrictCreateAuditLogActionTypeArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateAuditLogActionTypeArgs, AutodefinableAuditLogActionTypeKeys>;

export interface BaseAuditLogActionTypesMethods {
  get: (id: string) =>
    Promise<AuditLogActionType | null>;
  getRequired: (id: string) =>
    Promise<AuditLogActionType>;
  all: (params?: QueryAllAuditLogActionTypesArgs) =>
    Promise<AuditLogActionType[]>;
  findOne: (params?: QueryAllAuditLogActionTypesArgs) =>
    Promise<AuditLogActionType | null>;
  findOneRequired: (params?: QueryAllAuditLogActionTypesArgs) =>
    Promise<AuditLogActionType>;
  count: (params?: Query_AllAuditLogActionTypesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAuditLogActionTypesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAuditLogActionTypeArgs, byUser?: boolean) =>
    Promise<AuditLogActionType>;
  createMany: (data: StrictCreateAuditLogActionTypeArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAuditLogActionTypeArgs, byUser?: boolean) =>
    Promise<AuditLogActionType>;
  upsert: (data: MutationUpdateAuditLogActionTypeArgs, byUser?: boolean) =>
    Promise<AuditLogActionType>;
  upsertAdvanced: (
    filter: AuditLogActionTypeFilter,
    data: MutationCreateAuditLogActionTypeArgs,
    byUser?: boolean,
  ) =>
    Promise<AuditLogActionType>;
  delete: (params: MutationRemoveAuditLogActionTypeArgs) =>
    Promise<AuditLogActionType>;
}

export type AuditLogActionTypesService = BaseAuditLogActionTypesMethods
  & AdditionalAuditLogActionTypesMethods
  & HooksAddType<
    AuditLogActionType,
    QueryAllAuditLogActionTypesArgs,
    ReliableAuditLogActionTypeCreateUserInput,
    MutationUpdateAuditLogActionTypeArgs,
    MutationRemoveAuditLogActionTypeArgs,
    StrictCreateAuditLogActionTypeArgs,
    StrictUpdateAuditLogActionTypeArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [];

export const getAuditLogActionTypesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    AuditLogActionType,
    QueryAllAuditLogActionTypesArgs,
    ReliableAuditLogActionTypeCreateUserInput,
    MutationUpdateAuditLogActionTypeArgs,
    MutationRemoveAuditLogActionTypeArgs,
    StrictCreateAuditLogActionTypeArgs,
    StrictUpdateAuditLogActionTypeArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(currentData: Record<string, any>): Promise<T & AutodefinableAuditLogActionTypePart> => currentData as T;

  const all = async (
    params: QueryAllAuditLogActionTypesArgs = {},
  ): Promise<AuditLogActionType[]> => {
    return ctx.prisma.auditLogActionType.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<AuditLogActionType[]>;
  };

  const findOne = async (
    params: QueryAllAuditLogActionTypesArgs = {},
  ): Promise<AuditLogActionType | null> => {
    return ctx.prisma.auditLogActionType.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findOneRequired = async (
    params: QueryAllAuditLogActionTypesArgs = {},
  ): Promise<AuditLogActionType> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: string,
  ): Promise<AuditLogActionType | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: string,
  ): Promise<AuditLogActionType> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllAuditLogActionTypesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.auditLogActionType.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllAuditLogActionTypesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAuditLogActionTypeArgs,
    byUser = false,
  ): Promise<AuditLogActionType> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedAuditLogActionTypeForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableAuditLogActionTypeCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.auditLogActionType.create({
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
      ctx.prisma.auditLogActionType.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      runHooks.afterCreate(ctx, result as AuditLogActionType),
    ]);

    return result as AuditLogActionType;
  };

  const createMany = async (
    entries: StrictCreateAuditLogActionTypeArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateAuditLogActionTypeArgs[];

    const result = await ctx.prisma.auditLogActionType.createMany({
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
    data: MutationUpdateAuditLogActionTypeArgs,
    byUser = false,
  ): Promise<AuditLogActionType> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateAuditLogActionTypeArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.auditLogActionType.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const operations = [
      updateOperation,
      ...(await runHooks.additionalOperationsOnUpdate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      runHooks.afterUpdate(ctx, result as AuditLogActionType),
    ]);

    return result as AuditLogActionType;
  };

  const upsert = async (
    data: MutationUpdateAuditLogActionTypeArgs,
    byUser = false,
  ): Promise<AuditLogActionType> => {
    // Get db version
    const dbVersion = await get(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateAuditLogActionTypeArgs = R.mergeLeft(augmentedByDefault, dbVersion || {} as AuditLogActionType);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.auditLogActionType.upsert({
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
    filter: AuditLogActionTypeFilter,
    data: MutationCreateAuditLogActionTypeArgs,
    byUser = false,
  ): Promise<AuditLogActionType> => {
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
    params: MutationRemoveAuditLogActionTypeArgs,
  ): Promise<AuditLogActionType> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.auditLogActionType.delete({where: {id: params.id}});

    const operations = [
      deleteOperation,
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

  const baseMethods: BaseAuditLogActionTypesMethods = {
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

  const service: AuditLogActionTypesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
