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

export type AutoDefinableAuditLogActionTypeKeys = never;
export type ForbidenForUserAuditLogActionTypeKeys = never;
export type RequiredDbNotUserAuditLogActionTypeKeys = never;

export type AutodefinableAuditLogActionTypePart = DefinedRecord<Pick<MutationCreateAuditLogActionTypeArgs, AutoDefinableAuditLogActionTypeKeys>>;

export type ReliableAuditLogActionTypeCreateUserInput =
  Omit<MutationCreateAuditLogActionTypeArgs, ForbidenForUserAuditLogActionTypeKeys>
  & AutodefinableAuditLogActionTypePart;

export type AllowedAuditLogActionTypeForUserCreateInput = Omit<MutationCreateAuditLogActionTypeArgs, ForbidenForUserAuditLogActionTypeKeys>;

export type StrictCreateAuditLogActionTypeArgs = DefinedFieldsInRecord<MutationCreateAuditLogActionTypeArgs, RequiredDbNotUserAuditLogActionTypeKeys> & AutodefinableAuditLogActionTypePart;
export type StrictUpdateAuditLogActionTypeArgs = DefinedFieldsInRecord<MutationUpdateAuditLogActionTypeArgs, RequiredDbNotUserAuditLogActionTypeKeys> & AutodefinableAuditLogActionTypePart;

export type StrictCreateAuditLogActionTypeArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateAuditLogActionTypeArgs, AutoDefinableAuditLogActionTypeKeys>;

export interface BaseAuditLogActionTypesMethods {
  get: (id: string) =>
    Promise<AuditLogActionType | null>;
  all: (params?: QueryAllAuditLogActionTypesArgs) =>
    Promise<AuditLogActionType[]>;
  findOne: (params?: QueryAllAuditLogActionTypesArgs) =>
    Promise<AuditLogActionType | null>;
  count: (params?: Query_AllAuditLogActionTypesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAuditLogActionTypesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAuditLogActionTypeArgs, byUser?: boolean) =>
    Promise<AuditLogActionType>;
  createMany: (data: StrictCreateAuditLogActionTypeArgsWithoutAutoDefinable[], byUser?: boolean) =>
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

  const getDefaultPart = async () => ({});

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

  const findRequired = async (
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
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedAuditLogActionTypeForUserCreateInput :
      data;

    // augment data by default fields
    const augmented = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

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
    entries: StrictCreateAuditLogActionTypeArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData = clearedData.map(data => R.mergeLeft(
      data,
      defaultPart,
    ) as StrictCreateAuditLogActionTypeArgs);

    const result = await ctx.prisma.auditLogActionType.createMany({
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
    data: MutationUpdateAuditLogActionTypeArgs,
    byUser = false,
  ): Promise<AuditLogActionType> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAuditLogActionTypeArgs = R.mergeLeft(cleared, augmentationBase);

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
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAuditLogActionTypeArgs = R.mergeLeft(cleared, augmentationBase);

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
    }

    // Compose object for augmentation
    const dbVersion = await findRequired({filter});
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAuditLogActionTypeArgs = R.mergeLeft(cleared, augmentationBase);

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

  const service: AuditLogActionTypesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
