import {
  ListMetadata,
  MutationCreateFileArgs,
  MutationUpdateFileArgs,
  MutationRemoveFileArgs,
  QueryAllFilesArgs,
  Query_AllFilesMetaArgs,
  File,
  FileFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalFilesMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutoDefinableFileKeys = never;
export type AutoDefinableFilePart = MutationCreateFileArgs;
export type MutationCreateFileArgsWithAutoDefinable = AutoDefinableFilePart & MutationCreateFileArgs;
export type MutationCreateFileArgsWithoutAutoDefinable = Omit<MutationCreateFileArgs, AutoDefinableFileKeys>;

export type StrictUpdateFileArgs = DefinedFieldsInRecord<MutationUpdateFileArgs, AutoDefinableFileKeys>;
export type StrictCreateFileArgs = DefinedFieldsInRecord<MutationCreateFileArgs, AutoDefinableFileKeys>;

export type StrictCreateFileArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateFileArgs, AutoDefinableFileKeys>;

export interface BaseFilesMethods {
  get: (id: number) =>
    Promise<File | null>;
  all: (params?: QueryAllFilesArgs) =>
    Promise<File[]>;
  findOne: (params?: QueryAllFilesArgs) =>
    Promise<File | null>;
  count: (params?: Query_AllFilesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllFilesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateFileArgs, byUser?: boolean) =>
    Promise<File>;
  createMany: (data: StrictCreateFileArgsWithoutAutoDefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateFileArgs, byUser?: boolean) =>
    Promise<File>;
  upsert: (data: MutationUpdateFileArgs, byUser?: boolean) =>
    Promise<File>;
  upsertAdvanced: (
    filter: FileFilter,
    data: MutationCreateFileArgs,
    byUser?: boolean,
  ) =>
    Promise<File>;
  delete: (params: MutationRemoveFileArgs) =>
    Promise<File>;
}

export type FilesService = BaseFilesMethods
  & AdditionalFilesMethods
  & HooksAddType<
    File,
    QueryAllFilesArgs,
    MutationCreateFileArgsWithAutoDefinable,
    MutationUpdateFileArgs,
    MutationRemoveFileArgs,
    StrictCreateFileArgs,
    StrictUpdateFileArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [];

export const getFilesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    File,
    QueryAllFilesArgs,
    MutationCreateFileArgsWithAutoDefinable,
    MutationUpdateFileArgs,
    MutationRemoveFileArgs,
    StrictCreateFileArgs,
    StrictUpdateFileArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const getDefaultPart = () => ({});

  const all = async (
    params: QueryAllFilesArgs = {},
  ): Promise<File[]> => {
    return ctx.prisma.file.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<File[]>;
  };

  const findOne = async (
    params: QueryAllFilesArgs = {},
  ): Promise<File | null> => {
    return ctx.prisma.file.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findRequired = async (
    params: QueryAllFilesArgs = {},
  ): Promise<File> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<File | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<File> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllFilesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.file.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllFilesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateFileArgs,
    byUser = false,
  ): Promise<File> => {
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as MutationCreateFileArgsWithoutAutoDefinable :
      data;

    // augment data by default fields
    const augmented: MutationCreateFileArgsWithAutoDefinable = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

    const createOperation = ctx.prisma.file.create({
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
      ctx.prisma.file.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.File,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as File),
    ]);

    return result as File;
  };

  const createMany = async (
    entries: StrictCreateFileArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData =
      clearedData.map(data => R.mergeLeft(data, defaultPart) as MutationCreateFileArgsWithAutoDefinable);

    const result = await ctx.prisma.file.createMany({
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
    data: MutationUpdateFileArgs,
    byUser = false,
  ): Promise<File> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateFileArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.file.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.File,
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
      runHooks.afterUpdate(ctx, result as File),
    ]);

    return result as File;
  };

  const upsert = async (
    data: MutationUpdateFileArgs,
    byUser = false,
  ): Promise<File> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateFileArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.file.upsert({
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
    filter: FileFilter,
    data: MutationCreateFileArgs,
    byUser = false,
  ): Promise<File> => {
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
    const augmented: StrictUpdateFileArgs = R.mergeLeft(cleared, augmentationBase);

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
    params: MutationRemoveFileArgs,
  ): Promise<File> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.file.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.File,
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

  const baseMethods: BaseFilesMethods = {
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

  const service: FilesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
