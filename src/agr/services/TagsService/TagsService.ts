/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  ListMetadata,
  MutationCreateTagArgs,
  MutationUpdateTagArgs,
  MutationRemoveTagArgs,
  QueryAllTagsArgs,
  Query_AllTagsMetaArgs,
  Tag,
  TagFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {AgrContext} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalTagsMethods, getAdditionalMethods} from './additionalMethods';
import {additionalOperationsOnCreate} from './hooks/additionalOperationsOnCreate';
import {additionalOperationsOnUpdate} from './hooks/additionalOperationsOnUpdate';
import {additionalOperationsOnDelete} from './hooks/additionalOperationsOnDelete';
import {beforeCreate} from './hooks/beforeCreate';
import {beforeUpdate} from './hooks/beforeUpdate';
import {afterCreate} from './hooks/afterCreate';
import {afterUpdate} from './hooks/afterUpdate';
import {afterDelete} from './hooks/afterDelete';
import R from 'ramda';

// DO NOT EDIT! THIS IS GENERATED FILE

export interface BaseTagsMethods {
  get: (id: number) => Promise<Tag | null>;
  all: (params?: QueryAllTagsArgs) => Promise<Tag[]>;
  findOne: (params?: QueryAllTagsArgs) => Promise<Tag | null>;
  count: (params?: Query_AllTagsMetaArgs) => Promise<number>;
  meta: (params?: Query_AllTagsMetaArgs) => Promise<ListMetadata>;
  create: (data: MutationCreateTagArgs) => Promise<Tag>;
  createMany: (data: MutationCreateTagArgs[]) => Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateTagArgs) => Promise<Tag>;
  upsert: (data: MutationUpdateTagArgs) => Promise<Tag>;
  upsertAdvansed: (filter: TagFilter, data: MutationCreateTagArgs) => Promise<Tag>;
  delete: (params: MutationRemoveTagArgs) => Promise<boolean>;
}

export type TagsService = BaseTagsMethods & AdditionalTagsMethods;

export const getTagsService = (getCtx: () => AgrContext) => {
  const get = async (id: number): Promise<Tag | null> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return getCtx().prisma.tag.findUnique({where: {id}});
  };

  const all = async (params: QueryAllTagsArgs = {}): Promise<Tag[]> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return getCtx().prisma.tag.findMany(toPrismaRequest(params, {noId: true})) as unknown as Promise<Tag[]>;
  };

  const findOne = async (params: QueryAllTagsArgs = {}): Promise<Tag | null> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return getCtx().prisma.tag.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (params: Query_AllTagsMetaArgs = {}): Promise<number> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return getCtx().prisma.tag.count(toPrismaTotalRequest(params));
  };

  const meta = async (params: Query_AllTagsMetaArgs = {}): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (data: MutationCreateTagArgs): Promise<Tag> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.tag.create({
      data: R.mergeDeepLeft(
        {
          search: R.toPairs(
          R.pick(['id', 'comment'], data),
        )
          .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? '')
          .join(' '),
        
        },
        processedData,
      ),
    });

    const operations = [
      createOperation,
      ...(await additionalOperationsOnCreate(getCtx, processedData)),
    ];

    const [result] = await getCtx().prisma.$transaction(operations as any);

    // update search. earlier we does not have id
    await getCtx().prisma.tag.update({
      where: {id: result.id},
      data: {
        search: R.toPairs(
          R.pick(['id', 'comment'], result),
        )
          .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? '')
          .join(' '),
        
      },
    });

    await afterCreate(getCtx, result as Tag);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as Tag;
  };

  const createMany = async (entries: MutationCreateTagArgs[]): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const result = await getCtx().prisma.tag.createMany({
      data: entries.map(data => R.mergeDeepLeft(
        {
          search: R.toPairs(
          R.pick(['id', 'comment'], data),
        )
          .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? '')
          .join(' '),
        
        },
        data,
      )),
      skipDuplicates: true,
    });

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const update = async (data: MutationUpdateTagArgs): Promise<Tag> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.tag.update({
      data: R.mergeDeepLeft(
        {
          search: R.toPairs(
          R.pick(['id', 'comment'], data),
        )
          .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? '')
          .join(' '),
        
        },
        rest,
      ),
      where: {id},
    });

    const operations = [
      updateOperation,
      ...(await additionalOperationsOnUpdate(getCtx, processedData)),
    ];

    const [result] = await getCtx().prisma.$transaction(operations as any);

    await afterUpdate(getCtx, result as Tag);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as Tag;
  };

  const upsert = async (data: MutationUpdateTagArgs): Promise<Tag> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.tag.upsert({create: R.mergeDeepLeft(
      {
        search: R.toPairs(
          R.pick(['id', 'comment'], data),
        )
          .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? '')
          .join(' '),
        
      },
      data,
    ), update: R.mergeDeepLeft(
      {
        search: R.toPairs(
          R.pick(['id', 'comment'], data),
        )
          .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? '')
          .join(' '),
        
      },
      rest,
    ), where: {id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvansed = async (filter: TagFilter, data: MutationCreateTagArgs): Promise<Tag> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
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

  const del = async (params: MutationRemoveTagArgs): Promise<boolean> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const deleteOperation = getCtx().prisma.tag.delete({where: {id: params.id}});

    const operations = [
      deleteOperation,
      ...(await additionalOperationsOnDelete(getCtx, params)),
    ];

    const entity = await get(params.id);

    if (!entity) {
      throw new Error(`There is no entity with "${params.id}" id`);
    }

    const [result] = await getCtx().prisma.$transaction(operations as any);

    await afterDelete(getCtx, entity);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return true;
  };

  const baseMethods: BaseTagsMethods = {
    get,
    all,
    findOne,
    count,
    meta,
    create,
    createMany,
    update,
    upsert,
    upsertAdvansed,
    delete: del,
  };

  const additionalMethods = getAdditionalMethods(getCtx, baseMethods);

  return {
    ...baseMethods,
    ...additionalMethods,
  };
};
