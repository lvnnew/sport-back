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
import {Context} from '../context';
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
import * as R from 'ramda';

// DO NOT EDIT! THIS IS GENERATED FILE

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
  create: (data: MutationCreateMessageTemplateArgs) =>
    Promise<MessageTemplate>;
  createMany: (data: MutationCreateMessageTemplateArgs[]) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateMessageTemplateArgs) =>
    Promise<MessageTemplate>;
  upsert: (data: MutationUpdateMessageTemplateArgs) =>
    Promise<MessageTemplate>;
  upsertAdvanced: (
    filter: MessageTemplateFilter,
    data: MutationCreateMessageTemplateArgs,
  ) =>
    Promise<MessageTemplate>;
  delete: (params: MutationRemoveMessageTemplateArgs) =>
    Promise<MessageTemplate>;
}

export type MessageTemplatesService = BaseMessageTemplatesMethods & AdditionalMessageTemplatesMethods;

export const getMessageTemplatesService = (getCtx: () => Context) => {
  const get = async (
    id: string,
  ): Promise<MessageTemplate | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.messageTemplate.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllMessageTemplatesArgs = {},
  ): Promise<MessageTemplate[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.messageTemplate.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<MessageTemplate[]>;
  };

  const findOne = async (
    params: QueryAllMessageTemplatesArgs = {},
  ): Promise<MessageTemplate | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.messageTemplate.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllMessageTemplatesMetaArgs = {},
  ): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.messageTemplate.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllMessageTemplatesMetaArgs = {},
  ): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateMessageTemplateArgs,
  ): Promise<MessageTemplate> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.messageTemplate.create({
      data: R.mergeDeepLeft(
        processedData,
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
    await getCtx().prisma.messageTemplate.update({
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

    await afterCreate(getCtx, result as MessageTemplate);

    return result as MessageTemplate;
  };

  const createMany = async (
    entries: MutationCreateMessageTemplateArgs[],
  ): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const result = await getCtx().prisma.messageTemplate.createMany({
      data: entries.map(data => R.mergeDeepLeft(
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
  ): Promise<MessageTemplate> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.messageTemplate.update({
      data: R.mergeDeepLeft(
        rest,
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

    await afterUpdate(getCtx, result as MessageTemplate);

    return result as MessageTemplate;
  };

  const upsert = async (
    data: MutationUpdateMessageTemplateArgs,
  ): Promise<MessageTemplate> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.messageTemplate.upsert({create: R.mergeDeepLeft(
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
    ), update: R.mergeDeepLeft(
      rest,
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
    ), where: {id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvanced = async (
    filter: MessageTemplateFilter,
    data: MutationCreateMessageTemplateArgs,
  ): Promise<MessageTemplate> => {
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
    params: MutationRemoveMessageTemplateArgs,
  ): Promise<MessageTemplate> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.messageTemplate.delete({where: {id: params.id}});

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

  const additionalMethods = getAdditionalMethods(getCtx, baseMethods);

  return {
    ...baseMethods,
    ...additionalMethods,
  };
};
