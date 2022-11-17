import {
  ListMetadata,
  MutationCreateMailingCampaignStatusArgs,
  MutationUpdateMailingCampaignStatusArgs,
  MutationRemoveMailingCampaignStatusArgs,
  QueryAllMailingCampaignStatusesArgs,
  Query_AllMailingCampaignStatusesMetaArgs,
  MailingCampaignStatus,
  MailingCampaignStatusFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalMailingCampaignStatusesMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutodefinableMailingCampaignStatusKeys = never;
export type ForbidenForUserMailingCampaignStatusKeys = never;
export type RequiredDbNotUserMailingCampaignStatusKeys = never;

export type AutodefinableMailingCampaignStatusPart = DefinedRecord<Pick<MutationCreateMailingCampaignStatusArgs, AutodefinableMailingCampaignStatusKeys>>;

export type ReliableMailingCampaignStatusCreateUserInput =
  Omit<MutationCreateMailingCampaignStatusArgs, ForbidenForUserMailingCampaignStatusKeys>
  & AutodefinableMailingCampaignStatusPart;

export type AllowedMailingCampaignStatusForUserCreateInput = Omit<MutationCreateMailingCampaignStatusArgs, ForbidenForUserMailingCampaignStatusKeys>;

export type StrictCreateMailingCampaignStatusArgs = DefinedFieldsInRecord<MutationCreateMailingCampaignStatusArgs, RequiredDbNotUserMailingCampaignStatusKeys> & AutodefinableMailingCampaignStatusPart;
export type StrictUpdateMailingCampaignStatusArgs = DefinedFieldsInRecord<MutationUpdateMailingCampaignStatusArgs, RequiredDbNotUserMailingCampaignStatusKeys> & AutodefinableMailingCampaignStatusPart;

export type StrictCreateMailingCampaignStatusArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMailingCampaignStatusArgs, AutodefinableMailingCampaignStatusKeys>;
export type MutationCreateMailingCampaignStatusArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMailingCampaignStatusArgs, AutodefinableMailingCampaignStatusKeys>;
export type MutationUpdateMailingCampaignStatusArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMailingCampaignStatusArgs, AutodefinableMailingCampaignStatusKeys>;

export interface BaseMailingCampaignStatusesMethods {
  get: (id: string) =>
    Promise<MailingCampaignStatus | null>;
  getRequired: (id: string) =>
    Promise<MailingCampaignStatus>;
  all: (params?: QueryAllMailingCampaignStatusesArgs) =>
    Promise<MailingCampaignStatus[]>;
  findOne: (params?: QueryAllMailingCampaignStatusesArgs) =>
    Promise<MailingCampaignStatus | null>;
  findOneRequired: (params?: QueryAllMailingCampaignStatusesArgs) =>
    Promise<MailingCampaignStatus>;
  count: (params?: Query_AllMailingCampaignStatusesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllMailingCampaignStatusesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateMailingCampaignStatusArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<MailingCampaignStatus>;
  createMany: (data: StrictCreateMailingCampaignStatusArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateMailingCampaignStatusArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<MailingCampaignStatus>;
  upsert: (
    data: PartialFieldsInRecord<MutationUpdateMailingCampaignStatusArgsWithoutAutodefinable, 'id'>,
    byUser?: boolean,
  ) =>
    Promise<MailingCampaignStatus>;
  upsertAdvanced: (
    filter: MailingCampaignStatusFilter,
    data: MutationCreateMailingCampaignStatusArgsWithoutAutodefinable,
    byUser?: boolean,
  ) =>
    Promise<MailingCampaignStatus>;
  delete: (params: MutationRemoveMailingCampaignStatusArgs) =>
    Promise<MailingCampaignStatus>;
}

export type MailingCampaignStatusesService = BaseMailingCampaignStatusesMethods
  & AdditionalMailingCampaignStatusesMethods
  & HooksAddType<
    MailingCampaignStatus,
    QueryAllMailingCampaignStatusesArgs,
    ReliableMailingCampaignStatusCreateUserInput,
    MutationUpdateMailingCampaignStatusArgs,
    MutationRemoveMailingCampaignStatusArgs,
    StrictCreateMailingCampaignStatusArgs,
    StrictUpdateMailingCampaignStatusArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [
  'id',
  'title',
];

export const getMailingCampaignStatusesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    MailingCampaignStatus,
    QueryAllMailingCampaignStatusesArgs,
    ReliableMailingCampaignStatusCreateUserInput,
    MutationUpdateMailingCampaignStatusArgs,
    MutationRemoveMailingCampaignStatusArgs,
    StrictCreateMailingCampaignStatusArgs,
    StrictUpdateMailingCampaignStatusArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableMailingCampaignStatusPart> => currentData as T & AutodefinableMailingCampaignStatusPart;

  const all = async (
    params: QueryAllMailingCampaignStatusesArgs = {},
  ): Promise<MailingCampaignStatus[]> => {
    return ctx.prisma.mailingCampaignStatus.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<MailingCampaignStatus[]>;
  };

  const findOne = async (
    params: QueryAllMailingCampaignStatusesArgs = {},
  ): Promise<MailingCampaignStatus | null> => {
    return ctx.prisma.mailingCampaignStatus.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params),
      {noId: false},
    ));
  };

  const findOneRequired = async (
    params: QueryAllMailingCampaignStatusesArgs = {},
  ): Promise<MailingCampaignStatus> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: string,
  ): Promise<MailingCampaignStatus | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: string,
  ): Promise<MailingCampaignStatus> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllMailingCampaignStatusesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.mailingCampaignStatus.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllMailingCampaignStatusesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateMailingCampaignStatusArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MailingCampaignStatus> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedMailingCampaignStatusForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableMailingCampaignStatusCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.mailingCampaignStatus.create({
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
      ctx.prisma.mailingCampaignStatus.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.MailingCampaignStatus,
        entityId: result.id,
        actionData: data,
      }),
    ]);

    await runHooks.afterCreate(ctx, result as MailingCampaignStatus);

    return result as MailingCampaignStatus;
  };

  const createMany = async (
    entries: StrictCreateMailingCampaignStatusArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateMailingCampaignStatusArgs[];

    const result = await ctx.prisma.mailingCampaignStatus.createMany({
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
    data: MutationUpdateMailingCampaignStatusArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MailingCampaignStatus> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMailingCampaignStatusArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.mailingCampaignStatus.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.MailingCampaignStatus,
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
      runHooks.afterUpdate(ctx, result as MailingCampaignStatus),
    ]);

    return result as MailingCampaignStatus;
  };

  const upsert = async (
    data: PartialFieldsInRecord<MutationUpdateMailingCampaignStatusArgsWithoutAutodefinable, 'id'>,
    byUser = false,
  ): Promise<MailingCampaignStatus> => {
    // Get db version
    const dbVersion = data.id ? await get(data.id) : null;

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateMailingCampaignStatusArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as MailingCampaignStatus);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.mailingCampaignStatus.upsert({
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
    filter: MailingCampaignStatusFilter,
    data: MutationCreateMailingCampaignStatusArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<MailingCampaignStatus> => {
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
    params: MutationRemoveMailingCampaignStatusArgs,
  ): Promise<MailingCampaignStatus> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.mailingCampaignStatus.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.MailingCampaignStatus,
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

  const baseMethods: BaseMailingCampaignStatusesMethods = {
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

  const service: MailingCampaignStatusesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
