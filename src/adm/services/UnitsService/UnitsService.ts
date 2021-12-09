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
  create: (data: MutationCreateUnitArgs, byUser?: boolean) =>
    Promise<Unit>;
  createMany: (data: MutationCreateUnitArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateUnitArgs, byUser?: boolean) =>
    Promise<Unit>;
  upsert: (data: MutationUpdateUnitArgs, byUser?: boolean) =>
    Promise<Unit>;
  upsertAdvanced: (
    filter: UnitFilter,
    data: MutationCreateUnitArgs,
    byUser?: boolean,
  ) =>
    Promise<Unit>;
  delete: (params: MutationRemoveUnitArgs) =>
    Promise<Unit>;
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
    byUser = false,
  ): Promise<Unit> => {
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
                ], processedData),
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
    if (!result) {
      throw new Error('There is no such entity');
    }

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

    return result as Unit;
  };

  const createMany = async (
    entries: MutationCreateUnitArgs[],
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

    const result = await getCtx().prisma.unit.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
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
    byUser = false,
  ): Promise<Unit> => {
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
                ], processedData),
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
    if (!result) {
      throw new Error('There is no such entity');
    }

    await afterUpdate(getCtx, result as Unit);

    return result as Unit;
  };

  const upsert = async (
    data: MutationUpdateUnitArgs,
    byUser = false,
  ): Promise<Unit> => {
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

    const result = await getCtx().prisma.unit.upsert({create: R.mergeDeepLeft(
      processedDataToCreate,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
                'parentId',
              ], processedDataToCreate),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
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
                'title',
                'parentId',
              ], processedDataToUpdate),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    ), where: {id: data.id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvanced = async (
    filter: UnitFilter,
    data: MutationCreateUnitArgs,
    byUser = false,
  ): Promise<Unit> => {
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
    params: MutationRemoveUnitArgs,
  ): Promise<Unit> => {
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

    if (!result) {
      throw new Error('There is no such entity');
    }

    await afterDelete(getCtx, entity);

    return entity;
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
