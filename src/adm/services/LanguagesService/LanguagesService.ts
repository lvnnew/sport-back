import {
  ListMetadata,
  MutationCreateLanguageArgs,
  MutationUpdateLanguageArgs,
  MutationRemoveLanguageArgs,
  QueryAllLanguagesArgs,
  Query_AllLanguagesMetaArgs,
  Language,
  LanguageFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalLanguagesMethods, getAdditionalMethods} from './additionalMethods';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {getHooksUtils, HooksAddType} from '../getHooksUtils';
import getAugmenterByDataFromDb from '../utils/getAugmenterByDataFromDb';
import * as R from 'ramda';
import AuditLogActionType from '../../../types/AuditLogActionType';
import Entity from '../../../types/Entity';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';

// DO NOT EDIT! THIS IS GENERATED FILE

const forbiddenForUserFields: string[] = [];

export type StrictUpdateLanguageArgs = MutationUpdateLanguageArgs;
export type StrictCreateLanguageArgs = MutationCreateLanguageArgs;

export interface BaseLanguagesMethods {
  get: (id: string) =>
    Promise<Language | null>;
  all: (params?: QueryAllLanguagesArgs) =>
    Promise<Language[]>;
  findOne: (params?: QueryAllLanguagesArgs) =>
    Promise<Language | null>;
  count: (params?: Query_AllLanguagesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllLanguagesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateLanguageArgs, byUser?: boolean) =>
    Promise<Language>;
  createMany: (data: MutationCreateLanguageArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateLanguageArgs, byUser?: boolean) =>
    Promise<Language>;
  upsert: (data: MutationUpdateLanguageArgs, byUser?: boolean) =>
    Promise<Language>;
  upsertAdvanced: (
    filter: LanguageFilter,
    data: MutationCreateLanguageArgs,
    byUser?: boolean,
  ) =>
    Promise<Language>;
  delete: (params: MutationRemoveLanguageArgs) =>
    Promise<Language>;
}

export type LanguagesService = BaseLanguagesMethods
  & AdditionalLanguagesMethods
  & HooksAddType<
    Language,
    QueryAllLanguagesArgs,
    MutationCreateLanguageArgs,
    MutationUpdateLanguageArgs,
    MutationRemoveLanguageArgs,
    StrictCreateLanguageArgs,
    StrictUpdateLanguageArgs
  >;

export const getLanguagesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    Language,
    QueryAllLanguagesArgs,
    MutationCreateLanguageArgs,
    MutationUpdateLanguageArgs,
    MutationRemoveLanguageArgs,
    StrictCreateLanguageArgs,
    StrictUpdateLanguageArgs
  >();

  const augmentDataFromDb = getAugmenterByDataFromDb(
    ctx.prisma.language.findUnique,
    forbiddenForUserFields,
  );

  const all = async (
    params: QueryAllLanguagesArgs = {},
  ): Promise<Language[]> => {
    return ctx.prisma.language.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<Language[]>;
  };

  const findOne = async (
    params: QueryAllLanguagesArgs = {},
  ): Promise<Language | null> => {
    return ctx.prisma.language.findFirst(toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}));
  };

  const get = async (
    id: string,
  ): Promise<Language | null> => {
    return findOne({filter: {id}});
  };

  const count = async (
    params: Query_AllLanguagesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.language.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllLanguagesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateLanguageArgs,
    byUser = false,
  ): Promise<Language> => {
    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await runHooks.beforeCreate(ctx, data);

    const createOperation = ctx.prisma.language.create({
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
      ...(await runHooks.additionalOperationsOnCreate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
    // update search. earlier we does not have id
      ctx.prisma.language.update({
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
      }),
      ctx.prisma.auditLog.create({
        data: {
          date: new Date(),
          title: 'Languages create',
          entityTypeId: Entity.Language,
          entityId: result.id.toString(),
          actionTypeId: AuditLogActionType.Create,
          actionData: JSON.stringify(data),
          managerId: ctx.service('profile').getManagerId(),
          userId: ctx.service('profile').getUserId(),
        },
      }),
      runHooks.afterCreate(ctx, result as Language),
    ]);

    return result as Language;
  };

  const createMany = async (
    entries: MutationCreateLanguageArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await ctx.prisma.language.createMany({
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
    data: MutationUpdateLanguageArgs,
    byUser = false,
  ): Promise<Language> => {
    const augmented = await augmentDataFromDb(data);

    let processedData = byUser ? augmented : {
      ...augmented,
      ...data,
    } as StrictUpdateLanguageArgs;

    processedData = await runHooks.beforeUpdate(ctx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.language.update({
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

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Languages update',
        entityTypeId: Entity.Language,
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
      ...(await runHooks.additionalOperationsOnUpdate(ctx, processedData)),
    ];

    const [result] = await ctx.prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      runHooks.afterUpdate(ctx, result as Language),
    ]);

    return result as Language;
  };

  const upsert = async (
    data: MutationUpdateLanguageArgs,
    byUser = false,
  ): Promise<Language> => {
    const augmented = await augmentDataFromDb(data);

    let createData = byUser ? R.mergeDeepLeft(
      {},
      data,
    ) : data as StrictCreateLanguageArgs;
    let updateData = byUser ? augmented : {...augmented, ...data} as StrictUpdateLanguageArgs;

    const handledData = await runHooks.beforeUpsert(ctx, {createData, updateData});
    createData = handledData.createData;
    updateData = handledData.updateData;

    const result = await ctx.prisma.language.upsert({create: R.mergeDeepLeft(
      createData,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'title',
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
    filter: LanguageFilter,
    data: MutationCreateLanguageArgs,
    byUser = false,
  ): Promise<Language> => {
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
    params: MutationRemoveLanguageArgs,
  ): Promise<Language> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.language.delete({where: {id: params.id}});

    const auditOperation = ctx.prisma.auditLog.create({
      data: {
        date: new Date(),
        title: 'Languages delete',
        entityTypeId: Entity.Language,
        entityId: params.id.toString(),
        actionTypeId: AuditLogActionType.Delete,
        managerId: ctx.service('profile').getManagerId(),
        userId: ctx.service('profile').getUserId(),
      },
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

  const baseMethods: BaseLanguagesMethods = {
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

  const service: LanguagesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
