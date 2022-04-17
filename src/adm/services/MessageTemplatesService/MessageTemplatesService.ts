import {
  ListMetadata,
  MutationCreateMessageTemplateArgs,
  MutationUpdateMessageTemplateArgs,
  MutationRemoveMessageTemplateArgs,
  QueryAllMessageTemplatesArgs,
  Query_AllMessageTemplatesMetaArgs,
  MessageTemplate,
  MessageTemplateFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalMessageTemplatesMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutodefinableMessageTemplateKeys = never;
export type ForbidenForUserMessageTemplateKeys = never;
export type RequiredDbNotUserMessageTemplateKeys = never;

export type AutodefinableMessageTemplatePart = DefinedRecord<Pick<MutationCreateMessageTemplateArgs, AutodefinableMessageTemplateKeys>>;

export type ReliableMessageTemplateCreateUserInput =
  Omit<MutationCreateMessageTemplateArgs, ForbidenForUserMessageTemplateKeys>
  & AutodefinableMessageTemplatePart;

export type AllowedMessageTemplateForUserCreateInput = Omit<MutationCreateMessageTemplateArgs, ForbidenForUserMessageTemplateKeys>;

export type StrictCreateMessageTemplateArgs = DefinedFieldsInRecord<MutationCreateMessageTemplateArgs, RequiredDbNotUserMessageTemplateKeys> & AutodefinableMessageTemplatePart;
export type StrictUpdateMessageTemplateArgs = DefinedFieldsInRecord<MutationUpdateMessageTemplateArgs, RequiredDbNotUserMessageTemplateKeys> & AutodefinableMessageTemplatePart;

export type StrictCreateMessageTemplateArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMessageTemplateArgs, AutodefinableMessageTemplateKeys>;

export interface BaseMessageTemplatesMethods {
  get: (id: string) =>
    Promise<MessageTemplate | null>;
  getRequired: (id: string) =>
    Promise<MessageTemplate>;
  all: (params?: QueryAllMessageTemplatesArgs) =>
    Promise<MessageTemplate[]>;
  findOne: (params?: QueryAllMessageTemplatesArgs) =>
    Promise<MessageTemplate | null>;
  findOneRequired: (params?: QueryAllMessageTemplatesArgs) =>
    Promise<MessageTemplate>;
  count: (params?: Query_AllMessageTemplatesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllMessageTemplatesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateMessageTemplateArgs, byUser?: boolean) =>
    Promise<MessageTemplate>;
  createMany: (data: StrictCreateMessageTemplateArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateMessageTemplateArgs, byUser?: boolean) =>
    Promise<MessageTemplate>;
  upsert: (data: MutationUpdateMessageTemplateArgs, byUser?: boolean) =>
    Promise<MessageTemplate>;
  upsertAdvanced: (
    filter: MessageTemplateFilter,
    data: MutationCreateMessageTemplateArgs,
    byUser?: boolean,
  ) =>
    Promise<MessageTemplate>;
  delete: (params: MutationRemoveMessageTemplateArgs) =>
    Promise<MessageTemplate>;
}

export type MessageTemplatesService = BaseMessageTemplatesMethods
  & AdditionalMessageTemplatesMethods
  & HooksAddType<
    MessageTemplate,
    QueryAllMessageTemplatesArgs,
    ReliableMessageTemplateCreateUserInput,
    MutationUpdateMessageTemplateArgs,
    MutationRemoveMessageTemplateArgs,
    StrictCreateMessageTemplateArgs,
    StrictUpdateMessageTemplateArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [
  'id',
  'title',
  'messageTypeId',
];

export const getMessageTemplatesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    MessageTemplate,
    QueryAllMessageTemplatesArgs,
    ReliableMessageTemplateCreateUserInput,
    MutationUpdateMessageTemplateArgs,
    MutationRemoveMessageTemplateArgs,
    StrictCreateMessageTemplateArgs,
    StrictUpdateMessageTemplateArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableMessageTemplatePart> => currentData as T;

  const all = async (
    params: QueryAllMessageTemplatesArgs = {},
  ): Promise<MessageTemplate[]> => {
    return ctx.prisma.messageTemplate.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<MessageTemplate[]>;
  };

  const findOne = async (
    params: QueryAllMessageTemplatesArgs = {},
  ): Promise<MessageTemplate | null> => {
    return ctx.prisma.messageTemplate.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findOneRequired = async (
    params: QueryAllMessageTemplatesArgs = {},
  ): Promise<MessageTemplate> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: string,
  ): Promise<MessageTemplate | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: string,
  ): Promise<MessageTemplate> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllMessageTemplatesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.messageTemplate.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllMessageTemplatesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateMessageTemplateArgs,
    byUser = false,
  ): Promise<MessageTemplate> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedMessageTemplateForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableMessageTemplateCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.messageTemplate.create({
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
      ctx.prisma.messageTemplate.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.MessageTemplate,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as MessageTemplate),
    ]);

    return result as MessageTemplate;
  };

  const createMany = async (
    entries: StrictCreateMessageTemplateArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateMessageTemplateArgs[];

    const result = await ctx.prisma.messageTemplate.createMany({
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
    data: MutationUpdateMessageTemplateArgs,
    byUser = false,
  ): Promise<MessageTemplate> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMessageTemplateArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.messageTemplate.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.MessageTemplate,
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
      runHooks.afterUpdate(ctx, result as MessageTemplate),
    ]);

    return result as MessageTemplate;
  };

  const upsert = async (
    data: MutationUpdateMessageTemplateArgs,
    byUser = false,
  ): Promise<MessageTemplate> => {
    // Get db version
    const dbVersion = await get(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMessageTemplateArgs = R.mergeLeft(augmentedByDefault, dbVersion || {} as MessageTemplate);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.messageTemplate.upsert({
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
    filter: MessageTemplateFilter,
    data: MutationCreateMessageTemplateArgs,
    byUser = false,
  ): Promise<MessageTemplate> => {
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
    params: MutationRemoveMessageTemplateArgs,
  ): Promise<MessageTemplate> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.messageTemplate.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.MessageTemplate,
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

  const baseMethods: BaseMessageTemplatesMethods = {
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

  const service: MessageTemplatesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
