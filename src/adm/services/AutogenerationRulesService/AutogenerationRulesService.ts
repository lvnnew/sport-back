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
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAutogenerationRulesMethods, getAdditionalMethods} from './additionalMethods';
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
  createMany: (data: MutationCreateAutogenerationRuleArgs[], byUser?: boolean) =>
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

export type AutogenerationRulesService = BaseAutogenerationRulesMethods & AdditionalAutogenerationRulesMethods;

export const getAutogenerationRulesService = (ctx: Context) => {
  const get = async (
    id: string,
  ): Promise<AutogenerationRule | null> => {
    return ctx.prisma.autogenerationRule.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllAutogenerationRulesArgs = {},
  ): Promise<AutogenerationRule[]> => {
    return ctx.prisma.autogenerationRule.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<AutogenerationRule[]>;
  };

  const findOne = async (
    params: QueryAllAutogenerationRulesArgs = {},
  ): Promise<AutogenerationRule | null> => {
    return ctx.prisma.autogenerationRule.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllAutogenerationRulesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.autogenerationRule.count(toPrismaTotalRequest(params));
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
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await beforeCreate(ctx, data);

    const createOperation = ctx.prisma.autogenerationRule.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'originalEntityType',
                  'generatingEntityType',
                  'originalEntityFilter',
                  'generatingEntityConstructionRules',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'version',
                ], processedData),
              )
              .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
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

    // update search. earlier we does not have id
    await ctx.prisma.autogenerationRule.update({
      where: {id: result.id},
      data: {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
                'originalEntityType',
                'generatingEntityType',
                'originalEntityFilter',
                'generatingEntityConstructionRules',
              ], result),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'version',
              ], result),
            )
            .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
        ].join(' '),
      },
    });

    await afterCreate(ctx, result as AutogenerationRule);

    return result as AutogenerationRule;
  };

  const createMany = async (
    entries: MutationCreateAutogenerationRuleArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.autogenerationRule.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'originalEntityType',
                  'generatingEntityType',
                  'originalEntityFilter',
                  'generatingEntityConstructionRules',
                ], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
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
    data: MutationUpdateAutogenerationRuleArgs,
    byUser = false,
  ): Promise<AutogenerationRule> => {
    let processedData = data;

    if (byUser) {
      processedData = R.omit(
        [],
        processedData,
      );
    }

    processedData = await beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.autogenerationRule.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
                  'originalEntityType',
                  'generatingEntityType',
                  'originalEntityFilter',
                  'generatingEntityConstructionRules',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
            ...R
              .toPairs(
                R.pick([
                  'version',
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
      ...(await additionalOperationsOnUpdate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await afterUpdate(ctx, result as AutogenerationRule);

    return result as AutogenerationRule;
  };

  const upsert = async (
    data: MutationUpdateAutogenerationRuleArgs,
    byUser = false,
  ): Promise<AutogenerationRule> => {
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

    const result = await ctx.prisma.autogenerationRule.upsert({create: R.mergeDeepLeft(
      processedDataToCreate,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
                'originalEntityType',
                'generatingEntityType',
                'originalEntityFilter',
                'generatingEntityConstructionRules',
              ], processedDataToCreate),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'version',
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
                'title',
                'originalEntityType',
                'generatingEntityType',
                'originalEntityFilter',
                'generatingEntityConstructionRules',
              ], processedDataToUpdate),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ...R
            .toPairs(
              R.pick([
                'version',
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
    filter: AutogenerationRuleFilter,
    data: MutationCreateAutogenerationRuleArgs,
    byUser = false,
  ): Promise<AutogenerationRule> => {
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
    params: MutationRemoveAutogenerationRuleArgs,
  ): Promise<AutogenerationRule> => {
    const deleteOperation = ctx.prisma.autogenerationRule.delete({where: {id: params.id}});

    const operations = [
      deleteOperation,
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

  return {
    ...baseMethods,
    ...additionalMethods,
  };
};
