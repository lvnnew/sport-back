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
import {DefinedFieldsInRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type AutoDefinableMessageTypeKeys = never;
export type AutoDefinableMessageTypePart = MutationCreateMessageTypeArgs;
export type MutationCreateMessageTypeArgsWithAutoDefinable = AutoDefinableMessageTypePart & MutationCreateMessageTypeArgs;
export type MutationCreateMessageTypeArgsWithoutAutoDefinable = Omit<MutationCreateMessageTypeArgs, AutoDefinableMessageTypeKeys>;

export type StrictUpdateMessageTypeArgs = DefinedFieldsInRecord<MutationUpdateMessageTypeArgs, AutoDefinableMessageTypeKeys>;
export type StrictCreateMessageTypeArgs = DefinedFieldsInRecord<MutationCreateMessageTypeArgs, AutoDefinableMessageTypeKeys>;

export type StrictCreateMessageTypeArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateMessageTypeArgs, AutoDefinableMessageTypeKeys>;

export interface BaseMessageTypesMethods {
  get: (id: string) =>
    Promise<MessageType | null>;
  all: (params?: QueryAllMessageTypesArgs) =>
    Promise<MessageType[]>;
  findOne: (params?: QueryAllMessageTypesArgs) =>
    Promise<MessageType | null>;
  count: (params?: Query_AllMessageTypesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllMessageTypesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateMessageTypeArgs, byUser?: boolean) =>
    Promise<MessageType>;
  createMany: (data: StrictCreateMessageTypeArgsWithoutAutoDefinable[], byUser?: boolean) =>
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
    MutationCreateMessageTypeArgsWithAutoDefinable,
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
    MutationCreateMessageTypeArgsWithAutoDefinable,
    MutationUpdateMessageTypeArgs,
    MutationRemoveMessageTypeArgs,
    StrictCreateMessageTypeArgs,
    StrictUpdateMessageTypeArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const getDefaultPart = () => ({});

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

  const findRequired = async (
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
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as MutationCreateMessageTypeArgsWithoutAutoDefinable :
      data;

    // augment data by default fields
    const augmented: MutationCreateMessageTypeArgsWithAutoDefinable = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

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
    entries: StrictCreateMessageTypeArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData =
      clearedData.map(data => R.mergeLeft(data, defaultPart) as MutationCreateMessageTypeArgsWithAutoDefinable);

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
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateMessageTypeArgs = R.mergeLeft(cleared, augmentationBase);

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
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateMessageTypeArgs = R.mergeLeft(cleared, augmentationBase);

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
    }

    // Compose object for augmentation
    const dbVersion = await findRequired({filter});
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateMessageTypeArgs = R.mergeLeft(cleared, augmentationBase);

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

  const service: MessageTypesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
