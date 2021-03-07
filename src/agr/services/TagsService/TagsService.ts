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

interface BaseTagsService {
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

export type TagsService = BaseTagsService

export const getTagsService = (getCtx: () => AgrContext) => {
  const get = async (id: number): Promise<Tag | null> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    return getCtx().prisma.tag.findFirst({where: {id}});
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

    const result = await getCtx().prisma.tag.create({data});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const createMany = async (data: MutationCreateTagArgs[]): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const result = await getCtx().prisma.tag.createMany({data, skipDuplicates: true});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const update = async ({id, ...rest}: MutationUpdateTagArgs): Promise<Tag> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const result = await getCtx().prisma.tag.update({data: rest, where: {id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsert = async (data: MutationUpdateTagArgs): Promise<Tag> => {
    if (!getCtx()) {
      throw new Error('AgrContext is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.tag.upsert({create: data, update: rest, where: {id}});

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

    const result = await getCtx().prisma.tag.delete({where: {id: params.id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return true;
  };

  return {
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
};
