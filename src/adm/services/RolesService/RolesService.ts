/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  ListMetadata,
  MutationCreateRoleArgs,
  MutationUpdateRoleArgs,
  MutationRemoveRoleArgs,
  QueryAllRolesArgs,
  Query_AllRolesMetaArgs,
  Role,
  RoleFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalRolesMethods, getAdditionalMethods} from './additionalMethods';
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

export interface BaseRolesMethods {
  get: (id: string) => Promise<Role | null>;
  all: (params?: QueryAllRolesArgs) => Promise<Role[]>;
  findOne: (params?: QueryAllRolesArgs) => Promise<Role | null>;
  count: (params?: Query_AllRolesMetaArgs) => Promise<number>;
  meta: (params?: Query_AllRolesMetaArgs) => Promise<ListMetadata>;
  create: (data: MutationCreateRoleArgs) => Promise<Role>;
  createMany: (data: MutationCreateRoleArgs[]) => Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateRoleArgs) => Promise<Role>;
  upsert: (data: MutationUpdateRoleArgs) => Promise<Role>;
  upsertAdvansed: (filter: RoleFilter, data: MutationCreateRoleArgs) => Promise<Role>;
  delete: (params: MutationRemoveRoleArgs) => Promise<boolean>;
}

export type RolesService = BaseRolesMethods & AdditionalRolesMethods;

export const getRolesService = (getCtx: () => Context) => {
  const get = async (id: string): Promise<Role | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.role.findUnique({where: {id}});
  };

  const all = async (params: QueryAllRolesArgs = {}): Promise<Role[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.role.findMany(toPrismaRequest(params, {noId: true})) as unknown as Promise<Role[]>;
  };

  const findOne = async (params: QueryAllRolesArgs = {}): Promise<Role | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.role.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (params: Query_AllRolesMetaArgs = {}): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.role.count(toPrismaTotalRequest(params));
  };

  const meta = async (params: Query_AllRolesMetaArgs = {}): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (data: MutationCreateRoleArgs): Promise<Role> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.role.create({
      data: R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'title'], data),
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
    await getCtx().prisma.role.update({
      where: {id: result.id},
      data: {
        search: [
            ...R
              .toPairs(
                R.pick(['id', 'title'], result),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            
          ].join(' '),
        
      },
    });

    await afterCreate(getCtx, result as Role);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as Role;
  };

  const createMany = async (entries: MutationCreateRoleArgs[]): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const result = await getCtx().prisma.role.createMany({
      data: entries.map(data => R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'title'], data),
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

  const update = async (data: MutationUpdateRoleArgs): Promise<Role> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.role.update({
      data: R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'title'], data),
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

    await afterUpdate(getCtx, result as Role);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as Role;
  };

  const upsert = async (data: MutationUpdateRoleArgs): Promise<Role> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.role.upsert({create: R.mergeDeepLeft(
      {
        search: [
            ...R
              .toPairs(
                R.pick(['id', 'title'], data),
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
                R.pick(['id', 'title'], data),
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

  const upsertAdvansed = async (filter: RoleFilter, data: MutationCreateRoleArgs): Promise<Role> => {
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

  const del = async (params: MutationRemoveRoleArgs): Promise<boolean> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.role.delete({where: {id: params.id}});

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

  const baseMethods: BaseRolesMethods = {
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
