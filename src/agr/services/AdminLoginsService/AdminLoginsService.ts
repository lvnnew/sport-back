/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  ListMetadata,
  MutationCreateAdminLoginArgs,
  MutationUpdateAdminLoginArgs,
  MutationRemoveAdminLoginArgs,
  QueryAllAdminLoginsArgs,
  Query_AllAdminLoginsMetaArgs,
  AdminLogin,
  AdminLoginFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {AgrContext} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalAdminLoginsMethods, getAdditionalMethods} from './additionalMethods';
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

export interface BaseAdminLoginsMethods {
  get: (id: number) => Promise<AdminLogin | null>;
  all: (params?: QueryAllAdminLoginsArgs) => Promise<AdminLogin[]>;
  findOne: (params?: QueryAllAdminLoginsArgs) => Promise<AdminLogin | null>;
  count: (params?: Query_AllAdminLoginsMetaArgs) => Promise<number>;
  meta: (params?: Query_AllAdminLoginsMetaArgs) => Promise<ListMetadata>;
  create: (data: MutationCreateAdminLoginArgs) => Promise<AdminLogin>;
  createMany: (data: MutationCreateAdminLoginArgs[]) => Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAdminLoginArgs) => Promise<AdminLogin>;
  upsert: (data: MutationUpdateAdminLoginArgs) => Promise<AdminLogin>;
  upsertAdvansed: (filter: AdminLoginFilter, data: MutationCreateAdminLoginArgs) => Promise<AdminLogin>;
  delete: (params: MutationRemoveAdminLoginArgs) => Promise<boolean>;
}

export type AdminLoginsService = BaseAdminLoginsMethods & AdditionalAdminLoginsMethods;

export const getAdminLoginsService = (getCtx: () => AgrContext) => {
  const get = async (id: number): Promise<AdminLogin | null> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return getCtx().prisma.adminLogin.findUnique({where: {id}});
  };

  const all = async (params: QueryAllAdminLoginsArgs = {}): Promise<AdminLogin[]> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return getCtx().prisma.adminLogin.findMany(toPrismaRequest(params, {noId: true})) as unknown as Promise<AdminLogin[]>;
  };

  const findOne = async (params: QueryAllAdminLoginsArgs = {}): Promise<AdminLogin | null> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return getCtx().prisma.adminLogin.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (params: Query_AllAdminLoginsMetaArgs = {}): Promise<number> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return getCtx().prisma.adminLogin.count(toPrismaTotalRequest(params));
  };

  const meta = async (params: Query_AllAdminLoginsMetaArgs = {}): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (data: MutationCreateAdminLoginArgs): Promise<AdminLogin> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.adminLogin.create({
      data: R.mergeDeepLeft(
        {
          search: R.toPairs(
          R.pick(['id', 'login', 'passwordHash', 'role'], data),
        )
          .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? '')
          .join(' '),
        
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
    await getCtx().prisma.adminLogin.update({
      where: {id: result.id},
      data: {
        search: R.toPairs(
          R.pick(['id', 'login', 'passwordHash', 'role'], result),
        )
          .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? '')
          .join(' '),
        
      },
    });

    await afterCreate(getCtx, result as AdminLogin);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as AdminLogin;
  };

  const createMany = async (entries: MutationCreateAdminLoginArgs[]): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const result = await getCtx().prisma.adminLogin.createMany({
      data: entries.map(data => R.mergeDeepLeft(
        {
          search: R.toPairs(
          R.pick(['id', 'login', 'passwordHash', 'role'], data),
        )
          .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? '')
          .join(' '),
        
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

  const update = async (data: MutationUpdateAdminLoginArgs): Promise<AdminLogin> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.adminLogin.update({
      data: R.mergeDeepLeft(
        {
          search: R.toPairs(
          R.pick(['id', 'login', 'passwordHash', 'role'], data),
        )
          .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? '')
          .join(' '),
        
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

    await afterUpdate(getCtx, result as AdminLogin);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as AdminLogin;
  };

  const upsert = async (data: MutationUpdateAdminLoginArgs): Promise<AdminLogin> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.adminLogin.upsert({create: R.mergeDeepLeft(
      {
        search: R.toPairs(
          R.pick(['id', 'login', 'passwordHash', 'role'], data),
        )
          .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? '')
          .join(' '),
        
      },
      data,
    ), update: R.mergeDeepLeft(
      {
        search: R.toPairs(
          R.pick(['id', 'login', 'passwordHash', 'role'], data),
        )
          .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? '')
          .join(' '),
        
      },
      rest,
    ), where: {id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvansed = async (filter: AdminLoginFilter, data: MutationCreateAdminLoginArgs): Promise<AdminLogin> => {
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

  const del = async (params: MutationRemoveAdminLoginArgs): Promise<boolean> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const deleteOperation = getCtx().prisma.adminLogin.delete({where: {id: params.id}});

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

  const baseMethods: BaseAdminLoginsMethods = {
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
