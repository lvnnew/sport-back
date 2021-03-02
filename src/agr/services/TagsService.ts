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
} from '../../generated/graphql';
import {DataSource} from 'apollo-datasource';
import {toPrismaRequest} from '../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../utils/prisma/toPrismaTotalRequest';
import {AgrContext} from './context';
import {Prisma} from '@prisma/client';

class TagsService extends DataSource {
  protected ctx: AgrContext | null = null;

  constructor() {
    super();
  }

  async init(ctx: AgrContext) {
    this.ctx = ctx;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async close() { }

  async get(id: number): Promise<Tag | null> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    return this.ctx.prisma.tag.findFirst({where: {id}});
  }

  async all(params: QueryAllTagsArgs = {}): Promise<Tag[]> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    return this.ctx.prisma.tag.findMany(toPrismaRequest(params, {noId: true})) as unknown as Promise<Tag[]>;
  }

  async findOne(params: QueryAllTagsArgs = {}): Promise<Tag | null> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    return this.ctx.prisma.tag.findFirst(toPrismaRequest(params, {noId: true}));
  }

  async count(params: Query_AllTagsMetaArgs = {}): Promise<number> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    return this.ctx.prisma.tag.count(toPrismaTotalRequest(params));
  }

  async meta(params: Query_AllTagsMetaArgs = {}): Promise<ListMetadata> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    return this.count(params).then(count => ({count}));
  }

  async create(data: MutationCreateTagArgs): Promise<Tag> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    const result = await this.ctx.prisma.tag.create({data});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  }

  async createMany(data: MutationCreateTagArgs[]): Promise<Prisma.BatchPayload> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    const result = await this.ctx.prisma.tag.createMany({data, skipDuplicates: true});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  }

  async update({id, ...rest}: MutationUpdateTagArgs): Promise<Tag> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    const result = await this.ctx.prisma.tag.update({data: rest, where: {id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  }

  async upsert(data: MutationUpdateTagArgs): Promise<Tag> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    const {id, ...rest} = data;

    const result = await this.ctx.prisma.tag.upsert({create: data, update: rest, where: {id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  }

  async upsertAdvansed(filter: TagFilter, data: MutationCreateTagArgs): Promise<Tag> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    const count = await this.count({filter});

    if (count > 1) {
      throw new Error(`There is more then one entity (${count}) that fits filter "${JSON.stringify(filter)}"`);
    }

    if (count === 0) {
      return this.create(data);
    } else {
      const current = await this.findOne({filter});

      if (!current) {
        return this.create(data);
      }

      return this.update({
        ...data,
        id: current.id,
      });
    }
  }

  async delete(params: MutationRemoveTagArgs): Promise<boolean> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    const result = await this.ctx.prisma.tag.delete({where: {id: params.id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return true;
  }
}

export default TagsService;
