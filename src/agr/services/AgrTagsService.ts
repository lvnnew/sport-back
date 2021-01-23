/* eslint-disable @typescript-eslint/camelcase */
import {
  ListMetadata,
  MutationCreateAgrTagArgs,
  MutationUpdateAgrTagArgs,
  MutationRemoveAgrTagArgs,
  QueryAllAgrTagsArgs,
  Query_AllAgrTagsMetaArgs,
  AgrTag,
  AgrTagFilter,
} from '../../generated/graphql';
import {DataSource} from 'apollo-datasource';
import {toPrismaRequest} from '../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../utils/prisma/toPrismaTotalRequest';
import {AgrContext} from './context';

class AgrTagsService extends DataSource {
  protected ctx: AgrContext | null = null;

  constructor() {
    super();
  }

  async init(ctx: AgrContext) {
    this.ctx = ctx;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async close() { }

  async get(id: number): Promise<AgrTag | null> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    return this.ctx.prisma.agrTag.findOne({where: {id}});
  }

  async all(params: QueryAllAgrTagsArgs = {}): Promise<AgrTag[]> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    return this.ctx.prisma.agrTag.findMany(toPrismaRequest(params, {noId: true})) as unknown as Promise<AgrTag[]>;
  }

  async findOne(params: QueryAllAgrTagsArgs = {}): Promise<AgrTag> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    const list = await this.all(params);

    if (list.length === 0) {
      throw new Error(`There is no entity that fits filter "${JSON.stringify(params)}"`);
    }

    return list[0];
  }

  async count(params: Query_AllAgrTagsMetaArgs = {}): Promise<number> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    return this.ctx.prisma.agrTag.count(toPrismaTotalRequest(params));
  }

  async meta(params: Query_AllAgrTagsMetaArgs = {}): Promise<ListMetadata> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    return this.count(params).then(count => ({count}));
  }

  async create(data: MutationCreateAgrTagArgs): Promise<AgrTag> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    const result = await this.ctx.prisma.agrTag.create({data});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  }

  async update({id, ...rest}: MutationUpdateAgrTagArgs): Promise<AgrTag> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    const result = await this.ctx.prisma.agrTag.update({data: rest, where: {id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  }

  async upsert(data: MutationUpdateAgrTagArgs): Promise<AgrTag> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    const {id, ...rest} = data;

    const result = await this.ctx.prisma.agrTag.upsert({create: data, update: rest, where: {id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  }

  async upsertAdvansed(filter: AgrTagFilter, data: MutationCreateAgrTagArgs): Promise<AgrTag> {
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

      return this.update({
        ...data,
        id: current.id,
      });
    }
  }

  async delete(params: MutationRemoveAgrTagArgs): Promise<boolean> {
    if (!this.ctx) {
      throw new Error('AgrContext is not initialised');
    }

    const result = await this.ctx.prisma.agrTag.delete({where: {id: params.id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return true;
  }
}

export default AgrTagsService;
