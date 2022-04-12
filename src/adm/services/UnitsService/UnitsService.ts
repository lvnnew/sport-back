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

export type AutoDefinableUnitKeys = never;
export type ForbidenForUserUnitKeys = never;
export type RequiredDbNotUserUnitKeys = never;

export type AutodefinableUnitPart = DefinedRecord<Pick<MutationCreateUnitArgs, AutoDefinableUnitKeys>>;

export type ReliableUnitCreateUserInput =
  Omit<MutationCreateUnitArgs, ForbidenForUserUnitKeys>
  & AutodefinableUnitPart;

export type AllowedUnitForUserCreateInput = Omit<MutationCreateUnitArgs, ForbidenForUserUnitKeys>;

export type StrictCreateUnitArgs = DefinedFieldsInRecord<MutationCreateUnitArgs, RequiredDbNotUserUnitKeys> & AutodefinableUnitPart;
export type StrictUpdateUnitArgs = DefinedFieldsInRecord<MutationUpdateUnitArgs, RequiredDbNotUserUnitKeys> & AutodefinableUnitPart;

export type StrictCreateUnitArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateUnitArgs, AutoDefinableUnitKeys>;

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
  createMany: (data: StrictCreateUnitArgsWithoutAutoDefinable[], byUser?: boolean) =>
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

const otherFieldsForSearch: string[] = [];

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

  const getDefaultPart = async () => ({});

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
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findRequired = async (
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
    data: MutationCreateUnitArgs,
    byUser = false,
  ): Promise<Unit> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedUnitForUserCreateInput :
      data;

    // augment data by default fields
    const augmented = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

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
      runHooks.afterCreate(ctx, result as Unit),
    ]);

    return result as Unit;
  };

  const createMany = async (
    entries: StrictCreateUnitArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = await getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData = clearedData.map(data => R.mergeLeft(
      data,
      defaultPart,
    ) as StrictCreateUnitArgs);

    const result = await ctx.prisma.unit.createMany({
      data: augmentedData.map(data => R.mergeDeepLeft(
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
    data: MutationUpdateUnitArgs,
    byUser = false,
  ): Promise<Unit> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateUnitArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.unit.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
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
    data: MutationUpdateUnitArgs,
    byUser = false,
  ): Promise<Unit> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateUnitArgs = R.mergeLeft(cleared, augmentationBase);

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
    data: MutationCreateUnitArgs,
    byUser = false,
  ): Promise<Unit> => {
    const cnt = await count({filter});

    if (cnt > 1) {
      throw new Error(`There is more then one entity (${cnt}) that fits filter "${JSON.stringify(filter)}"`);
    }

    // Compose object for augmentation
    const dbVersion = await findRequired({filter});
    const defaultPart = await getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateUnitArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    if (cnt === 0) {
      return create(createData, false);
    } else {
      return update({...updateData, id: dbVersion.id}, false);
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

  const service: UnitsService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
