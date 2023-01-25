/* eslint-disable @typescript-eslint/ban-types,max-len */
import {HooksUtils} from '../../getHooksUtils';
import {Context, ServiceConfig} from '../../types';
import {Prisma, PrismaPromise} from '@prisma/client';
import {toPrismaRequest} from '../../../../utils/prisma/toPrismaRequest';
import {AllRequestArgs} from '../../../../utils/types';
import {toPrismaTotalRequest} from '../../../../utils/prisma/toPrismaTotalRequest';
import {ListMetadata} from '../../../../generated/graphql';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../../types/utils';
import * as R from 'ramda';
import dayjs from 'dayjs';
import {v4 as uuidv4} from 'uuid';

export type WithID = { id: bigint | string | number };
export type Obj = Record<string, any>;

export const toLogId = (entity: WithID): string | number => (typeof entity.id === 'bigint' ? entity.id.toString() : entity.id);

export class BaseService<
  Entity extends WithID,
  MutationCreateArgs extends {},
  MutationUpdateArgs extends WithID,
  MutationRemoveArgs extends WithID,
  QueryAllArgs extends AllRequestArgs,
  AutodefinableKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  ForbidenForUserKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  RequiredDbNotUserKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  AutodefinablePart extends {} = DefinedRecord<Pick<MutationCreateArgs, AutodefinableKeys>>,
  ReliableCreateUserInput extends {} = Omit<MutationCreateArgs, ForbidenForUserKeys> & AutodefinablePart,
  AllowedForUserCreateInput extends Obj = Omit<MutationCreateArgs, ForbidenForUserKeys>,
  StrictCreateArgs extends {} = DefinedFieldsInRecord<MutationCreateArgs, RequiredDbNotUserKeys> & AutodefinablePart,
  StrictUpdateArgs extends WithID = DefinedFieldsInRecord<MutationUpdateArgs, RequiredDbNotUserKeys> & AutodefinablePart,
  StrictCreateArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateArgs, AutodefinableKeys>, // todo: StrictCreateArgs instead of MutationCreateArgs
  MutationCreateArgsWithoutAutodefinable extends Obj = PartialFieldsInRecord<MutationCreateArgs, AutodefinableKeys>,
  MutationUpdateArgsWithoutAutodefinable extends WithID = PartialFieldsInRecord<MutationUpdateArgs, AutodefinableKeys> & Pick<MutationUpdateArgs, 'id'> // todo: I added & Pick<MutationUpdateArgs, 'id'>,
> extends HooksUtils<Entity, QueryAllArgs, ReliableCreateUserInput, MutationUpdateArgs, MutationRemoveArgs, StrictCreateArgs, StrictUpdateArgs> {
  protected getSearchString = (entry: Record<string, any>) => {
    return [
      ...R.toPairs(R.pick(this.config.otherFields, entry))
        .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
      ...R.toPairs(R.pick(this.config.dateFields, entry))
        .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
    ].join(' ');
  };

  protected augmentByDefault = async <T>(
    currentData: Obj,
  ): Promise<T & AutodefinablePart> => currentData as T & AutodefinablePart;

  constructor(
    protected ctx: Context,
    public prismaService: any, // todo: do something about it PrismaClient[keyof PrismaClient],
    public config: ServiceConfig,
  ) {
    super();
  }

  async all (
    params: QueryAllArgs = {} as QueryAllArgs,
  ): Promise<Entity[]> {
    return this.prismaService.findMany(
      toPrismaRequest(await this._hooks.changeListFilter(this.ctx, params), {noId: false}),
    ) as Promise<Entity[]>;
  }

  async findOne (
    params: QueryAllArgs = {} as QueryAllArgs,
  ): Promise<Entity | null> {
    return this.prismaService.findFirst(toPrismaRequest(
      await this._hooks.changeListFilter(this.ctx, params),
      {noId: false},
    )) as Entity;
  }

  async findOneRequired (
    params: QueryAllArgs = {} as QueryAllArgs,
  ): Promise<Entity> {
    const found = await this.findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  }

  async get (
    id: Entity['id'],
  ): Promise<Entity | null> {
    return this.findOne({filter: {id}} as unknown as QueryAllArgs); // todo: fix unknown
  }

  async getRequired (
    id: Entity['id'],
  ): Promise<Entity> {
    const found = await this.get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  }

  async count (
    params: Omit<QueryAllArgs, 'sortField' | 'sortOrder'> = {} as Omit<QueryAllArgs, 'sortField' | 'sortOrder'>,
  ): Promise<number> {
    return this.prismaService.count(toPrismaTotalRequest(await this._hooks.changeListFilter(this.ctx, params as QueryAllArgs)));
  }

  async meta (
    params: Omit<QueryAllArgs, 'sortField' | 'sortOrder'> = {} as Omit<QueryAllArgs, 'sortField' | 'sortOrder'>,
  ): Promise<ListMetadata> {
    return this.count(params).then(count => ({count}));
  }

  async create (
    data: MutationCreateArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Entity> {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(this.config.forbiddenForUserFields, data) as AllowedForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableCreateUserInput = await this.augmentByDefault(cleared as Obj);

    const processedData: StrictCreateArgs = await this._hooks.beforeCreate(this.ctx, augmentedByDefault);

    const createData = {
      id: this.config.autogeneratedStringId ? uuidv4() : undefined,
      ...R.mergeDeepLeft(
        processedData,
        this.config.withSearch ? {
          search: this.getSearchString(processedData),
        } : {},
      ),
    } as ReliableCreateUserInput;

    const createOperation = this.prismaService.create({
      data: createData,
    });

    const operations = [
      createOperation,
      ...(await this._hooks.additionalOperationsOnCreate(this.ctx, createData)),
    ];

    const [result] = await this.ctx.prisma.$transaction(operations);

    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      // update search. earlier we do not have id
      !this.config.autogeneratedStringId && this.config.withSearch &&
        this.prismaService.update({
          where: {id: result.id},
          data: {
            search: this.getSearchString(result),
          },
        }),
      this.config.auditable ?
        this.ctx.service('auditLogs').addCreateOperation({
          entityTypeId: this.config.entityTypeId,
          entityId: result.id,
          actionData: data,
        }) : null,
      this.ctx.prisma.$transaction(await this.getPostOperations(result)),
    ]);

    await this._hooks.afterCreate(this.ctx, result as Entity);

    return result as Entity;
  }

  async createMany (
    entries: StrictCreateArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(this.config.forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => this.augmentByDefault(el)),
    ) as StrictUpdateArgs[];

    let result;
    if (this.config.autogeneratedStringId) {
      result = await this.prismaService.createMany({
        data: augmentedByDefault.map(data => ({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          id: uuidv4(),
          ...R.mergeDeepLeft(
            data,
            this.config.withSearch ? {
              search: this.getSearchString(data),
            } : {},
          ),
        })),
        skipDuplicates: true,
      });
    } else {
      result = await this.prismaService.createMany({
        data: augmentedByDefault.map(data => R.mergeDeepLeft(
          data,
          this.config.withSearch ? {
            search: this.getSearchString(data),
          } : {},
        )),
        skipDuplicates: true,
      });
    }

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  }

  async update (
    data: MutationUpdateArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Entity> {
    // Get db version
    const dbVersion = await this.getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(this.config.forbiddenForUserFields, data) : data;

    // augment data by fields from db
    const augmentedByDb = R.mergeLeft(cleared, dbVersion);

    // Augment with default field
    const augmentedByDefault = await this.augmentByDefault(augmentedByDb) as StrictUpdateArgs;

    const processedData = await this._hooks.beforeUpdate(this.ctx, augmentedByDefault);

    const {id, ...rest} = processedData;

    const updateOperation = this.prismaService.update({
      data: R.mergeDeepLeft(
        this.config.withSearch ? {
          search: this.getSearchString(processedData),
        } : {},
        rest,
      ),
      where: {
        id: id as Entity['id'],
      },
    });

    const operations = [
      updateOperation,
      this.config.auditable ? this.ctx.service('auditLogs').addUpdateOperation({
        entityTypeId: this.config.entityTypeId,
        entityId: toLogId(data),
        actionData: data,
      }) : null,
      ...(await this._hooks.additionalOperationsOnUpdate(
        this.ctx,
        processedData as unknown as MutationUpdateArgs, // todo: fix type
      )),
      ...(await this.getPostOperations(processedData)),
    ];

    const [result] = await this.ctx.prisma.$transaction(operations);

    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      this._hooks.afterUpdate(this.ctx, result),
    ]);

    return result as Entity;
  }

  async upsert (
    data: PartialFieldsInRecord<MutationUpdateArgsWithoutAutodefinable, 'id'>,
    byUser = false,
  ): Promise<Entity> {
    // Get db version
    const dbVersion = data.id ? await this.get(data.id) : null;

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(this.config.forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await this.augmentByDefault(cleared) as any; // todo: fix type check

    // augment data by fields from db
    const augmented = R.mergeLeft(augmentedByDefault, dbVersion || {} as Entity);

    const processedData = await this._hooks.beforeUpsert(this.ctx, {createData: augmented, updateData: augmented});
    const createData = {
      ...processedData.createData,
      search: this.getSearchString(processedData.createData),
    };
    const updateData = {
      ...processedData.updateData,
      search: this.getSearchString(processedData.updateData),
    };

    const result = await this.prismaService.upsert({
      create: createData,
      update: updateData,
      where: {id: data.id},
    });

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  }

  async upsertAdvanced (
    filter: QueryAllArgs['filter'],
    data: MutationCreateArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Entity> {
    const cnt = await this.count({filter} as QueryAllArgs);

    if (cnt > 1) {
      throw new Error(`There is more then one entity (${cnt}) that fits filter "${JSON.stringify(filter)}"`);
    } else if (cnt === 0) {
      return this.create(data as MutationCreateArgsWithoutAutodefinable, byUser);
    } else {
      const dbVersion = await this.findOneRequired({filter} as QueryAllArgs);
      return this.update({
        ...data,
        id: dbVersion.id,
      } as unknown as MutationUpdateArgsWithoutAutodefinable, byUser); // todo: may I fix unknown
    }
  }

  async delete (
    params: MutationRemoveArgs,
  ): Promise<Entity> {
    await this._hooks.beforeDelete(this.ctx, params);

    const deleteOperation = this.prismaService.delete({
      where: {
        id: params.id,
      },
    });

    const operations = [
      deleteOperation,
      this.config.auditable ? this.ctx.service('auditLogs').addDeleteOperation({
        entityTypeId: this.config.entityTypeId,
        entityId: toLogId(params),
      }) : null,
      ...(await this._hooks.additionalOperationsOnDelete(this.ctx, params)),
      ...(await this.getUnPostOperations(params.id)),
    ];

    const entity = await this.get(params.id);

    if (!entity) {
      throw new Error(`There is no entity with "${params.id}" id`);
    }

    const [result] = await this.ctx.prisma.$transaction(operations);

    if (!result) {
      throw new Error('There is no such entity');
    }

    await this._hooks.afterDelete(this.ctx, entity);

    return entity;
  }

  // fake methods for the document, they are populated in the next document class
  protected async getPostOperations (_data: StrictUpdateArgs): Promise<PrismaPromise<any>[]> {
    return [];
  }
  protected async getUnPostOperations (_id: Entity['id']): Promise<PrismaPromise<any>[]> {
    return [];
  }
}
