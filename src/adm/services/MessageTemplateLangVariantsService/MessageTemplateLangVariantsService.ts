import {
  ListMetadata,
  MutationCreateMessageTemplateLangVariantArgs,
  MutationUpdateMessageTemplateLangVariantArgs,
  MutationRemoveMessageTemplateLangVariantArgs,
  QueryAllMessageTemplateLangVariantsArgs,
  Query_AllMessageTemplateLangVariantsMetaArgs,
  MessageTemplateLangVariant,
  MessageTemplateLangVariantFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalMessageTemplateLangVariantsMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutodefinableMessageTemplateLangVariantKeys = never;
export type ForbidenForUserMessageTemplateLangVariantKeys = never;
export type RequiredDbNotUserMessageTemplateLangVariantKeys = never;

export type AutodefinableMessageTemplateLangVariantPart = DefinedRecord<Pick<MutationCreateMessageTemplateLangVariantArgs, AutodefinableMessageTemplateLangVariantKeys>>;

export type ReliableMessageTemplateLangVariantCreateUserInput =
  Omit<MutationCreateMessageTemplateLangVariantArgs, ForbidenForUserMessageTemplateLangVariantKeys>
  & AutodefinableMessageTemplateLangVariantPart;

export type AllowedMessageTemplateLangVariantForUserCreateInput = Omit<MutationCreateMessageTemplateLangVariantArgs, ForbidenForUserMessageTemplateLangVariantKeys>;

export type StrictCreateMessageTemplateLangVariantArgs = DefinedFieldsInRecord<MutationCreateMessageTemplateLangVariantArgs, RequiredDbNotUserMessageTemplateLangVariantKeys> & AutodefinableMessageTemplateLangVariantPart;
export type StrictUpdateMessageTemplateLangVariantArgs = DefinedFieldsInRecord<MutationUpdateMessageTemplateLangVariantArgs, RequiredDbNotUserMessageTemplateLangVariantKeys> & AutodefinableMessageTemplateLangVariantPart;

export type StrictCreateMessageTemplateLangVariantArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMessageTemplateLangVariantArgs, AutodefinableMessageTemplateLangVariantKeys>;
export type MutationCreateMessageTemplateLangVariantArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMessageTemplateLangVariantArgs, AutodefinableMessageTemplateLangVariantKeys>;
export type MutationUpdateMessageTemplateLangVariantArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMessageTemplateLangVariantArgs, AutodefinableMessageTemplateLangVariantKeys>;

export interface BaseMessageTemplateLangVariantsMethods {
  get: (id: number) =>
    Promise<MessageTemplateLangVariant | null>;
  getRequired: (id: number) =>
    Promise<MessageTemplateLangVariant>;
  all: (params?: QueryAllMessageTemplateLangVariantsArgs) =>
    Promise<MessageTemplateLangVariant[]>;
  findOne: (params?: QueryAllMessageTemplateLangVariantsArgs) =>
    Promise<MessageTemplateLangVariant | null>;
  findOneRequired: (params?: QueryAllMessageTemplateLangVariantsArgs) =>
    Promise<MessageTemplateLangVariant>;
  count: (params?: Query_AllMessageTemplateLangVariantsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllMessageTemplateLangVariantsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateMessageTemplateLangVariantArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<MessageTemplateLangVariant>;
  createMany: (data: StrictCreateMessageTemplateLangVariantArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateMessageTemplateLangVariantArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<MessageTemplateLangVariant>;
  upsert: (
    data: PartialFieldsInRecord<MutationUpdateMessageTemplateLangVariantArgsWithoutAutodefinable, 'id'>,
    byUser?: boolean,
  ) =>
    Promise<MessageTemplateLangVariant>;
  upsertAdvanced: (
    filter: MessageTemplateLangVariantFilter,
    data: MutationCreateMessageTemplateLangVariantArgsWithoutAutodefinable,
    byUser?: boolean,
  ) =>
    Promise<MessageTemplateLangVariant>;
  delete: (params: MutationRemoveMessageTemplateLangVariantArgs) =>
    Promise<MessageTemplateLangVariant>;
}

export type MessageTemplateLangVariantsService = BaseMessageTemplateLangVariantsMethods
  & AdditionalMessageTemplateLangVariantsMethods
  & HooksAddType<
    MessageTemplateLangVariant,
    QueryAllMessageTemplateLangVariantsArgs,
    ReliableMessageTemplateLangVariantCreateUserInput,
    MutationUpdateMessageTemplateLangVariantArgs,
    MutationRemoveMessageTemplateLangVariantArgs,
    StrictCreateMessageTemplateLangVariantArgs,
    StrictUpdateMessageTemplateLangVariantArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [
  'id',
  'subjectTemplate',
  'bodyTemplate',
  'messageTemplateId',
  'languageId',
  'additionalStyle',
];

export const getMessageTemplateLangVariantsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    MessageTemplateLangVariant,
    QueryAllMessageTemplateLangVariantsArgs,
    ReliableMessageTemplateLangVariantCreateUserInput,
    MutationUpdateMessageTemplateLangVariantArgs,
    MutationRemoveMessageTemplateLangVariantArgs,
    StrictCreateMessageTemplateLangVariantArgs,
    StrictUpdateMessageTemplateLangVariantArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableMessageTemplateLangVariantPart> => currentData as T;

  const all = async (
    params: QueryAllMessageTemplateLangVariantsArgs = {},
  ): Promise<MessageTemplateLangVariant[]> => {
    return ctx.prisma.messageTemplateLangVariant.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<MessageTemplateLangVariant[]>;
  };

  const findOne = async (
    params: QueryAllMessageTemplateLangVariantsArgs = {},
  ): Promise<MessageTemplateLangVariant | null> => {
    return ctx.prisma.messageTemplateLangVariant.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params),
      {noId: false},
    ));
  };

  const findOneRequired = async (
    params: QueryAllMessageTemplateLangVariantsArgs = {},
  ): Promise<MessageTemplateLangVariant> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<MessageTemplateLangVariant | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<MessageTemplateLangVariant> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllMessageTemplateLangVariantsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.messageTemplateLangVariant.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllMessageTemplateLangVariantsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateMessageTemplateLangVariantArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MessageTemplateLangVariant> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedMessageTemplateLangVariantForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableMessageTemplateLangVariantCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.messageTemplateLangVariant.create({
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
      ctx.prisma.messageTemplateLangVariant.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.MessageTemplateLangVariant,
        entityId: result.id,
        actionData: data,
      }),
    ]);

    await runHooks.afterCreate(ctx, result as MessageTemplateLangVariant);

    return result as MessageTemplateLangVariant;
  };

  const createMany = async (
    entries: StrictCreateMessageTemplateLangVariantArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateMessageTemplateLangVariantArgs[];

    const result = await ctx.prisma.messageTemplateLangVariant.createMany({
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
    data: MutationUpdateMessageTemplateLangVariantArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MessageTemplateLangVariant> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMessageTemplateLangVariantArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.messageTemplateLangVariant.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.MessageTemplateLangVariant,
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
      runHooks.afterUpdate(ctx, result as MessageTemplateLangVariant),
    ]);

    return result as MessageTemplateLangVariant;
  };

  const upsert = async (
    data: PartialFieldsInRecord<MutationUpdateMessageTemplateLangVariantArgsWithoutAutodefinable, 'id'>,
    byUser = false,
  ): Promise<MessageTemplateLangVariant> => {
    // Get db version
    const dbVersion = data.id ? await get(data.id) : null;

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMessageTemplateLangVariantArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as MessageTemplateLangVariant);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.messageTemplateLangVariant.upsert({
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
    filter: MessageTemplateLangVariantFilter,
    data: MutationCreateMessageTemplateLangVariantArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MessageTemplateLangVariant> => {
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
    params: MutationRemoveMessageTemplateLangVariantArgs,
  ): Promise<MessageTemplateLangVariant> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.messageTemplateLangVariant.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.MessageTemplateLangVariant,
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

  const baseMethods: BaseMessageTemplateLangVariantsMethods = {
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

  const service: MessageTemplateLangVariantsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
