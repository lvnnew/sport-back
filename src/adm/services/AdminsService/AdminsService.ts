/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  ListMetadata,
  MutationCreateAdminArgs,
  MutationUpdateAdminArgs,
  MutationRemoveAdminArgs,
  QueryAllAdminsArgs,
  Query_AllAdminsMetaArgs,
  Admin,
  AdminFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalAdminsMethods, getAdditionalMethods} from './additionalMethods';
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

export interface BaseAdminsMethods {
  get: (id: number) => Promise<Admin | null>;
  all: (params?: QueryAllAdminsArgs) => Promise<Admin[]>;
  findOne: (params?: QueryAllAdminsArgs) => Promise<Admin | null>;
  count: (params?: Query_AllAdminsMetaArgs) => Promise<number>;
  meta: (params?: Query_AllAdminsMetaArgs) => Promise<ListMetadata>;
  create: (data: MutationCreateAdminArgs) => Promise<Admin>;
  createMany: (data: MutationCreateAdminArgs[]) => Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAdminArgs) => Promise<Admin>;
  upsert: (data: MutationUpdateAdminArgs) => Promise<Admin>;
  upsertAdvansed: (filter: AdminFilter, data: MutationCreateAdminArgs) => Promise<Admin>;
  delete: (params: MutationRemoveAdminArgs) => Promise<boolean>;
}

export type AdminsService = BaseAdminsMethods & AdditionalAdminsMethods;

export const getAdminsService = (getCtx: () => Context) => {
  const get = async (id: number): Promise<Admin | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.admin.findUnique({where: {id}});
  };

  const all = async (params: QueryAllAdminsArgs = {}): Promise<Admin[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.admin.findMany(toPrismaRequest(params, {noId: true})) as unknown as Promise<Admin[]>;
  };

  const findOne = async (params: QueryAllAdminsArgs = {}): Promise<Admin | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.admin.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (params: Query_AllAdminsMetaArgs = {}): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.admin.count(toPrismaTotalRequest(params));
  };

  const meta = async (params: Query_AllAdminsMetaArgs = {}): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (data: MutationCreateAdminArgs): Promise<Admin> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.admin.create({
      data: R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'lastname', 'firstname', 'email'], data),
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
    await getCtx().prisma.admin.update({
      where: {id: result.id},
      data: {
        search: [
            ...R
              .toPairs(
                R.pick(['id', 'lastname', 'firstname', 'email'], result),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            
          ].join(' '),
        
      },
    });

    await afterCreate(getCtx, result as Admin);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as Admin;
  };

  const createMany = async (entries: MutationCreateAdminArgs[]): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const result = await getCtx().prisma.admin.createMany({
      data: entries.map(data => R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'lastname', 'firstname', 'email'], data),
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

  const update = async (data: MutationUpdateAdminArgs): Promise<Admin> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.admin.update({
      data: R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'lastname', 'firstname', 'email'], data),
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

    await afterUpdate(getCtx, result as Admin);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as Admin;
  };

  const upsert = async (data: MutationUpdateAdminArgs): Promise<Admin> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.admin.upsert({create: R.mergeDeepLeft(
      {
        search: [
            ...R
              .toPairs(
                R.pick(['id', 'lastname', 'firstname', 'email'], data),
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
                R.pick(['id', 'lastname', 'firstname', 'email'], data),
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

  const upsertAdvansed = async (filter: AdminFilter, data: MutationCreateAdminArgs): Promise<Admin> => {
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

  const del = async (params: MutationRemoveAdminArgs): Promise<boolean> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.admin.delete({where: {id: params.id}});

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

  const baseMethods: BaseAdminsMethods = {
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
