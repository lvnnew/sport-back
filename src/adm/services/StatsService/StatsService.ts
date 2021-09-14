import {
  ListMetadata,
  MutationCreateStatArgs,
  MutationUpdateStatArgs,
  MutationRemoveStatArgs,
  QueryAllStatsArgs,
  Query_AllStatsMetaArgs,
  Stat,
  StatFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalStatsMethods, getAdditionalMethods} from './additionalMethods';
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

export interface BaseStatsMethods {
  get: (id: string) => Promise<Stat | null>;
  all: (params?: QueryAllStatsArgs) => Promise<Stat[]>;
  findOne: (params?: QueryAllStatsArgs) => Promise<Stat | null>;
  count: (params?: Query_AllStatsMetaArgs) => Promise<number>;
  meta: (params?: Query_AllStatsMetaArgs) => Promise<ListMetadata>;
  create: (data: MutationCreateStatArgs) => Promise<Stat>;
  createMany: (data: MutationCreateStatArgs[]) => Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateStatArgs) => Promise<Stat>;
  upsert: (data: MutationUpdateStatArgs) => Promise<Stat>;
  upsertAdvanced: (filter: StatFilter, data: MutationCreateStatArgs) => Promise<Stat>;
  delete: (params: MutationRemoveStatArgs) => Promise<boolean>;
}

export type StatsService = BaseStatsMethods & AdditionalStatsMethods;

export const getStatsService = (getCtx: () => Context) => {
  const get = async (
    id: string,
  ): Promise<Stat | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.stat.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllStatsArgs = {},
  ): Promise<Stat[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.stat.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<Stat[]>;
  };

  const findOne = async (
    params: QueryAllStatsArgs = {},
  ): Promise<Stat | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.stat.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllStatsMetaArgs = {},
  ): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.stat.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllStatsMetaArgs = {},
  ): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateStatArgs,
  ): Promise<Stat> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.stat.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'helloCount'], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
            .toPairs(
              R.pick(['updated'], data),
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

    // update search. earlier we does not have id
    await getCtx().prisma.stat.update({
      where: {id: result.id},
      data: {
        search: [
          ...R
            .toPairs(
              R.pick(['id', 'helloCount'], result),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
          .toPairs(
            R.pick(['updated'], result),
          )
          .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
        ].join(' '),
      },
    });

    await afterCreate(getCtx, result as Stat);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as Stat;
  };

  const createMany = async (
    entries: MutationCreateStatArgs[],
  ): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const result = await getCtx().prisma.stat.createMany({
      data: entries.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'helloCount'], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
            .toPairs(
              R.pick(['updated'], data),
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
    data: MutationUpdateStatArgs,
  ): Promise<Stat> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.stat.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'helloCount'], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
            .toPairs(
              R.pick(['updated'], data),
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

    await afterUpdate(getCtx, result as Stat);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as Stat;
  };

  const upsert = async (
    data: MutationUpdateStatArgs,
  ): Promise<Stat> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.stat.upsert({create: R.mergeDeepLeft(
      data,
      {
        search: [
          ...R
            .toPairs(
              R.pick(['id', 'helloCount'], data),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
          .toPairs(
            R.pick(['updated'], data),
          )
          .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
        ].join(' '),
      },
    ), update: R.mergeDeepLeft(
      rest,
      {
        search: [
          ...R
            .toPairs(
              R.pick(['id', 'helloCount'], data),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
          .toPairs(
            R.pick(['updated'], data),
          )
          .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
        ].join(' '),
      },
    ), where: {id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvanced = async (
    filter: StatFilter,
    data: MutationCreateStatArgs,
  ): Promise<Stat> => {
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
    params: MutationRemoveStatArgs,
  ): Promise<boolean> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.stat.delete({where: {id: params.id}});

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

  const baseMethods: BaseStatsMethods = {
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
