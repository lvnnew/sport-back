import {
  ListMetadata,
  MutationCreateManagerLoginArgs,
  MutationUpdateManagerLoginArgs,
  MutationRemoveManagerLoginArgs,
  QueryAllManagerLoginsArgs,
  Query_AllManagerLoginsMetaArgs,
  ManagerLogin,
  ManagerLoginFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalManagerLoginsMethods, getAdditionalMethods} from './additionalMethods';
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

export interface BaseManagerLoginsMethods {
  get: (id: number) => Promise<ManagerLogin | null>;
  all: (params?: QueryAllManagerLoginsArgs) => Promise<ManagerLogin[]>;
  findOne: (params?: QueryAllManagerLoginsArgs) => Promise<ManagerLogin | null>;
  count: (params?: Query_AllManagerLoginsMetaArgs) => Promise<number>;
  meta: (params?: Query_AllManagerLoginsMetaArgs) => Promise<ListMetadata>;
  create: (data: MutationCreateManagerLoginArgs) => Promise<ManagerLogin>;
  createMany: (data: MutationCreateManagerLoginArgs[]) => Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateManagerLoginArgs) => Promise<ManagerLogin>;
  upsert: (data: MutationUpdateManagerLoginArgs) => Promise<ManagerLogin>;
  upsertAdvanced: (filter: ManagerLoginFilter, data: MutationCreateManagerLoginArgs) => Promise<ManagerLogin>;
  delete: (params: MutationRemoveManagerLoginArgs) => Promise<boolean>;
}

export type ManagerLoginsService = BaseManagerLoginsMethods & AdditionalManagerLoginsMethods;

export const getManagerLoginsService = (getCtx: () => Context) => {
  const get = async (
    id: number,
  ): Promise<ManagerLogin | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.managerLogin.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllManagerLoginsArgs = {},
  ): Promise<ManagerLogin[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.managerLogin.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<ManagerLogin[]>;
  };

  const findOne = async (
    params: QueryAllManagerLoginsArgs = {},
  ): Promise<ManagerLogin | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.managerLogin.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllManagerLoginsMetaArgs = {},
  ): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.managerLogin.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllManagerLoginsMetaArgs = {},
  ): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateManagerLoginArgs,
  ): Promise<ManagerLogin> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.managerLogin.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'login', 'passwordHash', 'role', 'managerId'], data),
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

    // update search. earlier we does not have id
    await getCtx().prisma.managerLogin.update({
      where: {id: result.id},
      data: {
        search: [
          ...R
            .toPairs(
              R.pick(['id', 'login', 'passwordHash', 'role', 'managerId'], result),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    });

    await afterCreate(getCtx, result as ManagerLogin);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as ManagerLogin;
  };

  const createMany = async (
    entries: MutationCreateManagerLoginArgs[],
  ): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const result = await getCtx().prisma.managerLogin.createMany({
      data: entries.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'login', 'passwordHash', 'role', 'managerId'], data),
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
    data: MutationUpdateManagerLoginArgs,
  ): Promise<ManagerLogin> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.managerLogin.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'login', 'passwordHash', 'role', 'managerId'], data),
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

    await afterUpdate(getCtx, result as ManagerLogin);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as ManagerLogin;
  };

  const upsert = async (
    data: MutationUpdateManagerLoginArgs,
  ): Promise<ManagerLogin> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.managerLogin.upsert({create: R.mergeDeepLeft(
      data,
      {
        search: [
          ...R
            .toPairs(
              R.pick(['id', 'login', 'passwordHash', 'role', 'managerId'], data),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    ), update: R.mergeDeepLeft(
      rest,
      {
        search: [
          ...R
            .toPairs(
              R.pick(['id', 'login', 'passwordHash', 'role', 'managerId'], data),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    ), where: {id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvanced = async (
    filter: ManagerLoginFilter,
    data: MutationCreateManagerLoginArgs,
  ): Promise<ManagerLogin> => {
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

  const del = async (
    params: MutationRemoveManagerLoginArgs,
  ): Promise<boolean> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.managerLogin.delete({where: {id: params.id}});

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

  const baseMethods: BaseManagerLoginsMethods = {
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
