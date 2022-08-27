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
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {getHooksUtils, HooksAddType} from '../getHooksUtils';
import * as R from 'ramda';
import Entity from '../../../types/Entity';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type AutodefinableUnitKeys = never;
export type ForbidenForUserUnitKeys = never;
export type RequiredDbNotUserUnitKeys = never;

export type AutodefinableUnitPart = DefinedRecord<Pick<MutationCreateUnitArgs, AutodefinableUnitKeys>>;

export type ReliableUnitCreateUserInput =
  Omit<MutationCreateUnitArgs, ForbidenForUserUnitKeys>
  & AutodefinableUnitPart;

export type AllowedUnitForUserCreateInput = Omit<MutationCreateUnitArgs, ForbidenForUserUnitKeys>;

export type StrictCreateUnitArgs = DefinedFieldsInRecord<MutationCreateUnitArgs, RequiredDbNotUserUnitKeys> & AutodefinableUnitPart;
export type StrictUpdateUnitArgs = DefinedFieldsInRecord<MutationUpdateUnitArgs, RequiredDbNotUserUnitKeys> & AutodefinableUnitPart;

export type StrictCreateUnitArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateUnitArgs, AutodefinableUnitKeys>;
export type MutationCreateUnitArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateUnitArgs, AutodefinableUnitKeys>;
export type MutationUpdateUnitArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateUnitArgs, AutodefinableUnitKeys>;

export interface BaseUnitsMethods {
  get: (id: number) =>
    Promise<Unit | null>;
  getRequired: (id: number) =>
    Promise<Unit>;
  all: (params?: QueryAllUnitsArgs) =>
    Promise<Unit[]>;
  findOne: (params?: QueryAllUnitsArgs) =>
    Promise<Unit | null>;
  findOneRequired: (params?: QueryAllUnitsArgs) =>
    Promise<Unit>;
  count: (params?: Query_AllUnitsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllUnitsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateUnitArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<Unit>;
  createMany: (data: StrictCreateUnitArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateUnitArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<Unit>;
  upsert: (
    data: PartialFieldsInRecord<MutationUpdateUnitArgsWithoutAutodefinable, 'id'>,
    byUser?: boolean,
  ) =>
    Promise<Unit>;
  upsertAdvanced: (
    filter: UnitFilter,
    data: MutationCreateUnitArgsWithoutAutodefinable,
    byUser?: boolean,
  ) =>
    Promise<Unit>;
  delete: (params: MutationRemoveUnitArgs) =>
    Promise<Unit>;
}

export type UnitsService = BaseUnitsMethods
  & AdditionalUnitsMethods
  & HooksAddType<
    Unit,
    QueryAllUnitsArgs,
    ReliableUnitCreateUserInput,
    MutationUpdateUnitArgs,
    MutationRemoveUnitArgs,
    StrictCreateUnitArgs,
    StrictUpdateUnitArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [
  'id',
  'title',
  'parentId',
];

export const getUnitsService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    Unit,
    QueryAllUnitsArgs,
    ReliableUnitCreateUserInput,
    MutationUpdateUnitArgs,
    MutationRemoveUnitArgs,
    StrictCreateUnitArgs,
    StrictUpdateUnitArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableUnitPart> => currentData as T & AutodefinableUnitPart;

  const all = async (
    params: QueryAllUnitsArgs = {},
  ): Promise<Unit[]> => {
    return ctx.prisma.unit.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<Unit[]>;
  };

  const findOne = async (
    params: QueryAllUnitsArgs = {},
  ): Promise<Unit | null> => {
    return ctx.prisma.unit.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params),
      {noId: false},
    ));
  };

  const findOneRequired = async (
    params: QueryAllUnitsArgs = {},
  ): Promise<Unit> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<Unit | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<Unit> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllUnitsMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.unit.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllUnitsMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateUnitArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Unit> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedUnitForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableUnitCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.unit.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: getSearchString(processedData),
        },
      ),
    });

    const operations = [
      createOperation,
      ...(await runHooks.additionalOperationsOnCreate(ctx, processedData)),
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
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.Unit,
        entityId: result.id,
        actionData: data,
      }),
    ]);

    await runHooks.afterCreate(ctx, result as Unit);

    return result as Unit;
  };

  const createMany = async (
    entries: StrictCreateUnitArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateUnitArgs[];

    const result = await ctx.prisma.unit.createMany({
      data: augmentedByDefault.map(data => R.mergeDeepLeft(
        data,
        {
          search: getSearchString(data),
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
    data: MutationUpdateUnitArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Unit> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateUnitArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.unit.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.Unit,
      entityId: data.id,
      actionData: data,
    });

    const operations = [
      updateOperation,
      auditOperation,
      ...(await runHooks.additionalOperationsOnUpdate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      runHooks.afterUpdate(ctx, result as Unit),
    ]);

    return result as Unit;
  };

  const upsert = async (
    data: PartialFieldsInRecord<MutationUpdateUnitArgsWithoutAutodefinable, 'id'>,
    byUser = false,
  ): Promise<Unit> => {
    // Get db version
    const dbVersion = data.id ? await get(data.id) : null;

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateUnitArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as Unit);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.unit.upsert({
      create: createData,
      update: updateData,
      where: {id: data.id},
    });

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvanced = async (
    filter: UnitFilter,
    data: MutationCreateUnitArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Unit> => {
    const cnt = await count({filter});

    if (cnt > 1) {
      throw new Error(`There is more then one entity (${cnt}) that fits filter "${JSON.stringify(filter)}"`);
    } else if (cnt === 0) {
      return create(data, byUser);
    } else {
      const dbVersion = await findOneRequired({filter});
      return update({...data, id: dbVersion.id}, byUser);
    }
  };

  const del = async (
    params: MutationRemoveUnitArgs,
  ): Promise<Unit> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.unit.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.Unit,
      entityId: params.id,
    });

    const operations = [
      deleteOperation,
      auditOperation,
      ...(await runHooks.additionalOperationsOnDelete(ctx, params)),
    ];

    const entity = await get(params.id);

    if (!entity) {
      throw new Error(`There is no entity with "${params.id}" id`);
    }

    const [result] = await ctx.prisma.$transaction(operations as any);

    if (!result) {
      throw new Error('There is no such entity');
    }

    await runHooks.afterDelete(ctx, entity);

    return entity;
  };

  const baseMethods: BaseUnitsMethods = {
    get,
    getRequired,
    all,
    findOne,
    findOneRequired,
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

  const service: UnitsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
