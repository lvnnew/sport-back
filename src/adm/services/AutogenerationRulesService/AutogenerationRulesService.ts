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
import {Context} from '../context';
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
  create: (data: MutationCreateAutogenerationRuleArgs) =>
    Promise<AutogenerationRule>;
  createMany: (data: MutationCreateAutogenerationRuleArgs[]) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAutogenerationRuleArgs) =>
    Promise<AutogenerationRule>;
  upsert: (data: MutationUpdateAutogenerationRuleArgs) =>
    Promise<AutogenerationRule>;
  upsertAdvanced: (
    filter: AutogenerationRuleFilter,
    data: MutationCreateAutogenerationRuleArgs,
  ) =>
    Promise<AutogenerationRule>;
  delete: (params: MutationRemoveAutogenerationRuleArgs) =>
    Promise<boolean>;
}

export type AutogenerationRulesService = BaseAutogenerationRulesMethods & AdditionalAutogenerationRulesMethods;

export const getAutogenerationRulesService = (getCtx: () => Context) => {
  const get = async (
    id: string,
  ): Promise<AutogenerationRule | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.autogenerationRule.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllAutogenerationRulesArgs = {},
  ): Promise<AutogenerationRule[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.autogenerationRule.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<AutogenerationRule[]>;
  };

  const findOne = async (
    params: QueryAllAutogenerationRulesArgs = {},
  ): Promise<AutogenerationRule | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.autogenerationRule.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllAutogenerationRulesMetaArgs = {},
  ): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.autogenerationRule.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllAutogenerationRulesMetaArgs = {},
  ): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAutogenerationRuleArgs,
  ): Promise<AutogenerationRule> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.autogenerationRule.create({
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
    await getCtx().prisma.autogenerationRule.update({
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

    await afterCreate(getCtx, result as AutogenerationRule);

    return result as AutogenerationRule;
  };

  const createMany = async (
    entries: MutationCreateAutogenerationRuleArgs[],
  ): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const result = await getCtx().prisma.autogenerationRule.createMany({
      data: entries.map(data => R.mergeDeepLeft(
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
  ): Promise<AutogenerationRule> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.autogenerationRule.update({
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

    await afterUpdate(getCtx, result as AutogenerationRule);

    return result as AutogenerationRule;
  };

  const upsert = async (
    data: MutationUpdateAutogenerationRuleArgs,
  ): Promise<AutogenerationRule> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.autogenerationRule.upsert({create: R.mergeDeepLeft(
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
    ), update: R.mergeDeepLeft(
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
    ), where: {id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvanced = async (
    filter: AutogenerationRuleFilter,
    data: MutationCreateAutogenerationRuleArgs,
  ): Promise<AutogenerationRule> => {
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
    params: MutationRemoveAutogenerationRuleArgs,
  ): Promise<boolean> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.autogenerationRule.delete({where: {id: params.id}});

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

    return true;
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

  const additionalMethods = getAdditionalMethods(getCtx, baseMethods);

  return {
    ...baseMethods,
    ...additionalMethods,
  };
};
