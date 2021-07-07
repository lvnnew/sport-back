/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
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
import {AgrContext} from '../context';
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
import R from 'ramda';

// DO NOT EDIT! THIS IS GENERATED FILE

export interface BaseFilesMethods {
  get: (id: number) => Promise<File | null>;
  all: (params?: QueryAllFilesArgs) => Promise<File[]>;
  findOne: (params?: QueryAllFilesArgs) => Promise<File | null>;
  count: (params?: Query_AllFilesMetaArgs) => Promise<number>;
  meta: (params?: Query_AllFilesMetaArgs) => Promise<ListMetadata>;
  create: (data: MutationCreateFileArgs) => Promise<File>;
  createMany: (data: MutationCreateFileArgs[]) => Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateFileArgs) => Promise<File>;
  upsert: (data: MutationUpdateFileArgs) => Promise<File>;
  upsertAdvansed: (filter: FileFilter, data: MutationCreateFileArgs) => Promise<File>;
  delete: (params: MutationRemoveFileArgs) => Promise<boolean>;
}

export type FilesService = BaseFilesMethods & AdditionalFilesMethods;

export const getFilesService = (getCtx: () => AgrContext) => {
  const get = async (id: number): Promise<File | null> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return getCtx().prisma.file.findUnique({where: {id}});
  };

  const all = async (params: QueryAllFilesArgs = {}): Promise<File[]> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return getCtx().prisma.file.findMany(toPrismaRequest(params, {noId: true})) as unknown as Promise<File[]>;
  };

  const findOne = async (params: QueryAllFilesArgs = {}): Promise<File | null> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return getCtx().prisma.file.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (params: Query_AllFilesMetaArgs = {}): Promise<number> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return getCtx().prisma.file.count(toPrismaTotalRequest(params));
  };

  const meta = async (params: Query_AllFilesMetaArgs = {}): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (data: MutationCreateFileArgs): Promise<File> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.file.create({
      data: R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'originalName', 'url', 'mimetype', 's3Key', 'eTag'], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            
          ].join(' '),
        
        },
        processedData,
      ),
    });

    const operations = [
      createOperation,
      ...(await additionalOperationsOnCreate(getCtx, processedData)),
    ];

    const [result] = await getCtx().prisma.$transaction(operations as any);

    // update search. earlier we does not have id
    await getCtx().prisma.file.update({
      where: {id: result.id},
      data: {
        search: [
            ...R
              .toPairs(
                R.pick(['id', 'originalName', 'url', 'mimetype', 's3Key', 'eTag'], result),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            
          ].join(' '),
        
      },
    });

    await afterCreate(getCtx, result as File);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as File;
  };

  const createMany = async (entries: MutationCreateFileArgs[]): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const result = await getCtx().prisma.file.createMany({
      data: entries.map(data => R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'originalName', 'url', 'mimetype', 's3Key', 'eTag'], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            
          ].join(' '),
        
        },
        data,
      )),
      skipDuplicates: true,
    });

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const update = async (data: MutationUpdateFileArgs): Promise<File> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.file.update({
      data: R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'originalName', 'url', 'mimetype', 's3Key', 'eTag'], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            
          ].join(' '),
        
        },
        rest,
      ),
      where: {id},
    });

    const operations = [
      updateOperation,
      ...(await additionalOperationsOnUpdate(getCtx, processedData)),
    ];

    const [result] = await getCtx().prisma.$transaction(operations as any);

    await afterUpdate(getCtx, result as File);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as File;
  };

  const upsert = async (data: MutationUpdateFileArgs): Promise<File> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.file.upsert({create: R.mergeDeepLeft(
      {
        search: [
            ...R
              .toPairs(
                R.pick(['id', 'originalName', 'url', 'mimetype', 's3Key', 'eTag'], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            
          ].join(' '),
        
      },
      data,
    ), update: R.mergeDeepLeft(
      {
        search: [
            ...R
              .toPairs(
                R.pick(['id', 'originalName', 'url', 'mimetype', 's3Key', 'eTag'], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            
          ].join(' '),
        
      },
      rest,
    ), where: {id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvansed = async (filter: FileFilter, data: MutationCreateFileArgs): Promise<File> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const cnt = await count({filter});

    if (cnt > 1) {
      throw new Error(`There is more then one entity (${cnt}) that fits filter "${JSON.stringify(filter)}"`);
    }

    if (cnt === 0) {
      return create(data);
    } else {
      const current = await findOne({filter});

      if (!current) {
        return create(data);
      }

      return update({
        ...data,
        id: current.id,
      });
    }
  };

  const del = async (params: MutationRemoveFileArgs): Promise<boolean> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
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

    await afterDelete(getCtx, entity);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return true;
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
    upsertAdvansed,
    delete: del,
  };

  const additionalMethods = getAdditionalMethods(getCtx, baseMethods);

  return {
    ...baseMethods,
    ...additionalMethods,
  };
};
