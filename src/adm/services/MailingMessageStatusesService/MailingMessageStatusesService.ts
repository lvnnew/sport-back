import {
  ListMetadata,
  MutationCreateMailingMessageStatusArgs,
  MutationUpdateMailingMessageStatusArgs,
  MutationRemoveMailingMessageStatusArgs,
  QueryAllMailingMessageStatusesArgs,
  Query_AllMailingMessageStatusesMetaArgs,
  MailingMessageStatus,
  MailingMessageStatusFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalMailingMessageStatusesMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutodefinableMailingMessageStatusKeys = 'final';
export type ForbidenForUserMailingMessageStatusKeys = never;
export type RequiredDbNotUserMailingMessageStatusKeys = never;

export type AutodefinableMailingMessageStatusPart = DefinedRecord<Pick<MutationCreateMailingMessageStatusArgs, AutodefinableMailingMessageStatusKeys>>;

export type ReliableMailingMessageStatusCreateUserInput =
  Omit<MutationCreateMailingMessageStatusArgs, ForbidenForUserMailingMessageStatusKeys>
  & AutodefinableMailingMessageStatusPart;

export type AllowedMailingMessageStatusForUserCreateInput = Omit<MutationCreateMailingMessageStatusArgs, ForbidenForUserMailingMessageStatusKeys>;

export type StrictCreateMailingMessageStatusArgs = DefinedFieldsInRecord<MutationCreateMailingMessageStatusArgs, RequiredDbNotUserMailingMessageStatusKeys> & AutodefinableMailingMessageStatusPart;
export type StrictUpdateMailingMessageStatusArgs = DefinedFieldsInRecord<MutationUpdateMailingMessageStatusArgs, RequiredDbNotUserMailingMessageStatusKeys> & AutodefinableMailingMessageStatusPart;

export type StrictCreateMailingMessageStatusArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMailingMessageStatusArgs, AutodefinableMailingMessageStatusKeys>;
export type MutationCreateMailingMessageStatusArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMailingMessageStatusArgs, AutodefinableMailingMessageStatusKeys>;
export type MutationUpdateMailingMessageStatusArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMailingMessageStatusArgs, AutodefinableMailingMessageStatusKeys>;

export interface BaseMailingMessageStatusesMethods {
  get: (id: string) =>
    Promise<MailingMessageStatus | null>;
  getRequired: (id: string) =>
    Promise<MailingMessageStatus>;
  all: (params?: QueryAllMailingMessageStatusesArgs) =>
    Promise<MailingMessageStatus[]>;
  findOne: (params?: QueryAllMailingMessageStatusesArgs) =>
    Promise<MailingMessageStatus | null>;
  findOneRequired: (params?: QueryAllMailingMessageStatusesArgs) =>
    Promise<MailingMessageStatus>;
  count: (params?: Query_AllMailingMessageStatusesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllMailingMessageStatusesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateMailingMessageStatusArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<MailingMessageStatus>;
  createMany: (data: StrictCreateMailingMessageStatusArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateMailingMessageStatusArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<MailingMessageStatus>;
  upsert: (
    data: PartialFieldsInRecord<MutationUpdateMailingMessageStatusArgsWithoutAutodefinable, 'id'>,
    byUser?: boolean,
  ) =>
    Promise<MailingMessageStatus>;
  upsertAdvanced: (
    filter: MailingMessageStatusFilter,
    data: MutationCreateMailingMessageStatusArgsWithoutAutodefinable,
    byUser?: boolean,
  ) =>
    Promise<MailingMessageStatus>;
  delete: (params: MutationRemoveMailingMessageStatusArgs) =>
    Promise<MailingMessageStatus>;
}

export type MailingMessageStatusesService = BaseMailingMessageStatusesMethods
  & AdditionalMailingMessageStatusesMethods
  & HooksAddType<
    MailingMessageStatus,
    QueryAllMailingMessageStatusesArgs,
    ReliableMailingMessageStatusCreateUserInput,
    MutationUpdateMailingMessageStatusArgs,
    MutationRemoveMailingMessageStatusArgs,
    StrictCreateMailingMessageStatusArgs,
    StrictUpdateMailingMessageStatusArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [
  'id',
  'title',
];

export const getMailingMessageStatusesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    MailingMessageStatus,
    QueryAllMailingMessageStatusesArgs,
    ReliableMailingMessageStatusCreateUserInput,
    MutationUpdateMailingMessageStatusArgs,
    MutationRemoveMailingMessageStatusArgs,
    StrictCreateMailingMessageStatusArgs,
    StrictUpdateMailingMessageStatusArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableMailingMessageStatusPart> => {
    const defaultFieldConstructors = {
      final: async () => false,
    };

    const pairedConstructors = R.toPairs(defaultFieldConstructors);

    const resultedPairs: R.KeyValuePair<string, any>[] = [];
    for (const [key, constructor] of pairedConstructors) {
      resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
    }

    return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableMailingMessageStatusPart;
  };

  const all = async (
    params: QueryAllMailingMessageStatusesArgs = {},
  ): Promise<MailingMessageStatus[]> => {
    return ctx.prisma.mailingMessageStatus.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<MailingMessageStatus[]>;
  };

  const findOne = async (
    params: QueryAllMailingMessageStatusesArgs = {},
  ): Promise<MailingMessageStatus | null> => {
    return ctx.prisma.mailingMessageStatus.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params),
      {noId: false},
    ));
  };

  const findOneRequired = async (
    params: QueryAllMailingMessageStatusesArgs = {},
  ): Promise<MailingMessageStatus> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: string,
  ): Promise<MailingMessageStatus | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: string,
  ): Promise<MailingMessageStatus> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllMailingMessageStatusesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.mailingMessageStatus.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllMailingMessageStatusesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateMailingMessageStatusArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MailingMessageStatus> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedMailingMessageStatusForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableMailingMessageStatusCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.mailingMessageStatus.create({
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
      ctx.prisma.mailingMessageStatus.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.MailingMessageStatus,
        entityId: result.id,
        actionData: data,
      }),
    ]);

    await runHooks.afterCreate(ctx, result as MailingMessageStatus);

    return result as MailingMessageStatus;
  };

  const createMany = async (
    entries: StrictCreateMailingMessageStatusArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateMailingMessageStatusArgs[];

    const result = await ctx.prisma.mailingMessageStatus.createMany({
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
    data: MutationUpdateMailingMessageStatusArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MailingMessageStatus> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMailingMessageStatusArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.mailingMessageStatus.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.MailingMessageStatus,
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
      runHooks.afterUpdate(ctx, result as MailingMessageStatus),
    ]);

    return result as MailingMessageStatus;
  };

  const upsert = async (
    data: PartialFieldsInRecord<MutationUpdateMailingMessageStatusArgsWithoutAutodefinable, 'id'>,
    byUser = false,
  ): Promise<MailingMessageStatus> => {
    // Get db version
    const dbVersion = data.id ? await get(data.id) : null;

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMailingMessageStatusArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as MailingMessageStatus);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.mailingMessageStatus.upsert({
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
    filter: MailingMessageStatusFilter,
    data: MutationCreateMailingMessageStatusArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MailingMessageStatus> => {
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
    params: MutationRemoveMailingMessageStatusArgs,
  ): Promise<MailingMessageStatus> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.mailingMessageStatus.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.MailingMessageStatus,
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

  const baseMethods: BaseMailingMessageStatusesMethods = {
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

  const service: MailingMessageStatusesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
