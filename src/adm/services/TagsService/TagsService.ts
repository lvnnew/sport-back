import {
  ListMetadata,
  MutationCreateTagArgs,
  MutationUpdateTagArgs,
  MutationRemoveTagArgs,
  QueryAllTagsArgs,
  Query_AllTagsMetaArgs,
  Tag,
  TagFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalTagsMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutoDefinableTagKeys = never;
export type ForbidenForUserTagKeys = never;
export type RequiredDbNotUserTagKeys = never;

export type AutodefinableTagPart = DefinedRecord<Pick<MutationCreateTagArgs, AutoDefinableTagKeys>>;

export type ReliableTagCreateUserInput =
  Omit<MutationCreateTagArgs, ForbidenForUserTagKeys>
  & AutodefinableTagPart;

export type AllowedTagForUserCreateInput = Omit<MutationCreateTagArgs, ForbidenForUserTagKeys>;

export type StrictCreateTagArgs = DefinedFieldsInRecord<MutationCreateTagArgs, RequiredDbNotUserTagKeys> & AutodefinableTagPart;
export type StrictUpdateTagArgs = DefinedFieldsInRecord<MutationUpdateTagArgs, RequiredDbNotUserTagKeys> & AutodefinableTagPart;

export type StrictCreateTagArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateTagArgs, AutoDefinableTagKeys>;

export interface BaseTagsMethods {
  get: (id: number) =>
    Promise<Tag | null>;
  getRequired: (id: number) =>
    Promise<Tag>;
  all: (params?: QueryAllTagsArgs) =>
    Promise<Tag[]>;
  findOne: (params?: QueryAllTagsArgs) =>
    Promise<Tag | null>;
  findOneRequired: (params?: QueryAllTagsArgs) =>
    Promise<Tag>;
  count: (params?: Query_AllTagsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllTagsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateTagArgs, byUser?: boolean) =>
    Promise<Tag>;
  createMany: (data: StrictCreateTagArgsWithoutAutoDefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateTagArgs, byUser?: boolean) =>
    Promise<Tag>;
  upsert: (data: MutationUpdateTagArgs, byUser?: boolean) =>
    Promise<Tag>;
  upsertAdvanced: (
    filter: TagFilter,
    data: MutationCreateTagArgs,
    byUser?: boolean,
  ) =>
    Promise<Tag>;
  delete: (params: MutationRemoveTagArgs) =>
    Promise<Tag>;
}

export type TagsService = BaseTagsMethods
  & AdditionalTagsMethods
  & HooksAddType<
    Tag,
    QueryAllTagsArgs,
    ReliableTagCreateUserInput,
    MutationUpdateTagArgs,
    MutationRemoveTagArgs,
    StrictCreateTagArgs,
    StrictUpdateTagArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [];

export const getTagsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    Tag,
    QueryAllTagsArgs,
    ReliableTagCreateUserInput,
    MutationUpdateTagArgs,
    MutationRemoveTagArgs,
    StrictCreateTagArgs,
    StrictUpdateTagArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const getDefaultPart = async () => ({});

  const all = async (
    params: QueryAllTagsArgs = {},
  ): Promise<Tag[]> => {
    return ctx.prisma.tag.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<Tag[]>;
  };

  const findOne = async (
    params: QueryAllTagsArgs = {},
  ): Promise<Tag | null> => {
    return ctx.prisma.tag.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findOneRequired = async (
    params: QueryAllTagsArgs = {},
  ): Promise<Tag> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<Tag | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<Tag> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllTagsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.tag.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllTagsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateTagArgs,
    byUser = false,
  ): Promise<Tag> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedTagForUserCreateInput :
      data;

    // augment data by default fields
    const augmented = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

    const createOperation = ctx.prisma.tag.create({
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
      ctx.prisma.tag.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.Tag,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as Tag),
    ]);

    return result as Tag;
  };

  const createMany = async (
    entries: StrictCreateTagArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData = clearedData.map(data => R.mergeLeft(
      data,
      defaultPart,
    ) as StrictCreateTagArgs);

    const result = await ctx.prisma.tag.createMany({
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
    data: MutationUpdateTagArgs,
    byUser = false,
  ): Promise<Tag> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateTagArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.tag.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.Tag,
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
      runHooks.afterUpdate(ctx, result as Tag),
    ]);

    return result as Tag;
  };

  const upsert = async (
    data: MutationUpdateTagArgs,
    byUser = false,
  ): Promise<Tag> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateTagArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.tag.upsert({
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
    filter: TagFilter,
    data: MutationCreateTagArgs,
    byUser = false,
  ): Promise<Tag> => {
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
    params: MutationRemoveTagArgs,
  ): Promise<Tag> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.tag.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.Tag,
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

  const baseMethods: BaseTagsMethods = {
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

  const service: TagsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
