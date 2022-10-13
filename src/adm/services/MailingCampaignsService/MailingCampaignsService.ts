import {
  ListMetadata,
  MutationCreateMailingCampaignArgs,
  MutationUpdateMailingCampaignArgs,
  MutationRemoveMailingCampaignArgs,
  QueryAllMailingCampaignsArgs,
  Query_AllMailingCampaignsMetaArgs,
  MailingCampaign,
  MailingCampaignFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalMailingCampaignsMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutodefinableMailingCampaignKeys = never;
export type ForbidenForUserMailingCampaignKeys = never;
export type RequiredDbNotUserMailingCampaignKeys = never;

export type AutodefinableMailingCampaignPart = DefinedRecord<Pick<MutationCreateMailingCampaignArgs, AutodefinableMailingCampaignKeys>>;

export type ReliableMailingCampaignCreateUserInput =
  Omit<MutationCreateMailingCampaignArgs, ForbidenForUserMailingCampaignKeys>
  & AutodefinableMailingCampaignPart;

export type AllowedMailingCampaignForUserCreateInput = Omit<MutationCreateMailingCampaignArgs, ForbidenForUserMailingCampaignKeys>;

export type StrictCreateMailingCampaignArgs = DefinedFieldsInRecord<MutationCreateMailingCampaignArgs, RequiredDbNotUserMailingCampaignKeys> & AutodefinableMailingCampaignPart;
export type StrictUpdateMailingCampaignArgs = DefinedFieldsInRecord<MutationUpdateMailingCampaignArgs, RequiredDbNotUserMailingCampaignKeys> & AutodefinableMailingCampaignPart;

export type StrictCreateMailingCampaignArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMailingCampaignArgs, AutodefinableMailingCampaignKeys>;
export type MutationCreateMailingCampaignArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMailingCampaignArgs, AutodefinableMailingCampaignKeys>;
export type MutationUpdateMailingCampaignArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMailingCampaignArgs, AutodefinableMailingCampaignKeys>;

export interface BaseMailingCampaignsMethods {
  get: (id: number) =>
    Promise<MailingCampaign | null>;
  getRequired: (id: number) =>
    Promise<MailingCampaign>;
  all: (params?: QueryAllMailingCampaignsArgs) =>
    Promise<MailingCampaign[]>;
  findOne: (params?: QueryAllMailingCampaignsArgs) =>
    Promise<MailingCampaign | null>;
  findOneRequired: (params?: QueryAllMailingCampaignsArgs) =>
    Promise<MailingCampaign>;
  count: (params?: Query_AllMailingCampaignsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllMailingCampaignsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateMailingCampaignArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<MailingCampaign>;
  createMany: (data: StrictCreateMailingCampaignArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateMailingCampaignArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<MailingCampaign>;
  upsert: (
    data: PartialFieldsInRecord<MutationUpdateMailingCampaignArgsWithoutAutodefinable, 'id'>,
    byUser?: boolean,
  ) =>
    Promise<MailingCampaign>;
  upsertAdvanced: (
    filter: MailingCampaignFilter,
    data: MutationCreateMailingCampaignArgsWithoutAutodefinable,
    byUser?: boolean,
  ) =>
    Promise<MailingCampaign>;
  delete: (params: MutationRemoveMailingCampaignArgs) =>
    Promise<MailingCampaign>;
}

export type MailingCampaignsService = BaseMailingCampaignsMethods
  & AdditionalMailingCampaignsMethods
  & HooksAddType<
    MailingCampaign,
    QueryAllMailingCampaignsArgs,
    ReliableMailingCampaignCreateUserInput,
    MutationUpdateMailingCampaignArgs,
    MutationRemoveMailingCampaignArgs,
    StrictCreateMailingCampaignArgs,
    StrictUpdateMailingCampaignArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [
  'id',
  'title',
  'mailingTypeId',
  'priority',
];

export const getMailingCampaignsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    MailingCampaign,
    QueryAllMailingCampaignsArgs,
    ReliableMailingCampaignCreateUserInput,
    MutationUpdateMailingCampaignArgs,
    MutationRemoveMailingCampaignArgs,
    StrictCreateMailingCampaignArgs,
    StrictUpdateMailingCampaignArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableMailingCampaignPart> => currentData as T & AutodefinableMailingCampaignPart;

  const all = async (
    params: QueryAllMailingCampaignsArgs = {},
  ): Promise<MailingCampaign[]> => {
    return ctx.prisma.mailingCampaign.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<MailingCampaign[]>;
  };

  const findOne = async (
    params: QueryAllMailingCampaignsArgs = {},
  ): Promise<MailingCampaign | null> => {
    return ctx.prisma.mailingCampaign.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params),
      {noId: false},
    ));
  };

  const findOneRequired = async (
    params: QueryAllMailingCampaignsArgs = {},
  ): Promise<MailingCampaign> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<MailingCampaign | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<MailingCampaign> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllMailingCampaignsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.mailingCampaign.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllMailingCampaignsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateMailingCampaignArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MailingCampaign> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedMailingCampaignForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableMailingCampaignCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.mailingCampaign.create({
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
      ctx.prisma.mailingCampaign.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.MailingCampaign,
        entityId: result.id,
        actionData: data,
      }),
    ]);

    await runHooks.afterCreate(ctx, result as MailingCampaign);

    return result as MailingCampaign;
  };

  const createMany = async (
    entries: StrictCreateMailingCampaignArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateMailingCampaignArgs[];

    const result = await ctx.prisma.mailingCampaign.createMany({
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
    data: MutationUpdateMailingCampaignArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MailingCampaign> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMailingCampaignArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.mailingCampaign.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.MailingCampaign,
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
      runHooks.afterUpdate(ctx, result as MailingCampaign),
    ]);

    return result as MailingCampaign;
  };

  const upsert = async (
    data: PartialFieldsInRecord<MutationUpdateMailingCampaignArgsWithoutAutodefinable, 'id'>,
    byUser = false,
  ): Promise<MailingCampaign> => {
    // Get db version
    const dbVersion = data.id ? await get(data.id) : null;

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMailingCampaignArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as MailingCampaign);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.mailingCampaign.upsert({
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
    filter: MailingCampaignFilter,
    data: MutationCreateMailingCampaignArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MailingCampaign> => {
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
    params: MutationRemoveMailingCampaignArgs,
  ): Promise<MailingCampaign> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.mailingCampaign.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.MailingCampaign,
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

  const baseMethods: BaseMailingCampaignsMethods = {
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

  const service: MailingCampaignsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
