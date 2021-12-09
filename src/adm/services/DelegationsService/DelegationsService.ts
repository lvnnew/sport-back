import {
  ListMetadata,
  MutationCreateDelegationArgs,
  MutationUpdateDelegationArgs,
  MutationRemoveDelegationArgs,
  QueryAllDelegationsArgs,
  Query_AllDelegationsMetaArgs,
  Delegation,
  DelegationFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalDelegationsMethods, getAdditionalMethods} from './additionalMethods';
import {additionalOperationsOnCreate} from './hooks/additionalOperationsOnCreate';
import {additionalOperationsOnUpdate} from './hooks/additionalOperationsOnUpdate';
import {additionalOperationsOnDelete} from './hooks/additionalOperationsOnDelete';
import {beforeCreate} from './hooks/beforeCreate';
import {beforeUpdate} from './hooks/beforeUpdate';
import {afterCreate} from './hooks/afterCreate';
import {afterUpdate} from './hooks/afterUpdate';
import {afterDelete} from './hooks/afterDelete';
import * as R from 'ramda';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

// DO NOT EDIT! THIS IS GENERATED FILE

export interface BaseDelegationsMethods {
  get: (id: number) =>
    Promise<Delegation | null>;
  all: (params?: QueryAllDelegationsArgs) =>
    Promise<Delegation[]>;
  findOne: (params?: QueryAllDelegationsArgs) =>
    Promise<Delegation | null>;
  count: (params?: Query_AllDelegationsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllDelegationsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateDelegationArgs, byUser?: boolean) =>
    Promise<Delegation>;
  createMany: (data: MutationCreateDelegationArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateDelegationArgs, byUser?: boolean) =>
    Promise<Delegation>;
  upsert: (data: MutationUpdateDelegationArgs, byUser?: boolean) =>
    Promise<Delegation>;
  upsertAdvanced: (
    filter: DelegationFilter,
    data: MutationCreateDelegationArgs,
    byUser?: boolean,
  ) =>
    Promise<Delegation>;
  delete: (params: MutationRemoveDelegationArgs) =>
    Promise<Delegation>;
}

export type DelegationsService = BaseDelegationsMethods & AdditionalDelegationsMethods;

export const getDelegationsService = (getCtx: () => Context) => {
  const get = async (
    id: number,
  ): Promise<Delegation | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.delegation.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllDelegationsArgs = {},
  ): Promise<Delegation[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.delegation.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<Delegation[]>;
  };

  const findOne = async (
    params: QueryAllDelegationsArgs = {},
  ): Promise<Delegation | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.delegation.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllDelegationsMetaArgs = {},
  ): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.delegation.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllDelegationsMetaArgs = {},
  ): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateDelegationArgs,
    byUser = false,
  ): Promise<Delegation> => {
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

    const createOperation = getCtx().prisma.delegation.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'fromId',
                  'toId',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'expiresAt',
                ], processedData),
              )
              .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
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
    await getCtx().prisma.delegation.update({
      where: {id: result.id},
      data: {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'fromId',
                'toId',
              ], result),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'expiresAt',
              ], result),
            )
            .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
        ].join(' '),
      },
    });

    await afterCreate(getCtx, result as Delegation);

    return result as Delegation;
  };

  const createMany = async (
    entries: MutationCreateDelegationArgs[],
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

    const result = await getCtx().prisma.delegation.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'fromId',
                  'toId',
                ], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'expiresAt',
                ], data),
              )
              .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
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
    data: MutationUpdateDelegationArgs,
    byUser = false,
  ): Promise<Delegation> => {
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

    const updateOperation = getCtx().prisma.delegation.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'fromId',
                  'toId',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'expiresAt',
                ], processedData),
              )
              .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
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

    await afterUpdate(getCtx, result as Delegation);

    return result as Delegation;
  };

  const upsert = async (
    data: MutationUpdateDelegationArgs,
    byUser = false,
  ): Promise<Delegation> => {
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

    const result = await getCtx().prisma.delegation.upsert({create: R.mergeDeepLeft(
      processedDataToCreate,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'fromId',
                'toId',
              ], processedDataToCreate),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'expiresAt',
              ], processedDataToCreate),
            )
            .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
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
                'fromId',
                'toId',
              ], processedDataToUpdate),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'expiresAt',
              ], processedDataToUpdate),
            )
            .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
        ].join(' '),
      },
    ), where: {id: data.id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvanced = async (
    filter: DelegationFilter,
    data: MutationCreateDelegationArgs,
    byUser = false,
  ): Promise<Delegation> => {
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
    params: MutationRemoveDelegationArgs,
  ): Promise<Delegation> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.delegation.delete({where: {id: params.id}});

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

  const baseMethods: BaseDelegationsMethods = {
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
