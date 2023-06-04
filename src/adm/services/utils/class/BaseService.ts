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
import {serviceUtils, ServiceUtils} from './utils';
import {ServiceErrors} from './ServiceErrors';

export type WithID = {id: bigint | string | number};
export type Obj = Record<string, any>;

export const toLogId = (entity: WithID): string | number => (typeof entity.id === 'bigint' ? entity.id.toString() : entity.id);

export type PrismaLocalDelegation<Entity extends WithID> = {
  findMany: (arg: any) => Promise<Entity[]>;
  findFirst: (arg: any) => Promise<Entity | null>;
  count: (arg: any) => Promise<Prisma.BatchPayload | number>;
  create: (arg: any) => PrismaPromise<Entity>;
  update: (arg: any) => PrismaPromise<Entity>;
  upsert: (arg: any) => PrismaPromise<Entity>;
  createMany: (arg: any) => PrismaPromise<Prisma.BatchPayload>;
  delete: (arg: any) => PrismaPromise<Entity>;
};

export class BaseService<
  Entity extends WithID,
  MutationCreateArgs extends {},
  MutationUpdateArgs extends WithID,
  MutationRemoveArgs extends WithID,
  QueryAllArgs extends AllRequestArgs,
  AutodefinableKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  ForbidenForUserKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  RequiredDbNotUserKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  PrismaDelegate extends PrismaLocalDelegation<Entity>,
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

  allowedToChange = (_e: Entity | ReliableCreateUserInput | StrictCreateArgs | StrictUpdateArgs, _serviceUtils: ServiceUtils): boolean => true

  constructor(
    protected ctx: Context,
    public prismaService: PrismaDelegate,
    public config: ServiceConfig,
  ) {
    super();
  }

  async all(
    params: QueryAllArgs = {} as QueryAllArgs,
  ): Promise<Entity[]> {
    return this.prismaService.findMany(
      toPrismaRequest(await this._hooks.changeListFilter(this.ctx, params), {noId: false}),
    ) as Promise<Entity[]>;
  }

  async findOne(
    params: QueryAllArgs = {} as QueryAllArgs,
  ): Promise<Entity | null> {
    return this.prismaService.findFirst(toPrismaRequest(
      await this._hooks.changeListFilter(this.ctx, params),
      {noId: false},
    )) as Promise<Entity>;
  }

  async findOneRequired(
    params: QueryAllArgs = {} as QueryAllArgs,
  ): Promise<Entity> {
    const found = await this.findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  }

  async get(
    id: Entity['id'],
  ): Promise<Entity | null> {
    return this.findOne({filter: {id}} as unknown as QueryAllArgs); // todo: fix unknown
  }

  async getRequired(
    id: Entity['id'],
  ): Promise<Entity> {
    const found = await this.get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  }

  async count(
    params: Omit<QueryAllArgs, 'sortField' | 'sortOrder'> = {} as Omit<QueryAllArgs, 'sortField' | 'sortOrder'>,
  ): Promise<number> {
    // todo: need to write correct type for count in PrismaLocalDelegation
    return this.prismaService.count(toPrismaTotalRequest(await this._hooks.changeListFilter(this.ctx, params as QueryAllArgs))) as unknown as Promise<number>;
  }

  async meta(
    params: Omit<QueryAllArgs, 'sortField' | 'sortOrder'> = {} as Omit<QueryAllArgs, 'sortField' | 'sortOrder'>,
  ): Promise<ListMetadata> {
    return this.count(params).then(count => ({count}));
  }

  async create(
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

    if (!this.allowedToChange(createData, serviceUtils)) {
      throw new Error(ServiceErrors.DoNotAllowToChange);
    }

    try {
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
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002' && error.meta) {
        throw new Error(`Недопустимо создание дублирующих записей. Поля по которым нарушена уникальность: ${(error.meta.target as any).join(', ')}.`);
      }

      throw error;
    }
  }

  async createMany(
    entries: StrictCreateArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> {
    if (entries.length === 0) {
      return {count: 0};
    }

    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(this.config.forbiddenForUserFields, data)) : entries;

    // Augment with default field
    let augmentedByDefault = await Promise.all(
      clearedData.map(el => this.augmentByDefault(el)),
    ) as StrictUpdateArgs[];

    if (this.config.autogeneratedStringId) {
      augmentedByDefault = R.map(R.mergeRight(() => ({id: uuidv4()})), augmentedByDefault) as StrictUpdateArgs[];
    }

    if (!R.all((d) => this.allowedToChange(d, serviceUtils), augmentedByDefault)) {
      throw new Error(ServiceErrors.DoNotAllowToChange);
    }

    const additionalOperations = await Promise.all(augmentedByDefault.map((d) => this._hooks.additionalOperationsOnCreate(this.ctx, d as unknown as ReliableCreateUserInput)));

    const createOperation = this.prismaService.createMany({
      data: augmentedByDefault.map(data => R.mergeDeepLeft(
        data,
        this.config.withSearch ? {
          search: this.getSearchString(data),
        } : {},
      )),
      skipDuplicates: true,
    });

    const result = await this.ctx.prisma.$transaction([
      createOperation,
      ...R.unnest(additionalOperations),
    ]);

    if (!result?.[0]) {
      throw new Error('There is no such entity');
    }

    return result?.[0];
  }

  async update(
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

    if (!this.allowedToChange(augmentedByDefault, serviceUtils)) {
      throw new Error(ServiceErrors.DoNotAllowToChange);
    }

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

    let operations: PrismaPromise<any>[] = [
      updateOperation,
    ];

    if (this.config.auditable) {
      operations.push(this.ctx.service('auditLogs').addUpdateOperation({
        entityTypeId: this.config.entityTypeId,
        entityId: toLogId(data),
        actionData: data,
      }))
    }

    operations = [
      ...operations,
      ...(await this._hooks.additionalOperationsOnUpdate(
        this.ctx,
        processedData as unknown as MutationUpdateArgs, // todo: fix type
      )),
      ...(await this.getPostOperations(processedData)),
    ]

    const [result] = await this.ctx.prisma.$transaction(operations);

    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      this._hooks.afterUpdate(this.ctx, result),
    ]);

    return result as Entity;
  }

  async upsert(
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

    if (!this.allowedToChange(augmented, serviceUtils)) {
      throw new Error(ServiceErrors.DoNotAllowToChange);
    }

    const processedData = await this._hooks.beforeUpsert(this.ctx, {createData: augmented, updateData: augmented});
    let createData = processedData.createData;
    let updateData = processedData.updateData;

    if (this.config.withSearch) {
      createData = {
        ...createData,
        search: this.getSearchString(createData),
      };
      updateData = {
        ...updateData,
        search: this.getSearchString(processedData.updateData),
      };
    }

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

  async upsertAdvanced(
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

  async delete(
    params: MutationRemoveArgs,
  ): Promise<Entity> {
    await this._hooks.beforeDelete(this.ctx, params);

    const entity = await this.get(params.id);

    if (!entity) {
      throw new Error(`There is no entity with "${params.id}" id`);
    }

    if (!this.allowedToChange(entity, serviceUtils)) {
      throw new Error(ServiceErrors.DoNotAllowToChange);
    }

    const deleteOperation = this.prismaService.delete({
      where: {
        id: params.id,
      },
    });

    let operations: PrismaPromise<any>[] = [
      deleteOperation,
    ];

    if (this.config.auditable) {
      operations.push(
        this.ctx.service('auditLogs').addDeleteOperation({
          entityTypeId: this.config.entityTypeId,
          entityId: toLogId(params),
        }),
      );
    }

    operations = [
      ...operations,
      ...(await this._hooks.additionalOperationsOnDelete(this.ctx, params)),
      ...(await this.getUnPostOperations(params.id)),
    ]

    const [result] = await this.ctx.prisma.$transaction(operations);

    if (!result) {
      throw new Error('There is no such entity');
    }

    await this._hooks.afterDelete(this.ctx, entity);

    return entity;
  }

  // fake methods for the document, they are populated in the next document class
  protected async getPostOperations(_data: StrictUpdateArgs): Promise<PrismaPromise<any>[]> {
    return [];
  }
  protected async getUnPostOperations(_id: Entity['id']): Promise<PrismaPromise<any>[]> {
    return [];
  }
}
