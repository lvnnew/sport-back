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
import {Context} from '../types';
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
import {beforeDelete} from './hooks/beforeDelete';
import {beforeUpsert} from './hooks/beforeUpsert';
import {changeListFilter} from './hooks/changeListFilter';
import getAugmenterByDataFromDb from '../utils/getAugmenterByDataFromDb';
import * as R from 'ramda';
import AuditLogActionType from '../../../types/AuditLogActionType';
import Entity from '../../../types/Entity';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type StrictUpdateUnitArgs = MutationUpdateUnitArgs;
export type StrictCreateUnitArgs = MutationCreateUnitArgs;

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

export const getUnitsService = (ctx: Context) => {
  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.unit.findUnique,
    forbiddenForUserFields,
  );

  const all = async (
    params: QueryAllUnitsArgs = {},
  ): Promise<Unit[]> => {
    return ctx.prisma.unit.findMany(
      toPrismaRequest(await changeListFilter(params, ctx), {noId: false}),
    ) as unknown as Promise<Unit[]>;
  };

  const findOne = async (
    params: QueryAllUnitsArgs = {},
  ): Promise<Unit | null> => {
    return ctx.prisma.unit.findFirst(toPrismaRequest(await changeListFilter(params, ctx), {noId: false}));
  };

  const get = async (
    id: number,
  ): Promise<Unit | null> => {
    return findOne({filter: {id}});
  };

  const count = async (
    params: Query_AllUnitsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.unit.count(toPrismaTotalRequest(await changeListFilter(params, ctx)));
  };

  const meta = async (
    params: Query_AllUnitsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateUnitArgs,
    byUser = false,
  ): Promise<Unit> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await beforeCreate(ctx, data);

    const createOperation = ctx.prisma.unit.create({
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
      ...(await additionalOperationsOnCreate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
    // update search. earlier we does not have id
      ctx.prisma.unit.update({
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
      }),
      ctx.prisma.auditLog.create({
        data: {
          date: new Date(),
          title: 'Units create',
          entityTypeId: Entity.Unit,
          entityId: result.id.toString(),
          actionTypeId: AuditLogActionType.Create,
          actionData: JSON.stringify(data),
          managerId: ctx.service('profile').getManagerId(),
          userId: ctx.service('profile').getUserId(),
        },
      }),
      afterCreate(ctx, result as Unit),
    ]);

    return result as Unit;
  };

  const createMany = async (
    entries: MutationCreateUnitArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.unit.createMany({
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
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdateUnitArgs;

    processedData = await beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.unit.update({
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

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Units update',
        entityTypeId: Entity.Unit,
        entityId: data.id.toString(),
        actionTypeId: AuditLogActionType.Update,
        actionData: JSON.stringify(data),
        managerId: ctx.service('profile').getManagerId(),
        userId: ctx.service('profile').getUserId(),
      },
    });

    const operations = [
      updateOperation,
      auditOperation,
      ...(await additionalOperationsOnUpdate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      afterUpdate(ctx, result as Unit),
    ]);

    return result as Unit;
  };

  const upsert = async (
    data: MutationUpdateUnitArgs,
    byUser = false,
  ): Promise<Unit> => {
    const augmented = await augmentDataFromDb(data);

    const processedDataToUpdate = byUser ? augmented : {...augmented, ...data} as StrictUpdateUnitArgs;
    const processedDataToCreate = byUser ? R.mergeDeepLeft(
      {},
      data,
    ) : data as StrictCreateUnitArgs;

    const {createData, updateData} = await beforeUpsert(ctx, processedDataToCreate, processedDataToUpdate);

    const result = await ctx.prisma.unit.upsert({create: R.mergeDeepLeft(
      createData,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
                'parentId',
              ], createData),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    ), update: R.mergeDeepLeft(
      updateData,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
                'parentId',
              ], updateData),
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
    await beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.unit.delete({where: {id: params.id}});

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Units delete',
        entityTypeId: Entity.Unit,
        entityId: params.id.toString(),
        actionTypeId: AuditLogActionType.Delete,
        managerId: ctx.service('profile').getManagerId(),
        userId: ctx.service('profile').getUserId(),
      },
    });

    const operations = [
      deleteOperation,
      auditOperation,
      ...(await additionalOperationsOnDelete(ctx, params)),
    ];

    const entity = await get(params.id);

    if (!entity) {
      throw new Error(`There is no entity with "${params.id}" id`);
    }

    const [result] = await ctx.prisma.$transaction(operations as any);

    if (!result) {
      throw new Error('There is no such entity');
    }

    await afterDelete(ctx, entity);

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

  const additionalMethods = getAdditionalMethods(ctx, baseMethods);

  return {
    ...baseMethods,
    ...additionalMethods,
  };
};
