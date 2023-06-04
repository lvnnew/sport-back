/* eslint-disable max-len,@typescript-eslint/ban-types */
import {BaseService, Obj, PrismaLocalDelegation, WithID} from './BaseService';
import {toPrismaRequest} from '../../../../utils/prisma/toPrismaRequest';
import {AllRequestArgs} from '../../../../utils/types';
import * as R from 'ramda';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../../types/utils';
import {toElasticRequest} from '../../../../utils/toElasticRequest';
import {Context, ServiceConfig} from '../../types';
import log from '../../../../log';
import {PrismaPromise} from '@prisma/client';

export interface BaseElasticEntity {
  lastUpdated: any;
  lastSynced: any;
}

export class ElasticBaseSearch<
  Entity extends WithID,
  MutationCreateArgs extends {},
  MutationUpdateArgs extends WithID,
  MutationRemoveArgs extends WithID,
  QueryAllArgs extends AllRequestArgs,
  AutodefinableKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  ForbidenForUserKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  RequiredDbNotUserKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  ElasticEntity extends BaseElasticEntity,
  PrismaDelegate extends PrismaLocalDelegation<Entity>,
  AutodefinablePart extends {} = DefinedRecord<Pick<MutationCreateArgs, AutodefinableKeys>>,
  ReliableCreateUserInput extends {} = Omit<MutationCreateArgs, ForbidenForUserKeys> & AutodefinablePart,
  AllowedForUserCreateInput extends Obj = Omit<MutationCreateArgs, ForbidenForUserKeys>,
  StrictCreateArgs extends {} = DefinedFieldsInRecord<MutationCreateArgs, RequiredDbNotUserKeys> & AutodefinablePart,
  StrictUpdateArgs extends WithID = DefinedFieldsInRecord<MutationUpdateArgs, RequiredDbNotUserKeys> & AutodefinablePart,
  StrictCreateArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateArgs, AutodefinableKeys>, // todo: StrictCreateArgs instead of MutationCreateArgs
  MutationCreateArgsWithoutAutodefinable extends Obj = PartialFieldsInRecord<MutationCreateArgs, AutodefinableKeys>,
  MutationUpdateArgsWithoutAutodefinable extends WithID = PartialFieldsInRecord<MutationUpdateArgs, AutodefinableKeys> & Pick<MutationUpdateArgs, 'id'> // todo: I added & Pick<MutationUpdateArgs, 'id'>,
> extends BaseService<Entity, MutationCreateArgs, MutationUpdateArgs, MutationRemoveArgs, QueryAllArgs, AutodefinableKeys, ForbidenForUserKeys, RequiredDbNotUserKeys,
  PrismaDelegate,
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
    public config: ServiceConfig,
  ) {
    super(ctx, prismaService, config);

    const markToSync = this.markToSync.bind(this);

    async function getExternalTrackingOperation (_: Context, data: ReliableCreateUserInput | MutationUpdateArgs | MutationRemoveArgs): Promise<PrismaPromise<ElasticEntity>[]> {
      // entities with external search always have generated string id
      const localData = data as (ReliableCreateUserInput | MutationUpdateArgs | MutationRemoveArgs) & WithID;

      return [markToSync(localData.id)];
    }

    this.hooksAdd.additionalOperationsOnCreate(getExternalTrackingOperation);
    this.hooksAdd.additionalOperationsOnUpdate(getExternalTrackingOperation);
    this.hooksAdd.additionalOperationsOnDelete(getExternalTrackingOperation);
  }

  markToSync (id: Entity['id']): PrismaPromise<ElasticEntity> {
    const upsert = {
      entityId: id,
      lastUpdated: new Date(),
    };

    log.info(`entityId: ${id}`);

    return this.prismaExternalService.upsert({
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

  markSynced (ids: Entity['id'][]): PrismaPromise<any> {
    return this.prismaExternalService.updateMany({
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

  async getIdsToSyncWithElastic (perPage: number): Promise<any[]> {
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

    return result.map((r: any) => r.entityId);
  }

  entitiesForExternalSearch (ids: Entity['id'][]): Promise<Entity[]> {
    return this.prismaService.findMany({
      where: {id: {in: ids}},
    });
  }

  async afterExternalSearchSync (_entities: Entity[]): Promise<void> {
    return undefined;
  }
}
