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
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalFilesMethods, getAdditionalMethods} from './additionalMethods';
import {additionalOperationsOnCreate} from './hooks/additionalOperationsOnCreate';
import {additionalOperationsOnUpdate} from './hooks/additionalOperationsOnUpdate';
import {additionalOperationsOnDelete} from './hooks/additionalOperationsOnDelete';
import {beforeCreate} from './hooks/beforeCreate';
import {beforeUpdate} from './hooks/beforeUpdate';
import {afterCreate} from './hooks/afterCreate';
import {afterUpdate} from './hooks/afterUpdate';
import {afterDelete} from './hooks/afterDelete';
import * as R from 'ramda';

// DO NOT EDIT! THIS IS GENERATED FILE

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
  createMany: (data: MutationCreateFileArgs[], byUser?: boolean) =>
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

export type FilesService = BaseFilesMethods & AdditionalFilesMethods;

export const getFilesService = (getCtx: () => Context) => {
  const get = async (
    id: number,
  ): Promise<File | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.file.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllFilesArgs = {},
  ): Promise<File[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.file.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<File[]>;
  };

  const findOne = async (
    params: QueryAllFilesArgs = {},
  ): Promise<File | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.file.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllFilesMetaArgs = {},
  ): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.file.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllFilesMetaArgs = {},
  ): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateFileArgs,
    byUser = false,
  ): Promise<File> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.file.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'originalName',
                  'url',
                  'mimetype',
                  's3Key',
                  'eTag',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ].join(' '),
        },
      ),
    });

    const operations = [
      createOperation,
      ...(await additionalOperationsOnCreate(getCtx, processedData)),
    ];

    const [result] = await getCtx().prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    // update search. earlier we does not have id
    await getCtx().prisma.file.update({
      where: {id: result.id},
      data: {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'originalName',
                'url',
                'mimetype',
                's3Key',
                'eTag',
              ], result),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    });

    await afterCreate(getCtx, result as File);

    return result as File;
  };

  const createMany = async (
    entries: MutationCreateFileArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await getCtx().prisma.file.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'originalName',
                  'url',
                  'mimetype',
                  's3Key',
                  'eTag',
                ], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ].join(' '),
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
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    let processedData = data;

    if (byUser) {
      processedData = R.omit(
        [],
        processedData,
      );
    }

    processedData = await beforeUpdate(getCtx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.file.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'originalName',
                  'url',
                  'mimetype',
                  's3Key',
                  'eTag',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ].join(' '),
        },
      ),
      where: {id},
    });

    const operations = [
      updateOperation,
      ...(await additionalOperationsOnUpdate(getCtx, processedData)),
    ];

    const [result] = await getCtx().prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await afterUpdate(getCtx, result as File);

    return result as File;
  };

  const upsert = async (
    data: MutationUpdateFileArgs,
    byUser = false,
  ): Promise<File> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    let processedDataToCreate = data;
    let processedDataToUpdate = data;

    if (byUser) {
      processedDataToCreate = R.mergeDeepLeft(
        {},
        processedDataToCreate,
      );

      processedDataToUpdate = R.omit(
        [],
        processedDataToUpdate,
      );
    }

    const result = await getCtx().prisma.file.upsert({create: R.mergeDeepLeft(
      processedDataToCreate,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'originalName',
                'url',
                'mimetype',
                's3Key',
                'eTag',
              ], processedDataToCreate),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    ), update: R.mergeDeepLeft(
      processedDataToUpdate,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'originalName',
                'url',
                'mimetype',
                's3Key',
                'eTag',
              ], processedDataToUpdate),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    ), where: {id: data.id}});

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
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    let processedDataToCreate = data;
    let processedDataToUpdate = data;

    if (byUser) {
      processedDataToCreate = R.mergeDeepLeft(
        {},
        processedDataToCreate,
      );

      processedDataToUpdate = R.omit(
        [],
        processedDataToUpdate,
      );
    }

    const cnt = await count({filter});

    if (cnt > 1) {
      throw new Error(`There is more then one entity (${cnt}) that fits filter "${JSON.stringify(filter)}"`);
    }

    if (cnt === 0) {
      return create(processedDataToCreate, false);
    } else {
      const current = await findOne({filter});

      if (!current) {
        return create(processedDataToCreate, false);
      }

      return update({
        ...processedDataToUpdate,
        id: current.id,
      },
      false);
    }
  };

  const del = async (
    params: MutationRemoveFileArgs,
  ): Promise<File> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.file.delete({where: {id: params.id}});

    const operations = [
      deleteOperation,
      ...(await additionalOperationsOnDelete(getCtx, params)),
    ];

    const entity = await get(params.id);

    if (!entity) {
      throw new Error(`There is no entity with "${params.id}" id`);
    }

    const [result] = await getCtx().prisma.$transaction(operations as any);

    if (!result) {
      throw new Error('There is no such entity');
    }

    await afterDelete(getCtx, entity);

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

  const additionalMethods = getAdditionalMethods(getCtx, baseMethods);

  return {
    ...baseMethods,
    ...additionalMethods,
  };
};
