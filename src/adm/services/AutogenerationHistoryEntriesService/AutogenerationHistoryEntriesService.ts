import {
  ListMetadata,
  MutationCreateAutogenerationHistoryEntryArgs,
  MutationUpdateAutogenerationHistoryEntryArgs,
  MutationRemoveAutogenerationHistoryEntryArgs,
  QueryAllAutogenerationHistoryEntriesArgs,
  Query_AllAutogenerationHistoryEntriesMetaArgs,
  AutogenerationHistoryEntry,
  AutogenerationHistoryEntryFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAutogenerationHistoryEntriesMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutoDefinableAutogenerationHistoryEntryKeys = never;
export type ForbidenForUserAutogenerationHistoryEntryKeys = never;
export type RequiredDbNotUserAutogenerationHistoryEntryKeys = never;

export type AutodefinableAutogenerationHistoryEntryPart = DefinedRecord<Pick<MutationCreateAutogenerationHistoryEntryArgs, AutoDefinableAutogenerationHistoryEntryKeys>>;

export type ReliableAutogenerationHistoryEntryCreateUserInput =
  Omit<MutationCreateAutogenerationHistoryEntryArgs, ForbidenForUserAutogenerationHistoryEntryKeys>
  & AutodefinableAutogenerationHistoryEntryPart;

export type AllowedAutogenerationHistoryEntryForUserCreateInput = Omit<MutationCreateAutogenerationHistoryEntryArgs, ForbidenForUserAutogenerationHistoryEntryKeys>;

export type StrictCreateAutogenerationHistoryEntryArgs = DefinedFieldsInRecord<MutationCreateAutogenerationHistoryEntryArgs, RequiredDbNotUserAutogenerationHistoryEntryKeys> & AutodefinableAutogenerationHistoryEntryPart;
export type StrictUpdateAutogenerationHistoryEntryArgs = DefinedFieldsInRecord<MutationUpdateAutogenerationHistoryEntryArgs, RequiredDbNotUserAutogenerationHistoryEntryKeys> & AutodefinableAutogenerationHistoryEntryPart;

export type StrictCreateAutogenerationHistoryEntryArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateAutogenerationHistoryEntryArgs, AutoDefinableAutogenerationHistoryEntryKeys>;

export interface BaseAutogenerationHistoryEntriesMethods {
  get: (id: number) =>
    Promise<AutogenerationHistoryEntry | null>;
  all: (params?: QueryAllAutogenerationHistoryEntriesArgs) =>
    Promise<AutogenerationHistoryEntry[]>;
  findOne: (params?: QueryAllAutogenerationHistoryEntriesArgs) =>
    Promise<AutogenerationHistoryEntry | null>;
  count: (params?: Query_AllAutogenerationHistoryEntriesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAutogenerationHistoryEntriesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAutogenerationHistoryEntryArgs, byUser?: boolean) =>
    Promise<AutogenerationHistoryEntry>;
  createMany: (data: StrictCreateAutogenerationHistoryEntryArgsWithoutAutoDefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAutogenerationHistoryEntryArgs, byUser?: boolean) =>
    Promise<AutogenerationHistoryEntry>;
  upsert: (data: MutationUpdateAutogenerationHistoryEntryArgs, byUser?: boolean) =>
    Promise<AutogenerationHistoryEntry>;
  upsertAdvanced: (
    filter: AutogenerationHistoryEntryFilter,
    data: MutationCreateAutogenerationHistoryEntryArgs,
    byUser?: boolean,
  ) =>
    Promise<AutogenerationHistoryEntry>;
  delete: (params: MutationRemoveAutogenerationHistoryEntryArgs) =>
    Promise<AutogenerationHistoryEntry>;
}

export type AutogenerationHistoryEntriesService = BaseAutogenerationHistoryEntriesMethods
  & AdditionalAutogenerationHistoryEntriesMethods
  & HooksAddType<
    AutogenerationHistoryEntry,
    QueryAllAutogenerationHistoryEntriesArgs,
    ReliableAutogenerationHistoryEntryCreateUserInput,
    MutationUpdateAutogenerationHistoryEntryArgs,
    MutationRemoveAutogenerationHistoryEntryArgs,
    StrictCreateAutogenerationHistoryEntryArgs,
    StrictUpdateAutogenerationHistoryEntryArgs
  >;

const dateFieldsForSearch: string[] = [
  'date',
  'version',
];

const otherFieldsForSearch: string[] = [
  'id',
  'originalEntityType',
  'originalEntityId',
  'autogenerationRuleId',
  'error',
];

export const getAutogenerationHistoryEntriesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    AutogenerationHistoryEntry,
    QueryAllAutogenerationHistoryEntriesArgs,
    ReliableAutogenerationHistoryEntryCreateUserInput,
    MutationUpdateAutogenerationHistoryEntryArgs,
    MutationRemoveAutogenerationHistoryEntryArgs,
    StrictCreateAutogenerationHistoryEntryArgs,
    StrictUpdateAutogenerationHistoryEntryArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const getDefaultPart = async () => ({});

  const all = async (
    params: QueryAllAutogenerationHistoryEntriesArgs = {},
  ): Promise<AutogenerationHistoryEntry[]> => {
    return ctx.prisma.autogenerationHistoryEntry.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<AutogenerationHistoryEntry[]>;
  };

  const findOne = async (
    params: QueryAllAutogenerationHistoryEntriesArgs = {},
  ): Promise<AutogenerationHistoryEntry | null> => {
    return ctx.prisma.autogenerationHistoryEntry.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findRequired = async (
    params: QueryAllAutogenerationHistoryEntriesArgs = {},
  ): Promise<AutogenerationHistoryEntry> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<AutogenerationHistoryEntry | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<AutogenerationHistoryEntry> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllAutogenerationHistoryEntriesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.autogenerationHistoryEntry.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllAutogenerationHistoryEntriesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAutogenerationHistoryEntryArgs,
    byUser = false,
  ): Promise<AutogenerationHistoryEntry> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedAutogenerationHistoryEntryForUserCreateInput :
      data;

    // augment data by default fields
    const augmented = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

    const createOperation = ctx.prisma.autogenerationHistoryEntry.create({
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
      ctx.prisma.autogenerationHistoryEntry.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.AutogenerationHistoryEntry,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as AutogenerationHistoryEntry),
    ]);

    return result as AutogenerationHistoryEntry;
  };

  const createMany = async (
    entries: StrictCreateAutogenerationHistoryEntryArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData = clearedData.map(data => R.mergeLeft(
      data,
      defaultPart,
    ) as StrictCreateAutogenerationHistoryEntryArgs);

    const result = await ctx.prisma.autogenerationHistoryEntry.createMany({
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
    data: MutationUpdateAutogenerationHistoryEntryArgs,
    byUser = false,
  ): Promise<AutogenerationHistoryEntry> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAutogenerationHistoryEntryArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.autogenerationHistoryEntry.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.AutogenerationHistoryEntry,
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
      runHooks.afterUpdate(ctx, result as AutogenerationHistoryEntry),
    ]);

    return result as AutogenerationHistoryEntry;
  };

  const upsert = async (
    data: MutationUpdateAutogenerationHistoryEntryArgs,
    byUser = false,
  ): Promise<AutogenerationHistoryEntry> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAutogenerationHistoryEntryArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.autogenerationHistoryEntry.upsert({
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
    filter: AutogenerationHistoryEntryFilter,
    data: MutationCreateAutogenerationHistoryEntryArgs,
    byUser = false,
  ): Promise<AutogenerationHistoryEntry> => {
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
    const augmented: StrictUpdateAutogenerationHistoryEntryArgs = R.mergeLeft(cleared, augmentationBase);

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
    params: MutationRemoveAutogenerationHistoryEntryArgs,
  ): Promise<AutogenerationHistoryEntry> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.autogenerationHistoryEntry.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.AutogenerationHistoryEntry,
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

  const baseMethods: BaseAutogenerationHistoryEntriesMethods = {
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

  const service: AutogenerationHistoryEntriesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
