import {
  ListMetadata,
  MutationCreateMailingMessageArgs,
  MutationUpdateMailingMessageArgs,
  MutationRemoveMailingMessageArgs,
  QueryAllMailingMessagesArgs,
  Query_AllMailingMessagesMetaArgs,
  MailingMessage,
  MailingMessageFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalMailingMessagesMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutodefinableMailingMessageKeys = never;
export type ForbidenForUserMailingMessageKeys = never;
export type RequiredDbNotUserMailingMessageKeys = never;

export type AutodefinableMailingMessagePart = DefinedRecord<Pick<MutationCreateMailingMessageArgs, AutodefinableMailingMessageKeys>>;

export type ReliableMailingMessageCreateUserInput =
  Omit<MutationCreateMailingMessageArgs, ForbidenForUserMailingMessageKeys>
  & AutodefinableMailingMessagePart;

export type AllowedMailingMessageForUserCreateInput = Omit<MutationCreateMailingMessageArgs, ForbidenForUserMailingMessageKeys>;

export type StrictCreateMailingMessageArgs = DefinedFieldsInRecord<MutationCreateMailingMessageArgs, RequiredDbNotUserMailingMessageKeys> & AutodefinableMailingMessagePart;
export type StrictUpdateMailingMessageArgs = DefinedFieldsInRecord<MutationUpdateMailingMessageArgs, RequiredDbNotUserMailingMessageKeys> & AutodefinableMailingMessagePart;

export type StrictCreateMailingMessageArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMailingMessageArgs, AutodefinableMailingMessageKeys>;
export type MutationCreateMailingMessageArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMailingMessageArgs, AutodefinableMailingMessageKeys>;
export type MutationUpdateMailingMessageArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMailingMessageArgs, AutodefinableMailingMessageKeys>;

export interface BaseMailingMessagesMethods {
  get: (id: number) =>
    Promise<MailingMessage | null>;
  getRequired: (id: number) =>
    Promise<MailingMessage>;
  all: (params?: QueryAllMailingMessagesArgs) =>
    Promise<MailingMessage[]>;
  findOne: (params?: QueryAllMailingMessagesArgs) =>
    Promise<MailingMessage | null>;
  findOneRequired: (params?: QueryAllMailingMessagesArgs) =>
    Promise<MailingMessage>;
  count: (params?: Query_AllMailingMessagesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllMailingMessagesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateMailingMessageArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<MailingMessage>;
  createMany: (data: StrictCreateMailingMessageArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateMailingMessageArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<MailingMessage>;
  upsert: (
    data: PartialFieldsInRecord<MutationUpdateMailingMessageArgsWithoutAutodefinable, 'id'>,
    byUser?: boolean,
  ) =>
    Promise<MailingMessage>;
  upsertAdvanced: (
    filter: MailingMessageFilter,
    data: MutationCreateMailingMessageArgsWithoutAutodefinable,
    byUser?: boolean,
  ) =>
    Promise<MailingMessage>;
  delete: (params: MutationRemoveMailingMessageArgs) =>
    Promise<MailingMessage>;
}

export type MailingMessagesService = BaseMailingMessagesMethods
  & AdditionalMailingMessagesMethods
  & HooksAddType<
    MailingMessage,
    QueryAllMailingMessagesArgs,
    ReliableMailingMessageCreateUserInput,
    MutationUpdateMailingMessageArgs,
    MutationRemoveMailingMessageArgs,
    StrictCreateMailingMessageArgs,
    StrictUpdateMailingMessageArgs
  >;

const dateFieldsForSearch: string[] = [
  'dateCreated',
  'dateSent',
];

const otherFieldsForSearch: string[] = [
  'id',
  'mailingCampaignId',
  'templateId',
  'languageId',
  'to',
  'locals',
  'localsHash',
  'priority',
  'error',
  'html',
  'text',
  'uniqueKey',
  'subject',
  'mailingMessageStatusId',
  'messageTemplateLangVariantId',
];

export const getMailingMessagesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    MailingMessage,
    QueryAllMailingMessagesArgs,
    ReliableMailingMessageCreateUserInput,
    MutationUpdateMailingMessageArgs,
    MutationRemoveMailingMessageArgs,
    StrictCreateMailingMessageArgs,
    StrictUpdateMailingMessageArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableMailingMessagePart> => currentData as T & AutodefinableMailingMessagePart;

  const all = async (
    params: QueryAllMailingMessagesArgs = {},
  ): Promise<MailingMessage[]> => {
    return ctx.prisma.mailingMessage.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<MailingMessage[]>;
  };

  const findOne = async (
    params: QueryAllMailingMessagesArgs = {},
  ): Promise<MailingMessage | null> => {
    return ctx.prisma.mailingMessage.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params),
      {noId: false},
    ));
  };

  const findOneRequired = async (
    params: QueryAllMailingMessagesArgs = {},
  ): Promise<MailingMessage> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<MailingMessage | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<MailingMessage> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllMailingMessagesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.mailingMessage.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllMailingMessagesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateMailingMessageArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MailingMessage> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedMailingMessageForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableMailingMessageCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.mailingMessage.create({
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
      ctx.prisma.mailingMessage.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.MailingMessage,
        entityId: result.id,
        actionData: data,
      }),
    ]);

    await runHooks.afterCreate(ctx, result as MailingMessage);

    return result as MailingMessage;
  };

  const createMany = async (
    entries: StrictCreateMailingMessageArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateMailingMessageArgs[];

    const result = await ctx.prisma.mailingMessage.createMany({
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
    data: MutationUpdateMailingMessageArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MailingMessage> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMailingMessageArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.mailingMessage.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.MailingMessage,
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
      runHooks.afterUpdate(ctx, result as MailingMessage),
    ]);

    return result as MailingMessage;
  };

  const upsert = async (
    data: PartialFieldsInRecord<MutationUpdateMailingMessageArgsWithoutAutodefinable, 'id'>,
    byUser = false,
  ): Promise<MailingMessage> => {
    // Get db version
    const dbVersion = data.id ? await get(data.id) : null;

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMailingMessageArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as MailingMessage);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.mailingMessage.upsert({
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
    filter: MailingMessageFilter,
    data: MutationCreateMailingMessageArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MailingMessage> => {
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
    params: MutationRemoveMailingMessageArgs,
  ): Promise<MailingMessage> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.mailingMessage.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.MailingMessage,
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

  const baseMethods: BaseMailingMessagesMethods = {
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

  const service: MailingMessagesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
