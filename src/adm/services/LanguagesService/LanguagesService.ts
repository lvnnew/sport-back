import {
  ListMetadata,
  MutationCreateLanguageArgs,
  MutationUpdateLanguageArgs,
  MutationRemoveLanguageArgs,
  QueryAllLanguagesArgs,
  Query_AllLanguagesMetaArgs,
  Language,
  LanguageFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalLanguagesMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutodefinableLanguageKeys = never;
export type ForbidenForUserLanguageKeys = never;
export type RequiredDbNotUserLanguageKeys = never;

export type AutodefinableLanguagePart = DefinedRecord<Pick<MutationCreateLanguageArgs, AutodefinableLanguageKeys>>;

export type ReliableLanguageCreateUserInput =
  Omit<MutationCreateLanguageArgs, ForbidenForUserLanguageKeys>
  & AutodefinableLanguagePart;

export type AllowedLanguageForUserCreateInput = Omit<MutationCreateLanguageArgs, ForbidenForUserLanguageKeys>;

export type StrictCreateLanguageArgs = DefinedFieldsInRecord<MutationCreateLanguageArgs, RequiredDbNotUserLanguageKeys> & AutodefinableLanguagePart;
export type StrictUpdateLanguageArgs = DefinedFieldsInRecord<MutationUpdateLanguageArgs, RequiredDbNotUserLanguageKeys> & AutodefinableLanguagePart;

export type StrictCreateLanguageArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateLanguageArgs, AutodefinableLanguageKeys>;

export interface BaseLanguagesMethods {
  get: (id: string) =>
    Promise<Language | null>;
  getRequired: (id: string) =>
    Promise<Language>;
  all: (params?: QueryAllLanguagesArgs) =>
    Promise<Language[]>;
  findOne: (params?: QueryAllLanguagesArgs) =>
    Promise<Language | null>;
  findOneRequired: (params?: QueryAllLanguagesArgs) =>
    Promise<Language>;
  count: (params?: Query_AllLanguagesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllLanguagesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateLanguageArgs, byUser?: boolean) =>
    Promise<Language>;
  createMany: (data: StrictCreateLanguageArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateLanguageArgs, byUser?: boolean) =>
    Promise<Language>;
  upsert: (data: MutationUpdateLanguageArgs, byUser?: boolean) =>
    Promise<Language>;
  upsertAdvanced: (
    filter: LanguageFilter,
    data: MutationCreateLanguageArgs,
    byUser?: boolean,
  ) =>
    Promise<Language>;
  delete: (params: MutationRemoveLanguageArgs) =>
    Promise<Language>;
}

export type LanguagesService = BaseLanguagesMethods
  & AdditionalLanguagesMethods
  & HooksAddType<
    Language,
    QueryAllLanguagesArgs,
    ReliableLanguageCreateUserInput,
    MutationUpdateLanguageArgs,
    MutationRemoveLanguageArgs,
    StrictCreateLanguageArgs,
    StrictUpdateLanguageArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [];

export const getLanguagesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    Language,
    QueryAllLanguagesArgs,
    ReliableLanguageCreateUserInput,
    MutationUpdateLanguageArgs,
    MutationRemoveLanguageArgs,
    StrictCreateLanguageArgs,
    StrictUpdateLanguageArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(currentData: Record<string, any>): Promise<T & AutodefinableLanguagePart> => currentData as T;

  const all = async (
    params: QueryAllLanguagesArgs = {},
  ): Promise<Language[]> => {
    return ctx.prisma.language.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<Language[]>;
  };

  const findOne = async (
    params: QueryAllLanguagesArgs = {},
  ): Promise<Language | null> => {
    return ctx.prisma.language.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findOneRequired = async (
    params: QueryAllLanguagesArgs = {},
  ): Promise<Language> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: string,
  ): Promise<Language | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: string,
  ): Promise<Language> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllLanguagesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.language.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllLanguagesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateLanguageArgs,
    byUser = false,
  ): Promise<Language> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedLanguageForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableLanguageCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.language.create({
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
      ctx.prisma.language.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.Language,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as Language),
    ]);

    return result as Language;
  };

  const createMany = async (
    entries: StrictCreateLanguageArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(clearedData.map(el => augmentByDefault(el))) as ReliableLanguageCreateUserInput[];

    const result = await ctx.prisma.language.createMany({
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
    data: MutationUpdateLanguageArgs,
    byUser = false,
  ): Promise<Language> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateLanguageArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.language.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.Language,
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
      runHooks.afterUpdate(ctx, result as Language),
    ]);

    return result as Language;
  };

  const upsert = async (
    data: MutationUpdateLanguageArgs,
    byUser = false,
  ): Promise<Language> => {
    // Get db version
    const dbVersion = await get(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateLanguageArgs = R.mergeLeft(augmentedByDefault, dbVersion || {} as Language);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.language.upsert({
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
    filter: LanguageFilter,
    data: MutationCreateLanguageArgs,
    byUser = false,
  ): Promise<Language> => {
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
    params: MutationRemoveLanguageArgs,
  ): Promise<Language> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.language.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.Language,
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

  const baseMethods: BaseLanguagesMethods = {
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

  const service: LanguagesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
