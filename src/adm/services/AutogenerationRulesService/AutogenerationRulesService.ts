import {
  ListMetadata,
  MutationCreateAutogenerationRuleArgs,
  MutationUpdateAutogenerationRuleArgs,
  MutationRemoveAutogenerationRuleArgs,
  QueryAllAutogenerationRulesArgs,
  Query_AllAutogenerationRulesMetaArgs,
  AutogenerationRule,
  AutogenerationRuleFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAutogenerationRulesMethods, getAdditionalMethods} from './additionalMethods';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {getHooksUtils, HooksAddType} from '../getHooksUtils';
import * as R from 'ramda';
import Entity from '../../../types/Entity';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {DefinedFieldsInRecord, PartialFieldsInRecord} from '../../../types/utils';
import getSearchStringCreator from '../utils/getSearchStringCreator';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type AutoDefinableAutogenerationRuleKeys = never;
export type AutoDefinableAutogenerationRulePart = MutationCreateAutogenerationRuleArgs;
export type MutationCreateAutogenerationRuleArgsWithAutoDefinable = AutoDefinableAutogenerationRulePart & MutationCreateAutogenerationRuleArgs;
export type MutationCreateAutogenerationRuleArgsWithoutAutoDefinable = Omit<MutationCreateAutogenerationRuleArgs, AutoDefinableAutogenerationRuleKeys>;

export type StrictUpdateAutogenerationRuleArgs = DefinedFieldsInRecord<MutationUpdateAutogenerationRuleArgs, AutoDefinableAutogenerationRuleKeys>;
export type StrictCreateAutogenerationRuleArgs = DefinedFieldsInRecord<MutationCreateAutogenerationRuleArgs, AutoDefinableAutogenerationRuleKeys>;

export type StrictCreateAutogenerationRuleArgsWithoutAutoDefinable = PartialFieldsInRecord<StrictCreateAutogenerationRuleArgs, AutoDefinableAutogenerationRuleKeys>;

export interface BaseAutogenerationRulesMethods {
  get: (id: string) =>
    Promise<AutogenerationRule | null>;
  all: (params?: QueryAllAutogenerationRulesArgs) =>
    Promise<AutogenerationRule[]>;
  findOne: (params?: QueryAllAutogenerationRulesArgs) =>
    Promise<AutogenerationRule | null>;
  count: (params?: Query_AllAutogenerationRulesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAutogenerationRulesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAutogenerationRuleArgs, byUser?: boolean) =>
    Promise<AutogenerationRule>;
  createMany: (data: StrictCreateAutogenerationRuleArgsWithoutAutoDefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAutogenerationRuleArgs, byUser?: boolean) =>
    Promise<AutogenerationRule>;
  upsert: (data: MutationUpdateAutogenerationRuleArgs, byUser?: boolean) =>
    Promise<AutogenerationRule>;
  upsertAdvanced: (
    filter: AutogenerationRuleFilter,
    data: MutationCreateAutogenerationRuleArgs,
    byUser?: boolean,
  ) =>
    Promise<AutogenerationRule>;
  delete: (params: MutationRemoveAutogenerationRuleArgs) =>
    Promise<AutogenerationRule>;
}

export type AutogenerationRulesService = BaseAutogenerationRulesMethods
  & AdditionalAutogenerationRulesMethods
  & HooksAddType<
    AutogenerationRule,
    QueryAllAutogenerationRulesArgs,
    MutationCreateAutogenerationRuleArgsWithAutoDefinable,
    MutationUpdateAutogenerationRuleArgs,
    MutationRemoveAutogenerationRuleArgs,
    StrictCreateAutogenerationRuleArgs,
    StrictUpdateAutogenerationRuleArgs
  >;

const dateFieldsForSearch: string[] = [
  'version',
];

const otherFieldsForSearch: string[] = [
  'id',
  'title',
  'originalEntityType',
  'generatingEntityType',
  'originalEntityFilter',
  'generatingEntityConstructionRules',
];

export const getAutogenerationRulesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    AutogenerationRule,
    QueryAllAutogenerationRulesArgs,
    MutationCreateAutogenerationRuleArgsWithAutoDefinable,
    MutationUpdateAutogenerationRuleArgs,
    MutationRemoveAutogenerationRuleArgs,
    StrictCreateAutogenerationRuleArgs,
    StrictUpdateAutogenerationRuleArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const getDefaultPart = () => ({});

  const all = async (
    params: QueryAllAutogenerationRulesArgs = {},
  ): Promise<AutogenerationRule[]> => {
    return ctx.prisma.autogenerationRule.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<AutogenerationRule[]>;
  };

  const findOne = async (
    params: QueryAllAutogenerationRulesArgs = {},
  ): Promise<AutogenerationRule | null> => {
    return ctx.prisma.autogenerationRule.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params), {noId: false}),
    );
  };

  const findRequired = async (
    params: QueryAllAutogenerationRulesArgs = {},
  ): Promise<AutogenerationRule> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: string,
  ): Promise<AutogenerationRule | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: string,
  ): Promise<AutogenerationRule> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllAutogenerationRulesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.autogenerationRule.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllAutogenerationRulesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAutogenerationRuleArgs,
    byUser = false,
  ): Promise<AutogenerationRule> => {
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as MutationCreateAutogenerationRuleArgsWithoutAutoDefinable :
      data;

    // augment data by default fields
    const augmented: MutationCreateAutogenerationRuleArgsWithAutoDefinable = R.mergeLeft(cleared, defaultPart);

    const processedData = await runHooks.beforeCreate(ctx, augmented);

    const createOperation = ctx.prisma.autogenerationRule.create({
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
      ctx.prisma.autogenerationRule.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.AutogenerationRule,
        entityId: result.id,
        actionData: data,
      }),
      runHooks.afterCreate(ctx, result as AutogenerationRule),
    ]);

    return result as AutogenerationRule;
  };

  const createMany = async (
    entries: StrictCreateAutogenerationRuleArgsWithoutAutoDefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    const defaultPart = getDefaultPart();

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // augment data by default fields
    const augmentedData =
      clearedData.map(data => R.mergeLeft(data, defaultPart) as MutationCreateAutogenerationRuleArgsWithAutoDefinable);

    const result = await ctx.prisma.autogenerationRule.createMany({
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
    data: MutationUpdateAutogenerationRuleArgs,
    byUser = false,
  ): Promise<AutogenerationRule> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAutogenerationRuleArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.autogenerationRule.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: getSearchString(processedData),
        },
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.AutogenerationRule,
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
      runHooks.afterUpdate(ctx, result as AutogenerationRule),
    ]);

    return result as AutogenerationRule;
  };

  const upsert = async (
    data: MutationUpdateAutogenerationRuleArgs,
    byUser = false,
  ): Promise<AutogenerationRule> => {
    // Compose object for augmentation
    const dbVersion = await getRequired(data.id);
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAutogenerationRuleArgs = R.mergeLeft(cleared, augmentationBase);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.autogenerationRule.upsert({
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
    filter: AutogenerationRuleFilter,
    data: MutationCreateAutogenerationRuleArgs,
    byUser = false,
  ): Promise<AutogenerationRule> => {
    const cnt = await count({filter});

    if (cnt > 1) {
      throw new Error(`There is more then one entity (${cnt}) that fits filter "${JSON.stringify(filter)}"`);
    }

    // Compose object for augmentation
    const dbVersion = await findRequired({filter});
    const defaultPart = getDefaultPart();
    const augmentationBase = R.mergeLeft(dbVersion, defaultPart);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // augment data by default fields and fields from db
    const augmented: StrictUpdateAutogenerationRuleArgs = R.mergeLeft(cleared, augmentationBase);

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
    params: MutationRemoveAutogenerationRuleArgs,
  ): Promise<AutogenerationRule> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.autogenerationRule.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.AutogenerationRule,
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

  const baseMethods: BaseAutogenerationRulesMethods = {
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

  const service: AutogenerationRulesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
