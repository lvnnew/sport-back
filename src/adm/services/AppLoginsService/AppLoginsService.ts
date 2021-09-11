import {
  ListMetadata,
  MutationCreateAppLoginArgs,
  MutationUpdateAppLoginArgs,
  MutationRemoveAppLoginArgs,
  QueryAllAppLoginsArgs,
  Query_AllAppLoginsMetaArgs,
  AppLogin,
  AppLoginFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalAppLoginsMethods, getAdditionalMethods} from './additionalMethods';
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

export interface BaseAppLoginsMethods {
  get: (id: number) => Promise<AppLogin | null>;
  all: (params?: QueryAllAppLoginsArgs) => Promise<AppLogin[]>;
  findOne: (params?: QueryAllAppLoginsArgs) => Promise<AppLogin | null>;
  count: (params?: Query_AllAppLoginsMetaArgs) => Promise<number>;
  meta: (params?: Query_AllAppLoginsMetaArgs) => Promise<ListMetadata>;
  create: (data: MutationCreateAppLoginArgs) => Promise<AppLogin>;
  createMany: (data: MutationCreateAppLoginArgs[]) => Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAppLoginArgs) => Promise<AppLogin>;
  upsert: (data: MutationUpdateAppLoginArgs) => Promise<AppLogin>;
  upsertAdvanced: (filter: AppLoginFilter, data: MutationCreateAppLoginArgs) => Promise<AppLogin>;
  delete: (params: MutationRemoveAppLoginArgs) => Promise<boolean>;
}

export type AppLoginsService = BaseAppLoginsMethods & AdditionalAppLoginsMethods;

export const getAppLoginsService = (getCtx: () => Context) => {
  const get = async (
    id: number,
  ): Promise<AppLogin | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.appLogin.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllAppLoginsArgs = {},
  ): Promise<AppLogin[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.appLogin.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<AppLogin[]>;
  };

  const findOne = async (
    params: QueryAllAppLoginsArgs = {},
  ): Promise<AppLogin | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.appLogin.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllAppLoginsMetaArgs = {},
  ): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.appLogin.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllAppLoginsMetaArgs = {},
  ): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAppLoginArgs,
  ): Promise<AppLogin> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.appLogin.create({
      data: R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'login', 'passwordHash', 'userId'], data),
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
    await getCtx().prisma.appLogin.update({
      where: {id: result.id},
      data: {
        search: [
          ...R
            .toPairs(
              R.pick(['id', 'login', 'passwordHash', 'userId'], result),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    });

    await afterCreate(getCtx, result as AppLogin);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as AppLogin;
  };

  const createMany = async (
    entries: MutationCreateAppLoginArgs[],
  ): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const result = await getCtx().prisma.appLogin.createMany({
      data: entries.map(data => R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'login', 'passwordHash', 'userId'], data),
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

  const update = async (
    data: MutationUpdateAppLoginArgs,
  ): Promise<AppLogin> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.appLogin.update({
      data: R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'login', 'passwordHash', 'userId'], data),
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

    await afterUpdate(getCtx, result as AppLogin);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as AppLogin;
  };

  const upsert = async (
    data: MutationUpdateAppLoginArgs,
  ): Promise<AppLogin> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.appLogin.upsert({create: R.mergeDeepLeft(
      {
        search: [
          ...R
            .toPairs(
              R.pick(['id', 'login', 'passwordHash', 'userId'], data),
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
              R.pick(['id', 'login', 'passwordHash', 'userId'], data),
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

  const upsertAdvanced = async (
    filter: AppLoginFilter,
    data: MutationCreateAppLoginArgs,
  ): Promise<AppLogin> => {
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
    params: MutationRemoveAppLoginArgs,
  ): Promise<boolean> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.appLogin.delete({where: {id: params.id}});

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

  const baseMethods: BaseAppLoginsMethods = {
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
