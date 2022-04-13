import {
  ListMetadata,
  MutationCreateMessageTypeArgs,
  MutationUpdateMessageTypeArgs,
  MutationRemoveMessageTypeArgs,
  QueryAllMessageTypesArgs,
  Query_AllMessageTypesMetaArgs,
  MessageType,
  MessageTypeFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalMessageTypesMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutodefinableMessageTypeKeys = never;
export type ForbidenForUserMessageTypeKeys = never;
export type RequiredDbNotUserMessageTypeKeys = never;

export type AutodefinableMessageTypePart = DefinedRecord<Pick<MutationCreateMessageTypeArgs, AutodefinableMessageTypeKeys>>;

export type ReliableMessageTypeCreateUserInput =
  Omit<MutationCreateMessageTypeArgs, ForbidenForUserMessageTypeKeys>
  & AutodefinableMessageTypePart;

export type AllowedMessageTypeForUserCreateInput = Omit<MutationCreateMessageTypeArgs, ForbidenForUserMessageTypeKeys>;

export type StrictCreateMessageTypeArgs = DefinedFieldsInRecord<MutationCreateMessageTypeArgs, RequiredDbNotUserMessageTypeKeys> & AutodefinableMessageTypePart;
export type StrictUpdateMessageTypeArgs = DefinedFieldsInRecord<MutationUpdateMessageTypeArgs, RequiredDbNotUserMessageTypeKeys> & AutodefinableMessageTypePart;

export type StrictCreateMessageTypeArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMessageTypeArgs, AutodefinableMessageTypeKeys>;

export interface BaseMessageTypesMethods {
  get: (id: string) =>
    Promise<MessageType | null>;
  getRequired: (id: string) =>
    Promise<MessageType>;
  all: (params?: QueryAllMessageTypesArgs) =>
    Promise<MessageType[]>;
  findOne: (params?: QueryAllMessageTypesArgs) =>
    Promise<MessageType | null>;
  findOneRequired: (params?: QueryAllMessageTypesArgs) =>
    Promise<MessageType>;
  count: (params?: Query_AllMessageTypesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllMessageTypesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateMessageTypeArgs, byUser?: boolean) =>
    Promise<MessageType>;
  createMany: (data: StrictCreateMessageTypeArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateMessageTypeArgs, byUser?: boolean) =>
    Promise<MessageType>;
  upsert: (data: MutationUpdateMessageTypeArgs, byUser?: boolean) =>
    Promise<MessageType>;
  upsertAdvanced: (
    filter: MessageTypeFilter,
    data: MutationCreateMessageTypeArgs,
    byUser?: boolean,
  ) =>
    Promise<MessageType>;
  delete: (params: MutationRemoveMessageTypeArgs) =>
    Promise<MessageType>;
}

export type MessageTypesService = BaseMessageTypesMethods
  & AdditionalMessageTypesMethods
  & HooksAddType<
    MessageType,
    QueryAllMessageTypesArgs,
    ReliableMessageTypeCreateUserInput,
    MutationUpdateMessageTypeArgs,
    MutationRemoveMessageTypeArgs,
    StrictCreateMessageTypeArgs,
    StrictUpdateMessageTypeArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [];

export const getMessageTypesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    MessageType,
    QueryAllMessageTypesArgs,
    ReliableMessageTypeCreateUserInput,
    MutationUpdateMessageTypeArgs,
    MutationRemoveMessageTypeArgs,
    StrictCreateMessageTypeArgs,
    StrictUpdateMessageTypeArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(currentData: Record<string, any>): Promise<T & AutodefinableMessageTypePart> => currentData as T;

  const all = async (
    params: QueryAllMessageTypesArgs = {},
  ): Promise<MessageType[]> => {
    return ctx.prisma.messageType.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<MessageType[]>;
  };

  const findOne = async (
    params: QueryAllMessageTypesArgs = {},
  ): Promise<MessageType | null> => {
    return ctx.prisma.messageType.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findOneRequired = async (
    params: QueryAllMessageTypesArgs = {},
  ): Promise<MessageType> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: string,
  ): Promise<MessageType | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: string,
  ): Promise<MessageType> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllMessageTypesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.messageType.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllMessageTypesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateMessageTypeArgs,
    byUser = false,
  ): Promise<MessageType> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedMessageTypeForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableMessageTypeCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.messageType.create({
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
      ctx.prisma.messageType.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.MessageType,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as MessageType),
    ]);

    return result as MessageType;
  };

  const createMany = async (
    entries: StrictCreateMessageTypeArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(clearedData);

    // augment data by default fields
    const augmentedData = clearedData.map(data => R.mergeLeft(
      data,
      augmentedByDefault,
    ) as StrictCreateMessageTypeArgs);

    const result = await ctx.prisma.messageType.createMany({
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
    data: MutationUpdateMessageTypeArgs,
    byUser = false,
  ): Promise<MessageType> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMessageTypeArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.messageType.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.MessageType,
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
      runHooks.afterUpdate(ctx, result as MessageType),
    ]);

    return result as MessageType;
  };

  const upsert = async (
    data: MutationUpdateMessageTypeArgs,
    byUser = false,
  ): Promise<MessageType> => {
    // Get db version
    const dbVersion = await get(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMessageTypeArgs = R.mergeLeft(augmentedByDefault, dbVersion || {} as MessageType);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.messageType.upsert({
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
    filter: MessageTypeFilter,
    data: MutationCreateMessageTypeArgs,
    byUser = false,
  ): Promise<MessageType> => {
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
    params: MutationRemoveMessageTypeArgs,
  ): Promise<MessageType> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.messageType.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.MessageType,
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

  const baseMethods: BaseMessageTypesMethods = {
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

  const service: MessageTypesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
