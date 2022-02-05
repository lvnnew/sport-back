import {
  ListMetadata,
  MutationCreateMessageTemplateArgs,
  MutationUpdateMessageTemplateArgs,
  MutationRemoveMessageTemplateArgs,
  QueryAllMessageTemplatesArgs,
  Query_AllMessageTemplatesMetaArgs,
  MessageTemplate,
  MessageTemplateFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalMessageTemplatesMethods, getAdditionalMethods} from './additionalMethods';
import {additionalOperationsOnCreate} from './hooks/additionalOperationsOnCreate';
import {additionalOperationsOnUpdate} from './hooks/additionalOperationsOnUpdate';
import {additionalOperationsOnDelete} from './hooks/additionalOperationsOnDelete';
import {beforeCreate} from './hooks/beforeCreate';
import {beforeUpdate} from './hooks/beforeUpdate';
import {afterCreate} from './hooks/afterCreate';
import {afterUpdate} from './hooks/afterUpdate';
import {afterDelete} from './hooks/afterDelete';
import getAugmenterByDataFromDb from '../utils/getAugmenterByDataFromDb';
import * as R from 'ramda';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export interface BaseMessageTemplatesMethods {
  get: (id: string) =>
    Promise<MessageTemplate | null>;
  all: (params?: QueryAllMessageTemplatesArgs) =>
    Promise<MessageTemplate[]>;
  findOne: (params?: QueryAllMessageTemplatesArgs) =>
    Promise<MessageTemplate | null>;
  count: (params?: Query_AllMessageTemplatesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllMessageTemplatesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateMessageTemplateArgs, byUser?: boolean) =>
    Promise<MessageTemplate>;
  createMany: (data: MutationCreateMessageTemplateArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateMessageTemplateArgs, byUser?: boolean) =>
    Promise<MessageTemplate>;
  upsert: (data: MutationUpdateMessageTemplateArgs, byUser?: boolean) =>
    Promise<MessageTemplate>;
  upsertAdvanced: (
    filter: MessageTemplateFilter,
    data: MutationCreateMessageTemplateArgs,
    byUser?: boolean,
  ) =>
    Promise<MessageTemplate>;
  delete: (params: MutationRemoveMessageTemplateArgs) =>
    Promise<MessageTemplate>;
}

export type MessageTemplatesService = BaseMessageTemplatesMethods & AdditionalMessageTemplatesMethods;

export const getMessageTemplatesService = (ctx: Context) => {
  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.messageTemplate.findUnique,
    forbiddenForUserFields,
  );

  const get = async (
    id: string,
  ): Promise<MessageTemplate | null> => {
    return ctx.prisma.messageTemplate.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllMessageTemplatesArgs = {},
  ): Promise<MessageTemplate[]> => {
    return ctx.prisma.messageTemplate.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<MessageTemplate[]>;
  };

  const findOne = async (
    params: QueryAllMessageTemplatesArgs = {},
  ): Promise<MessageTemplate | null> => {
    return ctx.prisma.messageTemplate.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllMessageTemplatesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.messageTemplate.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllMessageTemplatesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateMessageTemplateArgs,
    byUser = false,
  ): Promise<MessageTemplate> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await beforeCreate(ctx, data);

    const createOperation = ctx.prisma.messageTemplate.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
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

    // update search. earlier we does not have id
    await ctx.prisma.messageTemplate.update({
      where: {id: result.id},
      data: {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
              ], result),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    });

    await afterCreate(ctx, result as MessageTemplate);

    return result as MessageTemplate;
  };

  const createMany = async (
    entries: MutationCreateMessageTemplateArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.messageTemplate.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
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
    data: MutationUpdateMessageTemplateArgs,
    byUser = false,
  ): Promise<MessageTemplate> => {
    let processedData = data;

    if (byUser) {
      processedData = await augmentDataFromDb(processedData);
    }

    processedData = await beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.messageTemplate.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'title',
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
      ...(await additionalOperationsOnUpdate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await afterUpdate(ctx, result as MessageTemplate);

    return result as MessageTemplate;
  };

  const upsert = async (
    data: MutationUpdateMessageTemplateArgs,
    byUser = false,
  ): Promise<MessageTemplate> => {
    let processedDataToCreate = data;
    let processedDataToUpdate = data;

    if (byUser) {
      processedDataToCreate = R.mergeDeepLeft(
        {},
        processedDataToCreate,
      );

      processedDataToUpdate = await augmentDataFromDb(processedDataToUpdate);
    }

    const result = await ctx.prisma.messageTemplate.upsert({create: R.mergeDeepLeft(
      processedDataToCreate,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
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
    filter: MessageTemplateFilter,
    data: MutationCreateMessageTemplateArgs,
    byUser = false,
  ): Promise<MessageTemplate> => {
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
    params: MutationRemoveMessageTemplateArgs,
  ): Promise<MessageTemplate> => {
    const deleteOperation = ctx.prisma.messageTemplate.delete({where: {id: params.id}});

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

  const baseMethods: BaseMessageTemplatesMethods = {
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
