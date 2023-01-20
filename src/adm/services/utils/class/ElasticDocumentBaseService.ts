/* eslint-disable max-len,@typescript-eslint/ban-types */
import {Obj, WithID} from './BaseService';
import {DocumentBaseService} from './DocumentBaseService';
import {toPrismaRequest} from '../../../../utils/prisma/toPrismaRequest';
import {AllRequestArgs} from '../../../../utils/types';
import * as R from 'ramda';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../../types/utils';
import {toElasticRequest} from '../../../../utils/toElasticRequest';
import {Context, DocumentConfig} from '../../types';
import log from '../../../../log';
import {BaseElasticEntity} from './ElasticBaseSearch';

export class ElasticDocumentBaseService<
  Entity extends WithID,
  MutationCreateArgs extends {},
  MutationUpdateArgs extends WithID,
  MutationRemoveArgs extends WithID,
  QueryAllArgs extends AllRequestArgs,
  AutodefinableKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  ForbidenForUserKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  RequiredDbNotUserKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  ElasticEntity extends BaseElasticEntity,
  RegistryEntries extends {},
  AutodefinablePart extends {} = DefinedRecord<Pick<MutationCreateArgs, AutodefinableKeys>>,
  ReliableCreateUserInput extends {} = Omit<MutationCreateArgs, ForbidenForUserKeys> & AutodefinablePart,
  AllowedForUserCreateInput extends Obj = Omit<MutationCreateArgs, ForbidenForUserKeys>,
  StrictCreateArgs extends {} = DefinedFieldsInRecord<MutationCreateArgs, RequiredDbNotUserKeys> & AutodefinablePart,
  StrictUpdateArgs extends WithID = DefinedFieldsInRecord<MutationUpdateArgs, RequiredDbNotUserKeys> & AutodefinablePart,
  StrictCreateArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateArgs, AutodefinableKeys>, // todo: StrictCreateArgs instead of MutationCreateArgs
  MutationCreateArgsWithoutAutodefinable extends Obj = PartialFieldsInRecord<MutationCreateArgs, AutodefinableKeys>,
  MutationUpdateArgsWithoutAutodefinable extends WithID = PartialFieldsInRecord<MutationUpdateArgs, AutodefinableKeys> & Pick<MutationUpdateArgs, 'id'> // todo: I added & Pick<MutationUpdateArgs, 'id'>,
> extends DocumentBaseService<Entity, MutationCreateArgs, MutationUpdateArgs, MutationRemoveArgs, QueryAllArgs, AutodefinableKeys, ForbidenForUserKeys, RequiredDbNotUserKeys,
  RegistryEntries,
  AutodefinablePart,
  ReliableCreateUserInput,
  AllowedForUserCreateInput,
  StrictCreateArgs,
  StrictUpdateArgs,
  StrictCreateArgsWithoutAutodefinable,
  MutationCreateArgsWithoutAutodefinable,
  MutationUpdateArgsWithoutAutodefinable
> {
  constructor(
    protected ctx: Context,
    public prismaService: any, // todo: do something about it PrismaClient[keyof PrismaClient],
    public prismaExternalService: any, // todo: do something about it PrismaClient[keyof PrismaClient],
    public config: DocumentConfig,
  ) {
    super(ctx, prismaService, config);
  }

  async markToSync (id: Entity['id']) {
    const upsert = {
      entityId: id,
      lastUpdated: new Date(),
    };

    log.info(`entityId: ${id}`);

    await this.prismaExternalService.upsert({
      where: {
        entityId: id,
      },
      create: {
        ...upsert,
        lastSynced: new Date(1),
      },
      update: upsert,
    });
  }

  async markSynced (ids: Entity['id'][]) {
    await this.prismaExternalService.updateMany({
      where: {
        entityId: {
          in: ids,
        },
      },
      data: {
        lastSynced: new Date(),
      },
    });
  }

  async all (
    params: QueryAllArgs = {} as QueryAllArgs,
  ): Promise<Entity[]> {
    const elasticSearch = this.ctx.elastic.createSearcher(this.config.entityTypeId);

    const search = await elasticSearch(toElasticRequest(await this._hooks.changeListFilter(this.ctx, params)));

    const ids = search.hits.hits.map((el) => (this.config.idType === 'bigint' && (el._source as Entity)?.id ? BigInt((el._source as Entity).id) : (el._source as Entity)?.id)).filter(Boolean);

    const prismaReq = toPrismaRequest(params, {noId: false});

    return await this.prismaService.findMany({
      where: {id: {in: ids}},
      orderBy: prismaReq.orderBy,
    });
  }

  async count (
    params: Omit<QueryAllArgs, 'sortField' | 'sortOrder'> = {} as Omit<QueryAllArgs, 'sortField' | 'sortOrder'>,
  ): Promise<number> {
    const elasticCount = this.ctx.elastic.createCounter(this.config.entityTypeId);

    const reg = R.omit(['sortOrder', 'sortField'], toElasticRequest(await this._hooks.changeListFilter(this.ctx, params as QueryAllArgs)));

    const result = await elasticCount(reg);

    return result.count;
  }

  async create (
    data: MutationCreateArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Entity> {
    const res = await super.create(data, byUser);

    await this.markToSync(res.id);

    return res;
  }

  async update (
    data: MutationUpdateArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Entity> {
    const res = await super.update(data, byUser);

    await this.markToSync(res.id);

    return res;
  }

  async upsert (
    data: PartialFieldsInRecord<MutationUpdateArgsWithoutAutodefinable, 'id'>,
    byUser = false,
  ): Promise<Entity> {
    const res = await super.upsert(data, byUser);

    await this.markToSync(res.id);

    return res;
  }

  needToSyncCount () {
    return this.prismaExternalService.count({
      where: {
        lastUpdated: {
          gt: this.prismaExternalService.fields.lastSynced,
        },
      },
    });
  }

  async getIdsToSyncWithElastic (perPage: number): Promise<ElasticEntity['entityId'][]> {
    const result = await this.prismaExternalService.findMany({
      where: {
        lastUpdated: {
          gt: this.prismaExternalService.fields.lastSynced,
        },
      },
      select: {
        entityId: true,
      },
      orderBy: {
        entityId: 'asc',
      },
      take: perPage,
    });

    return result.map((r: ElasticEntity) => r.entityId);
  }

  async delete (
    params: MutationRemoveArgs,
  ): Promise<Entity> {
    const promise = this.ctx.elastic.deleteById(this.config.entityTypeId, params.id);

    await this.prismaExternalService.deleteMany({
      where: {
        entityId: params.id,
      },
    });

    const res = await super.delete(params);

    await promise;

    return res;
  }
}
