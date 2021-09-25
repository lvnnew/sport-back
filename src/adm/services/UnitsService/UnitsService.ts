import {
  ListMetadata,
  MutationCreateUnitArgs,
  MutationUpdateUnitArgs,
  MutationRemoveUnitArgs,
  QueryAllUnitsArgs,
  Query_AllUnitsMetaArgs,
  Unit,
  UnitFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalUnitsMethods, getAdditionalMethods} from './additionalMethods';
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

export interface BaseUnitsMethods {
  get: (id: number) =>
    Promise<Unit | null>;
  all: (params?: QueryAllUnitsArgs) =>
    Promise<Unit[]>;
  findOne: (params?: QueryAllUnitsArgs) =>
    Promise<Unit | null>;
  count: (params?: Query_AllUnitsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllUnitsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateUnitArgs) =>
    Promise<Unit>;
  createMany: (data: MutationCreateUnitArgs[]) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateUnitArgs) =>
    Promise<Unit>;
  upsert: (data: MutationUpdateUnitArgs) =>
    Promise<Unit>;
  upsertAdvanced: (
    filter: UnitFilter,
    data: MutationCreateUnitArgs,
  ) =>
    Promise<Unit>;
  delete: (params: MutationRemoveUnitArgs) =>
    Promise<boolean>;
}

export type UnitsService = BaseUnitsMethods & AdditionalUnitsMethods;

export const getUnitsService = (getCtx: () => Context) => {
  const get = async (
    id: number,
  ): Promise<Unit | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.unit.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllUnitsArgs = {},
  ): Promise<Unit[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.unit.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<Unit[]>;
  };

  const findOne = async (
    params: QueryAllUnitsArgs = {},
  ): Promise<Unit | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.unit.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllUnitsMetaArgs = {},
  ): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.unit.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllUnitsMetaArgs = {},
  ): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateUnitArgs,
  ): Promise<Unit> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.unit.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'parentId',
                ], data),
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
    await getCtx().prisma.unit.update({
      where: {id: result.id},
      data: {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
                'parentId',
              ], result),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    });

    await afterCreate(getCtx, result as Unit);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as Unit;
  };

  const createMany = async (
    entries: MutationCreateUnitArgs[],
  ): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const result = await getCtx().prisma.unit.createMany({
      data: entries.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'parentId',
                ], data),
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
    data: MutationUpdateUnitArgs,
  ): Promise<Unit> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.unit.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'parentId',
                ], data),
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

    await afterUpdate(getCtx, result as Unit);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as Unit;
  };

  const upsert = async (
    data: MutationUpdateUnitArgs,
  ): Promise<Unit> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.unit.upsert({create: R.mergeDeepLeft(
      data,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
                'parentId',
              ], data),
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
              R.pick([
                'id',
                'title',
                'parentId',
              ], data),
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
    filter: UnitFilter,
    data: MutationCreateUnitArgs,
  ): Promise<Unit> => {
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
    params: MutationRemoveUnitArgs,
  ): Promise<boolean> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.unit.delete({where: {id: params.id}});

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

  const baseMethods: BaseUnitsMethods = {
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
