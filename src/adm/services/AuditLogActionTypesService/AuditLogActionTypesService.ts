import {
  ListMetadata,
  MutationCreateAuditLogActionTypeArgs,
  MutationUpdateAuditLogActionTypeArgs,
  MutationRemoveAuditLogActionTypeArgs,
  QueryAllAuditLogActionTypesArgs,
  Query_AllAuditLogActionTypesMetaArgs,
  AuditLogActionType,
  AuditLogActionTypeFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalAuditLogActionTypesMethods, getAdditionalMethods} from './additionalMethods';
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

export interface BaseAuditLogActionTypesMethods {
  get: (id: string) =>
    Promise<AuditLogActionType | null>;
  all: (params?: QueryAllAuditLogActionTypesArgs) =>
    Promise<AuditLogActionType[]>;
  findOne: (params?: QueryAllAuditLogActionTypesArgs) =>
    Promise<AuditLogActionType | null>;
  count: (params?: Query_AllAuditLogActionTypesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllAuditLogActionTypesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateAuditLogActionTypeArgs, byUser?: boolean) =>
    Promise<AuditLogActionType>;
  createMany: (data: MutationCreateAuditLogActionTypeArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateAuditLogActionTypeArgs, byUser?: boolean) =>
    Promise<AuditLogActionType>;
  upsert: (data: MutationUpdateAuditLogActionTypeArgs, byUser?: boolean) =>
    Promise<AuditLogActionType>;
  upsertAdvanced: (
    filter: AuditLogActionTypeFilter,
    data: MutationCreateAuditLogActionTypeArgs,
    byUser?: boolean,
  ) =>
    Promise<AuditLogActionType>;
  delete: (params: MutationRemoveAuditLogActionTypeArgs) =>
    Promise<AuditLogActionType>;
}

export type AuditLogActionTypesService = BaseAuditLogActionTypesMethods & AdditionalAuditLogActionTypesMethods;

export const getAuditLogActionTypesService = (ctx: Context) => {
  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.auditLogActionType.findUnique,
    forbiddenForUserFields,
  );

  const get = async (
    id: string,
  ): Promise<AuditLogActionType | null> => {
    return ctx.prisma.auditLogActionType.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllAuditLogActionTypesArgs = {},
  ): Promise<AuditLogActionType[]> => {
    return ctx.prisma.auditLogActionType.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<AuditLogActionType[]>;
  };

  const findOne = async (
    params: QueryAllAuditLogActionTypesArgs = {},
  ): Promise<AuditLogActionType | null> => {
    return ctx.prisma.auditLogActionType.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllAuditLogActionTypesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.auditLogActionType.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllAuditLogActionTypesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateAuditLogActionTypeArgs,
    byUser = false,
  ): Promise<AuditLogActionType> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await beforeCreate(ctx, data);

    const createOperation = ctx.prisma.auditLogActionType.create({
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
    await ctx.prisma.auditLogActionType.update({
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

    await afterCreate(ctx, result as AuditLogActionType);

    return result as AuditLogActionType;
  };

  const createMany = async (
    entries: MutationCreateAuditLogActionTypeArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.auditLogActionType.createMany({
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
    data: MutationUpdateAuditLogActionTypeArgs,
    byUser = false,
  ): Promise<AuditLogActionType> => {
    let processedData = data;

    if (byUser) {
      processedData = await augmentDataFromDb(processedData);
    }

    processedData = await beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.auditLogActionType.update({
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

    await afterUpdate(ctx, result as AuditLogActionType);

    return result as AuditLogActionType;
  };

  const upsert = async (
    data: MutationUpdateAuditLogActionTypeArgs,
    byUser = false,
  ): Promise<AuditLogActionType> => {
    let processedDataToCreate = data;
    let processedDataToUpdate = data;

    if (byUser) {
      processedDataToCreate = R.mergeDeepLeft(
        {},
        processedDataToCreate,
      );

      processedDataToUpdate = await augmentDataFromDb(processedDataToUpdate);
    }

    const result = await ctx.prisma.auditLogActionType.upsert({create: R.mergeDeepLeft(
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
    filter: AuditLogActionTypeFilter,
    data: MutationCreateAuditLogActionTypeArgs,
    byUser = false,
  ): Promise<AuditLogActionType> => {
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
    params: MutationRemoveAuditLogActionTypeArgs,
  ): Promise<AuditLogActionType> => {
    const deleteOperation = ctx.prisma.auditLogActionType.delete({where: {id: params.id}});

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

  const baseMethods: BaseAuditLogActionTypesMethods = {
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
