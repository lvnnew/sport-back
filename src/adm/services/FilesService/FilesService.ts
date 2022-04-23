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
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type AutodefinableFileKeys = never;
export type ForbidenForUserFileKeys = never;
export type RequiredDbNotUserFileKeys = never;

export type AutodefinableFilePart = DefinedRecord<Pick<MutationCreateFileArgs, AutodefinableFileKeys>>;

export type ReliableFileCreateUserInput =
  Omit<MutationCreateFileArgs, ForbidenForUserFileKeys>
  & AutodefinableFilePart;

export type AllowedFileForUserCreateInput = Omit<MutationCreateFileArgs, ForbidenForUserFileKeys>;

export type StrictCreateFileArgs = DefinedFieldsInRecord<MutationCreateFileArgs, RequiredDbNotUserFileKeys> & AutodefinableFilePart;
export type StrictUpdateFileArgs = DefinedFieldsInRecord<MutationUpdateFileArgs, RequiredDbNotUserFileKeys> & AutodefinableFilePart;

export type StrictCreateFileArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateFileArgs, AutodefinableFileKeys>;
export type MutationCreateFileArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateFileArgs, AutodefinableFileKeys>;
export type MutationUpdateFileArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateFileArgs, AutodefinableFileKeys>;

export interface BaseFilesMethods {
  get: (id: number) =>
    Promise<File | null>;
  getRequired: (id: number) =>
    Promise<File>;
  all: (params?: QueryAllFilesArgs) =>
    Promise<File[]>;
  findOne: (params?: QueryAllFilesArgs) =>
    Promise<File | null>;
  findOneRequired: (params?: QueryAllFilesArgs) =>
    Promise<File>;
  count: (params?: Query_AllFilesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllFilesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateFileArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<File>;
  createMany: (data: StrictCreateFileArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateFileArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<File>;
  upsert: (data: MutationUpdateFileArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<File>;
  upsertAdvanced: (
    filter: FileFilter,
    data: MutationCreateFileArgsWithoutAutodefinable,
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
    ReliableFileCreateUserInput,
    MutationUpdateFileArgs,
    MutationRemoveFileArgs,
    StrictCreateFileArgs,
    StrictUpdateFileArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [
  'id',
  'originalName',
  'url',
  'mimetype',
  's3Key',
  'eTag',
];

export const getFilesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    File,
    QueryAllFilesArgs,
    ReliableFileCreateUserInput,
    MutationUpdateFileArgs,
    MutationRemoveFileArgs,
    StrictCreateFileArgs,
    StrictUpdateFileArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableFilePart> => currentData as T;

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

  const findOneRequired = async (
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
    data: MutationCreateFileArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<File> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedFileForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableFileCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

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
    entries: StrictCreateFileArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateFileArgs[];

    const result = await ctx.prisma.file.createMany({
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
    data: MutationUpdateFileArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<File> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateFileArgs = R.mergeLeft(augmentedByDefault, dbVersion);

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
    data: MutationUpdateFileArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<File> => {
    // Get db version
    const dbVersion = await get(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateFileArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as File);

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
    data: MutationCreateFileArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<File> => {
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

  const service: FilesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
