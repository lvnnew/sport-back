import {
  ListMetadata,
  MutationCreateTemplateStyleArgs,
  MutationUpdateTemplateStyleArgs,
  MutationRemoveTemplateStyleArgs,
  QueryAllTemplateStylesArgs,
  Query_AllTemplateStylesMetaArgs,
  TemplateStyle,
  TemplateStyleFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import {AdditionalTemplateStylesMethods, getAdditionalMethods} from './additionalMethods';
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

export type AutodefinableTemplateStyleKeys = never;
export type ForbidenForUserTemplateStyleKeys = never;
export type RequiredDbNotUserTemplateStyleKeys = never;

export type AutodefinableTemplateStylePart = DefinedRecord<Pick<MutationCreateTemplateStyleArgs, AutodefinableTemplateStyleKeys>>;

export type ReliableTemplateStyleCreateUserInput =
  Omit<MutationCreateTemplateStyleArgs, ForbidenForUserTemplateStyleKeys>
  & AutodefinableTemplateStylePart;

export type AllowedTemplateStyleForUserCreateInput = Omit<MutationCreateTemplateStyleArgs, ForbidenForUserTemplateStyleKeys>;

export type StrictCreateTemplateStyleArgs = DefinedFieldsInRecord<MutationCreateTemplateStyleArgs, RequiredDbNotUserTemplateStyleKeys> & AutodefinableTemplateStylePart;
export type StrictUpdateTemplateStyleArgs = DefinedFieldsInRecord<MutationUpdateTemplateStyleArgs, RequiredDbNotUserTemplateStyleKeys> & AutodefinableTemplateStylePart;

export type StrictCreateTemplateStyleArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateTemplateStyleArgs, AutodefinableTemplateStyleKeys>;
export type MutationCreateTemplateStyleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateTemplateStyleArgs, AutodefinableTemplateStyleKeys>;
export type MutationUpdateTemplateStyleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateTemplateStyleArgs, AutodefinableTemplateStyleKeys>;

export interface BaseTemplateStylesMethods {
  get: (id: number) =>
    Promise<TemplateStyle | null>;
  getRequired: (id: number) =>
    Promise<TemplateStyle>;
  all: (params?: QueryAllTemplateStylesArgs) =>
    Promise<TemplateStyle[]>;
  findOne: (params?: QueryAllTemplateStylesArgs) =>
    Promise<TemplateStyle | null>;
  findOneRequired: (params?: QueryAllTemplateStylesArgs) =>
    Promise<TemplateStyle>;
  count: (params?: Query_AllTemplateStylesMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllTemplateStylesMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateTemplateStyleArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<TemplateStyle>;
  createMany: (data: StrictCreateTemplateStyleArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateTemplateStyleArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<TemplateStyle>;
  upsert: (
    data: PartialFieldsInRecord<MutationUpdateTemplateStyleArgsWithoutAutodefinable, 'id'>,
    byUser?: boolean,
  ) =>
    Promise<TemplateStyle>;
  upsertAdvanced: (
    filter: TemplateStyleFilter,
    data: MutationCreateTemplateStyleArgsWithoutAutodefinable,
    byUser?: boolean,
  ) =>
    Promise<TemplateStyle>;
  delete: (params: MutationRemoveTemplateStyleArgs) =>
    Promise<TemplateStyle>;
}

export type TemplateStylesService = BaseTemplateStylesMethods
  & AdditionalTemplateStylesMethods
  & HooksAddType<
    TemplateStyle,
    QueryAllTemplateStylesArgs,
    ReliableTemplateStyleCreateUserInput,
    MutationUpdateTemplateStyleArgs,
    MutationRemoveTemplateStyleArgs,
    StrictCreateTemplateStyleArgs,
    StrictUpdateTemplateStyleArgs
  >;

const dateFieldsForSearch: string[] = [];

const otherFieldsForSearch: string[] = [
  'id',
  'title',
  'style',
];

export const getTemplateStylesService = (ctx: Context) => {
  const {hooksAdd, runHooks} = getHooksUtils<
    TemplateStyle,
    QueryAllTemplateStylesArgs,
    ReliableTemplateStyleCreateUserInput,
    MutationUpdateTemplateStyleArgs,
    MutationRemoveTemplateStyleArgs,
    StrictCreateTemplateStyleArgs,
    StrictUpdateTemplateStyleArgs
  >();

  const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

  const augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableTemplateStylePart> => currentData as T;

  const all = async (
    params: QueryAllTemplateStylesArgs = {},
  ): Promise<TemplateStyle[]> => {
    return ctx.prisma.templateStyle.findMany(
      toPrismaRequest(await runHooks.changeListFilter(ctx, params), {noId: false}),
    ) as unknown as Promise<TemplateStyle[]>;
  };

  const findOne = async (
    params: QueryAllTemplateStylesArgs = {},
  ): Promise<TemplateStyle | null> => {
    return ctx.prisma.templateStyle.findFirst(toPrismaRequest(
      await runHooks.changeListFilter(ctx, params),
      {noId: false},
    ));
  };

  const findOneRequired = async (
    params: QueryAllTemplateStylesArgs = {},
  ): Promise<TemplateStyle> => {
    const found = await findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  const get = async (
    id: number,
  ): Promise<TemplateStyle | null> => {
    return findOne({filter: {id}});
  };

  const getRequired = async (
    id: number,
  ): Promise<TemplateStyle> => {
    const found = await get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  const count = async (
    params: Query_AllTemplateStylesMetaArgs = {},
  ): Promise<number> => {
    return ctx.prisma.templateStyle.count(toPrismaTotalRequest(await runHooks.changeListFilter(ctx, params)));
  };

  const meta = async (
    params: Query_AllTemplateStylesMetaArgs = {},
  ): Promise<ListMetadata> => {
    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateTemplateStyleArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<TemplateStyle> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(forbiddenForUserFields, data) as AllowedTemplateStyleForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableTemplateStyleCreateUserInput = await augmentByDefault(cleared);

    const processedData = await runHooks.beforeCreate(ctx, augmentedByDefault);

    const createOperation = ctx.prisma.templateStyle.create({
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
      ctx.prisma.templateStyle.update({
        where: {id: result.id},
        data: {
          search: getSearchString(result),
        },
      }),
      ctx.service('auditLogs').addCreateOperation({
        entityTypeId: Entity.TemplateStyle,
        entityId: result.id,
        actionData: data,
      }),
    ]);

    await runHooks.afterCreate(ctx, result as TemplateStyle);

    return result as TemplateStyle;
  };

  const createMany = async (
    entries: StrictCreateTemplateStyleArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => augmentByDefault(el)),
    ) as StrictCreateTemplateStyleArgs[];

    const result = await ctx.prisma.templateStyle.createMany({
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
    data: MutationUpdateTemplateStyleArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<TemplateStyle> => {
    // Get db version
    const dbVersion = await getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateTemplateStyleArgs = R.mergeLeft(augmentedByDefault, dbVersion);

    const processedData = await runHooks.beforeUpdate(ctx, augmented);

    const {id, ...rest} = processedData;

    const updateOperation = ctx.prisma.templateStyle.update({
      data: R.mergeDeepLeft(
        {
          search: getSearchString(processedData),
        },
        rest,
      ),
      where: {id},
    });

    const auditOperation = ctx.service('auditLogs').addUpdateOperation({
      entityTypeId: Entity.TemplateStyle,
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
      runHooks.afterUpdate(ctx, result as TemplateStyle),
    ]);

    return result as TemplateStyle;
  };

  const upsert = async (
    data: PartialFieldsInRecord<MutationUpdateTemplateStyleArgsWithoutAutodefinable, 'id'>,
    byUser = false,
  ): Promise<TemplateStyle> => {
    // Get db version
    const dbVersion = data.id ? await get(data.id) : null;

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await augmentByDefault(cleared);

    // augment data by fields from db
    const augmented: StrictUpdateTemplateStyleArgs =
      R.mergeLeft(augmentedByDefault, dbVersion || {} as TemplateStyle);

    const processedData = await runHooks.beforeUpsert(ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: getSearchString(processedData.updateData),
    };

    const result = await ctx.prisma.templateStyle.upsert({
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
    filter: TemplateStyleFilter,
    data: MutationCreateTemplateStyleArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<TemplateStyle> => {
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
    params: MutationRemoveTemplateStyleArgs,
  ): Promise<TemplateStyle> => {
    await runHooks.beforeDelete(ctx, params);

    const deleteOperation = ctx.prisma.templateStyle.delete({where: {id: params.id}});

    const auditOperation = ctx.service('auditLogs').addDeleteOperation({
      entityTypeId: Entity.TemplateStyle,
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

  const baseMethods: BaseTemplateStylesMethods = {
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

  const service: TemplateStylesService = {
    ...baseMethods,
    ...additionalMethods,
    hooksAdd,
  };

  initBuiltInHooks(service);
  initUserHooks(service);

  return service;
};
