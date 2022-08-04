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

export type AutodefinableAutogenerationHistoryEntryKeys = 'errorOccurred';
export type ForbidenForUserAutogenerationHistoryEntryKeys = never;
export type RequiredDbNotUserAutogenerationHistoryEntryKeys = never;

export type AutodefinableAutogenerationHistoryEntryPart = DefinedRecord<Pick<MutationCreateAutogenerationHistoryEntryArgs, AutodefinableAutogenerationHistoryEntryKeys>>;

export type ReliableAutogenerationHistoryEntryCreateUserInput =
  Omit<MutationCreateAutogenerationHistoryEntryArgs, ForbidenForUserAutogenerationHistoryEntryKeys>
  & AutodefinableAutogenerationHistoryEntryPart;

export type AllowedAutogenerationHistoryEntryForUserCreateInput = Omit<MutationCreateAutogenerationHistoryEntryArgs, ForbidenForUserAutogenerationHistoryEntryKeys>;

export type StrictCreateAutogenerationHistoryEntryArgs = DefinedFieldsInRecord<MutationCreateAutogenerationHistoryEntryArgs, RequiredDbNotUserAutogenerationHistoryEntryKeys> & AutodefinableAutogenerationHistoryEntryPart;
export type StrictUpdateAutogenerationHistoryEntryArgs = DefinedFieldsInRecord<MutationUpdateAutogenerationHistoryEntryArgs, RequiredDbNotUserAutogenerationHistoryEntryKeys> & AutodefinableAutogenerationHistoryEntryPart;

export type StrictCreateAutogenerationHistoryEntryArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateAutogenerationHistoryEntryArgs, AutodefinableAutogenerationHistoryEntryKeys>;
export type MutationCreateAutogenerationHistoryEntryArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateAutogenerationHistoryEntryArgs, AutodefinableAutogenerationHistoryEntryKeys>;
export type MutationUpdateAutogenerationHistoryEntryArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateAutogenerationHistoryEntryArgs, AutodefinableAutogenerationHistoryEntryKeys>;

export interface BaseAutogenerationHistoryEntriesMethods {
  get: (id: number) =>
    Promise<AutogenerationHistoryEntry | null>;
  getRequired: (id: number) =>
    Promise<AutogenerationHistoryEntry>;
  all: (params?: QueryAllAutogenerationHistoryEntriesArgs) =>
    Promise<AutogenerationHistoryEntry[]>;
  findOne: (params?: QueryAllAutogenerationHistoryEntriesArgs) =>
    Promise<AutogenerationHistoryEntry | null>;
  findOneRequired: (params?: QueryAllAutogenerationHistoryEntriesArgs) =>
    Promise<AutogenerationHistoryEntry>;
  count: (params?: Query_AllAutogenerationHistoryEntriesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAutogenerationHistoryEntriesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAutogenerationHistoryEntryArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<AutogenerationHistoryEntry>;
  createMany: (data: StrictCreateAutogenerationHistoryEntryArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAutogenerationHistoryEntryArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<AutogenerationHistoryEntry>;
  upsert: (
    data: PartialFieldsInRecord<MutationUpdateAutogenerationHistoryEntryArgsWithoutAutodefinable, 'id'>,
    byUser?: boolean,
  ) =>
    Promise<AutogenerationHistoryEntry>;
  upsertAdvanced: (
    filter: AutogenerationHistoryEntryFilter,
    data: MutationCreateAutogenerationHistoryEntryArgsWithoutAutodefinable,
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

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableAutogenerationHistoryEntryPart> => {
    const defaultFieldConstructors = {
      errorOccurred: async () => false,
    };

    const pairedConstructors = R.toPairs(defaultFieldConstructors);

    const resultedPairs: R.KeyValuePair<string, any>[] = [];
    for (const [key, constructor] of pairedConstructors) {
      resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
    }

    return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableAutogenerationHistoryEntryPart;
  };

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
      await runHooks.changeListFilter(ctx, params),
      {noId: false},
    ));
  };

  const findOneRequired = async (
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
    data: MutationCreateAutogenerationHistoryEntryArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<AutogenerationHistoryEntry> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedAutogenerationHistoryEntryForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableAutogenerationHistoryEntryCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

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
    ]);

    await runHooks.afterCreate(ctx, result as AutogenerationHistoryEntry);

    return result as AutogenerationHistoryEntry;
  };

  const createMany = async (
    entries: StrictCreateAutogenerationHistoryEntryArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateAutogenerationHistoryEntryArgs[];

    const result = await ctx.prisma.autogenerationHistoryEntry.createMany({
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
    data: MutationUpdateAutogenerationHistoryEntryArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<AutogenerationHistoryEntry> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateAutogenerationHistoryEntryArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.autogenerationHistoryEntry.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
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
    data: PartialFieldsInRecord<MutationUpdateAutogenerationHistoryEntryArgsWithoutAutodefinable, 'id'>,
    byUser = false,
  ): Promise<AutogenerationHistoryEntry> => {
    // Get db version
    const dbVersion = data.id ? await get(data.id) : null;

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateAutogenerationHistoryEntryArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as AutogenerationHistoryEntry);

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
    data: MutationCreateAutogenerationHistoryEntryArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<AutogenerationHistoryEntry> => {
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

  const service: AutogenerationHistoryEntriesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
