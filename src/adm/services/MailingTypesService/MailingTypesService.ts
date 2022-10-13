import {
  ListMetadata,
  MutationCreateMailingTypeArgs,
  MutationUpdateMailingTypeArgs,
  MutationRemoveMailingTypeArgs,
  QueryAllMailingTypesArgs,
  Query_AllMailingTypesMetaArgs,
  MailingType,
  MailingTypeFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalMailingTypesMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutodefinableMailingTypeKeys = never;
export type ForbidenForUserMailingTypeKeys = never;
export type RequiredDbNotUserMailingTypeKeys = never;

export type AutodefinableMailingTypePart = DefinedRecord<Pick<MutationCreateMailingTypeArgs, AutodefinableMailingTypeKeys>>;

export type ReliableMailingTypeCreateUserInput =
  Omit<MutationCreateMailingTypeArgs, ForbidenForUserMailingTypeKeys>
  & AutodefinableMailingTypePart;

export type AllowedMailingTypeForUserCreateInput = Omit<MutationCreateMailingTypeArgs, ForbidenForUserMailingTypeKeys>;

export type StrictCreateMailingTypeArgs = DefinedFieldsInRecord<MutationCreateMailingTypeArgs, RequiredDbNotUserMailingTypeKeys> & AutodefinableMailingTypePart;
export type StrictUpdateMailingTypeArgs = DefinedFieldsInRecord<MutationUpdateMailingTypeArgs, RequiredDbNotUserMailingTypeKeys> & AutodefinableMailingTypePart;

export type StrictCreateMailingTypeArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMailingTypeArgs, AutodefinableMailingTypeKeys>;
export type MutationCreateMailingTypeArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMailingTypeArgs, AutodefinableMailingTypeKeys>;
export type MutationUpdateMailingTypeArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMailingTypeArgs, AutodefinableMailingTypeKeys>;

export interface BaseMailingTypesMethods {
  get: (id: string) =>
    Promise<MailingType | null>;
  getRequired: (id: string) =>
    Promise<MailingType>;
  all: (params?: QueryAllMailingTypesArgs) =>
    Promise<MailingType[]>;
  findOne: (params?: QueryAllMailingTypesArgs) =>
    Promise<MailingType | null>;
  findOneRequired: (params?: QueryAllMailingTypesArgs) =>
    Promise<MailingType>;
  count: (params?: Query_AllMailingTypesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllMailingTypesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateMailingTypeArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<MailingType>;
  createMany: (data: StrictCreateMailingTypeArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateMailingTypeArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<MailingType>;
  upsert: (
    data: PartialFieldsInRecord<MutationUpdateMailingTypeArgsWithoutAutodefinable, 'id'>,
    byUser?: boolean,
  ) =>
    Promise<MailingType>;
  upsertAdvanced: (
    filter: MailingTypeFilter,
    data: MutationCreateMailingTypeArgsWithoutAutodefinable,
    byUser?: boolean,
  ) =>
    Promise<MailingType>;
  delete: (params: MutationRemoveMailingTypeArgs) =>
    Promise<MailingType>;
}

export type MailingTypesService = BaseMailingTypesMethods
  & AdditionalMailingTypesMethods
  & HooksAddType<
    MailingType,
    QueryAllMailingTypesArgs,
    ReliableMailingTypeCreateUserInput,
    MutationUpdateMailingTypeArgs,
    MutationRemoveMailingTypeArgs,
    StrictCreateMailingTypeArgs,
    StrictUpdateMailingTypeArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [
  'id',
  'title',
];

export const getMailingTypesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    MailingType,
    QueryAllMailingTypesArgs,
    ReliableMailingTypeCreateUserInput,
    MutationUpdateMailingTypeArgs,
    MutationRemoveMailingTypeArgs,
    StrictCreateMailingTypeArgs,
    StrictUpdateMailingTypeArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableMailingTypePart> => currentData as T & AutodefinableMailingTypePart;

  const all = async (
    params: QueryAllMailingTypesArgs = {},
  ): Promise<MailingType[]> => {
    return ctx.prisma.mailingType.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<MailingType[]>;
  };

  const findOne = async (
    params: QueryAllMailingTypesArgs = {},
  ): Promise<MailingType | null> => {
    return ctx.prisma.mailingType.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params),
      {noId: false},
    ));
  };

  const findOneRequired = async (
    params: QueryAllMailingTypesArgs = {},
  ): Promise<MailingType> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: string,
  ): Promise<MailingType | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: string,
  ): Promise<MailingType> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllMailingTypesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.mailingType.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllMailingTypesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateMailingTypeArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MailingType> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedMailingTypeForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableMailingTypeCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.mailingType.create({
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
      ctx.prisma.mailingType.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.MailingType,
        entityId: result.id,
        actionData: data,
      }),
    ]);

    await runHooks.afterCreate(ctx, result as MailingType);

    return result as MailingType;
  };

  const createMany = async (
    entries: StrictCreateMailingTypeArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateMailingTypeArgs[];

    const result = await ctx.prisma.mailingType.createMany({
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
    data: MutationUpdateMailingTypeArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MailingType> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMailingTypeArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.mailingType.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.MailingType,
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
      runHooks.afterUpdate(ctx, result as MailingType),
    ]);

    return result as MailingType;
  };

  const upsert = async (
    data: PartialFieldsInRecord<MutationUpdateMailingTypeArgsWithoutAutodefinable, 'id'>,
    byUser = false,
  ): Promise<MailingType> => {
    // Get db version
    const dbVersion = data.id ? await get(data.id) : null;

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMailingTypeArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as MailingType);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.mailingType.upsert({
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
    filter: MailingTypeFilter,
    data: MutationCreateMailingTypeArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MailingType> => {
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
    params: MutationRemoveMailingTypeArgs,
  ): Promise<MailingType> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.mailingType.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.MailingType,
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

  const baseMethods: BaseMailingTypesMethods = {
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

  const service: MailingTypesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
