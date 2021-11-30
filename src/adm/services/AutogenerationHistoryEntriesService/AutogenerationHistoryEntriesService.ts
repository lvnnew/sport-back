import {
  ListMetadata,
  MutationCreateAutogenerationHistoryEntryArgs,
  MutationUpdateAutogenerationHistoryEntryArgs,
  MutationRemoveAutogenerationHistoryEntryArgs,
  QueryAllAutogenerationHistoryEntriesArgs,
  Query_AllAutogenerationHistoryEntriesMetaArgs,
  AutogenerationHistoryEntry,
  AutogenerationHistoryEntryFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalAutogenerationHistoryEntriesMethods, getAdditionalMethods} from './additionalMethods';
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

export interface BaseAutogenerationHistoryEntriesMethods {
  get: (id: number) =>
    Promise<AutogenerationHistoryEntry | null>;
  all: (params?: QueryAllAutogenerationHistoryEntriesArgs) =>
    Promise<AutogenerationHistoryEntry[]>;
  findOne: (params?: QueryAllAutogenerationHistoryEntriesArgs) =>
    Promise<AutogenerationHistoryEntry | null>;
  count: (params?: Query_AllAutogenerationHistoryEntriesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAutogenerationHistoryEntriesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAutogenerationHistoryEntryArgs) =>
    Promise<AutogenerationHistoryEntry>;
  createMany: (data: MutationCreateAutogenerationHistoryEntryArgs[]) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAutogenerationHistoryEntryArgs) =>
    Promise<AutogenerationHistoryEntry>;
  upsert: (data: MutationUpdateAutogenerationHistoryEntryArgs) =>
    Promise<AutogenerationHistoryEntry>;
  upsertAdvanced: (
    filter: AutogenerationHistoryEntryFilter,
    data: MutationCreateAutogenerationHistoryEntryArgs,
  ) =>
    Promise<AutogenerationHistoryEntry>;
  delete: (params: MutationRemoveAutogenerationHistoryEntryArgs) =>
    Promise<AutogenerationHistoryEntry>;
}

export type AutogenerationHistoryEntriesService = BaseAutogenerationHistoryEntriesMethods & AdditionalAutogenerationHistoryEntriesMethods;

export const getAutogenerationHistoryEntriesService = (getCtx: () => Context) => {
  const get = async (
    id: number,
  ): Promise<AutogenerationHistoryEntry | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.autogenerationHistoryEntry.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllAutogenerationHistoryEntriesArgs = {},
  ): Promise<AutogenerationHistoryEntry[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.autogenerationHistoryEntry.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<AutogenerationHistoryEntry[]>;
  };

  const findOne = async (
    params: QueryAllAutogenerationHistoryEntriesArgs = {},
  ): Promise<AutogenerationHistoryEntry | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.autogenerationHistoryEntry.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllAutogenerationHistoryEntriesMetaArgs = {},
  ): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.autogenerationHistoryEntry.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllAutogenerationHistoryEntriesMetaArgs = {},
  ): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAutogenerationHistoryEntryArgs,
  ): Promise<AutogenerationHistoryEntry> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.autogenerationHistoryEntry.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'originalEntityType',
                  'originalEntityId',
                  'autogenerationRuleId',
                  'error',
                ], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'date',
                  'version',
                ], data),
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
    await getCtx().prisma.autogenerationHistoryEntry.update({
      where: {id: result.id},
      data: {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'originalEntityType',
                'originalEntityId',
                'autogenerationRuleId',
                'error',
              ], result),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'date',
                'version',
              ], result),
            )
            .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
        ].join(' '),
      },
    });

    await afterCreate(getCtx, result as AutogenerationHistoryEntry);

    return result as AutogenerationHistoryEntry;
  };

  const createMany = async (
    entries: MutationCreateAutogenerationHistoryEntryArgs[],
  ): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const result = await getCtx().prisma.autogenerationHistoryEntry.createMany({
      data: entries.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'originalEntityType',
                  'originalEntityId',
                  'autogenerationRuleId',
                  'error',
                ], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'date',
                  'version',
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
    data: MutationUpdateAutogenerationHistoryEntryArgs,
  ): Promise<AutogenerationHistoryEntry> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.autogenerationHistoryEntry.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'originalEntityType',
                  'originalEntityId',
                  'autogenerationRuleId',
                  'error',
                ], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'date',
                  'version',
                ], data),
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

    await afterUpdate(getCtx, result as AutogenerationHistoryEntry);

    return result as AutogenerationHistoryEntry;
  };

  const upsert = async (
    data: MutationUpdateAutogenerationHistoryEntryArgs,
  ): Promise<AutogenerationHistoryEntry> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.autogenerationHistoryEntry.upsert({create: R.mergeDeepLeft(
      data,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'originalEntityType',
                'originalEntityId',
                'autogenerationRuleId',
                'error',
              ], data),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'date',
                'version',
              ], data),
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
              R.pick([
                'id',
                'originalEntityType',
                'originalEntityId',
                'autogenerationRuleId',
                'error',
              ], data),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'date',
                'version',
              ], data),
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
    filter: AutogenerationHistoryEntryFilter,
    data: MutationCreateAutogenerationHistoryEntryArgs,
  ): Promise<AutogenerationHistoryEntry> => {
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
    params: MutationRemoveAutogenerationHistoryEntryArgs,
  ): Promise<AutogenerationHistoryEntry> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.autogenerationHistoryEntry.delete({where: {id: params.id}});

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

  const baseMethods: BaseAutogenerationHistoryEntriesMethods = {
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
