import {
  ListMetadata,
  MutationCreateManagerArgs,
  MutationUpdateManagerArgs,
  MutationRemoveManagerArgs,
  QueryAllManagersArgs,
  Query_AllManagersMetaArgs,
  Manager,
  ManagerFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalManagersMethods, getAdditionalMethods} from './additionalMethods';
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

export interface BaseManagersMethods {
  get: (id: number) => Promise<Manager | null>;
  all: (params?: QueryAllManagersArgs) => Promise<Manager[]>;
  findOne: (params?: QueryAllManagersArgs) => Promise<Manager | null>;
  count: (params?: Query_AllManagersMetaArgs) => Promise<number>;
  meta: (params?: Query_AllManagersMetaArgs) => Promise<ListMetadata>;
  create: (data: MutationCreateManagerArgs) => Promise<Manager>;
  createMany: (data: MutationCreateManagerArgs[]) => Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateManagerArgs) => Promise<Manager>;
  upsert: (data: MutationUpdateManagerArgs) => Promise<Manager>;
  upsertAdvansed: (filter: ManagerFilter, data: MutationCreateManagerArgs) => Promise<Manager>;
  delete: (params: MutationRemoveManagerArgs) => Promise<boolean>;
}

export type ManagersService = BaseManagersMethods & AdditionalManagersMethods;

export const getManagersService = (getCtx: () => Context) => {
  const get = async (id: number): Promise<Manager | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.manager.findUnique({where: {id}});
  };

  const all = async (params: QueryAllManagersArgs = {}): Promise<Manager[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.manager.findMany(toPrismaRequest(params, {noId: true})) as unknown as Promise<Manager[]>;
  };

  const findOne = async (params: QueryAllManagersArgs = {}): Promise<Manager | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.manager.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (params: Query_AllManagersMetaArgs = {}): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.manager.count(toPrismaTotalRequest(params));
  };

  const meta = async (params: Query_AllManagersMetaArgs = {}): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (data: MutationCreateManagerArgs): Promise<Manager> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.manager.create({
      data: R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'title', 'lastName', 'firstName', 'languageId', 'email'], data),
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
    await getCtx().prisma.manager.update({
      where: {id: result.id},
      data: {
        search: [
            ...R
              .toPairs(
                R.pick(['id', 'title', 'lastName', 'firstName', 'languageId', 'email'], result),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            
          ].join(' '),
        
      },
    });

    await afterCreate(getCtx, result as Manager);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as Manager;
  };

  const createMany = async (entries: MutationCreateManagerArgs[]): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const result = await getCtx().prisma.manager.createMany({
      data: entries.map(data => R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'title', 'lastName', 'firstName', 'languageId', 'email'], data),
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

  const update = async (data: MutationUpdateManagerArgs): Promise<Manager> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.manager.update({
      data: R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'title', 'lastName', 'firstName', 'languageId', 'email'], data),
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

    await afterUpdate(getCtx, result as Manager);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as Manager;
  };

  const upsert = async (data: MutationUpdateManagerArgs): Promise<Manager> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.manager.upsert({create: R.mergeDeepLeft(
      {
        search: [
            ...R
              .toPairs(
                R.pick(['id', 'title', 'lastName', 'firstName', 'languageId', 'email'], data),
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
                R.pick(['id', 'title', 'lastName', 'firstName', 'languageId', 'email'], data),
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

  const upsertAdvansed = async (filter: ManagerFilter, data: MutationCreateManagerArgs): Promise<Manager> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
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

  const del = async (params: MutationRemoveManagerArgs): Promise<boolean> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.manager.delete({where: {id: params.id}});

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

  const baseMethods: BaseManagersMethods = {
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
