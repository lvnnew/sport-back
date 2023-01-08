/* eslint-disable @typescript-eslint/ban-types,max-len */
import {HooksUtils} from '../../getHooksUtils';
import {Context, ServiceConfig} from '../../types';
import {Prisma, PrismaPromise} from '@prisma/client';
import {toPrismaRequest} from '../../../../utils/prisma/toPrismaRequest';
import {IAllRequestArgs} from '../../../../utils/types';
import {toPrismaTotalRequest} from '../../../../utils/prisma/toPrismaTotalRequest';
import {ListMetadata} from '../../../../generated/graphql';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../../types/utils';
import * as R from 'ramda';
import dayjs from 'dayjs';
import EntityEnum from '../../../../types/Entity';
import {v4 as uuidv4} from 'uuid';

export type WithID = { id: bigint | string | number };
export type Obj = Record<string, any>;

const fakePromise = Promise.resolve<any>(null);

export const toLogId = (entity: WithID): string | number => (typeof entity.id === 'bigint' ? entity.id.toString() : entity.id);

export class BaseService<
  Entity extends WithID,
  MutationCreateArgs extends {},
  MutationUpdateArgs extends WithID,
  MutationRemoveArgs extends WithID,
  QueryAllArgs extends IAllRequestArgs,
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
    protected prismaService: any, // todo: do something about it PrismaClient[keyof PrismaClient],
    protected config: ServiceConfig,
  ) {
    super();
  }

  all = async (
    params: QueryAllArgs = {} as QueryAllArgs,
  ): Promise<Entity[]> => {
    return this.prismaService.findMany(
      toPrismaRequest(await this._hooks.changeListFilter(this.ctx, params), {noId: false}),
    ) as unknown as Promise<Entity[]>; // todo: may I fix unknown
  };

  findOne = async (
    params: QueryAllArgs = {} as QueryAllArgs,
  ): Promise<Entity | null> => {
    return this.prismaService.findFirst(toPrismaRequest(
      await this._hooks.changeListFilter(this.ctx, params),
      {noId: false},
    )) as Entity;
  };

  findOneRequired = async (
    params: QueryAllArgs = {} as QueryAllArgs,
  ): Promise<Entity> => {
    const found = await this.findOne(params);

    if (!found) {
      throw new Error(`There is no entry with "${JSON.stringify(params)}" filter`);
    }

    return found;
  };

  get = async (
    id: Entity['id'],
  ): Promise<Entity | null> => {
    return this.findOne({filter: {id}} as unknown as QueryAllArgs); // todo: fix unknown
  };

  getRequired = async (
    id: Entity['id'],
  ): Promise<Entity> => {
    const found = await this.get(id);

    if (!found) {
      throw new Error(`There is no entry with "${id}" id`);
    }

    return found;
  };

  count = async (
    params: Omit<QueryAllArgs, 'sortField' | 'sortOrder'> = {} as Omit<QueryAllArgs, 'sortField' | 'sortOrder'>,
  ): Promise<number> => {
    return this.prismaService.count(toPrismaTotalRequest(await this._hooks.changeListFilter(this.ctx, params as QueryAllArgs)));
  };

  meta = async (
    params: Omit<QueryAllArgs, 'sortField' | 'sortOrder'> = {} as Omit<QueryAllArgs, 'sortField' | 'sortOrder'>,
  ): Promise<ListMetadata> => {
    return this.count(params).then(count => ({count}));
  };

  create = async (
    data: MutationCreateArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Entity> => {
    // clear from fields forbidden for user
    const cleared = byUser ?
      R.omit(this.config.forbiddenForUserFields, data) as AllowedForUserCreateInput :
      data;

    // Augment with default field
    const augmentedByDefault: ReliableCreateUserInput = await this.augmentByDefault(cleared as Obj);

    const processedData = await this._hooks.beforeCreate(this.ctx, augmentedByDefault);

    let createOperation;
    if (this.config.autogeneratedStringId) {
      createOperation = this.prismaService.create({
        data: {
          id: uuidv4(),
          ...R.mergeDeepLeft(
            processedData,
            this.config.withSearch ? {
              search: this.getSearchString(processedData),
            } : {},
          ),
        },
      });
    } else {
      createOperation = this.prismaService.create({
        data: R.mergeDeepLeft(
          processedData,
          this.config.withSearch ? {
            search: this.getSearchString(processedData),
          } : {},
        ),
      });
    }

    const operations = [
      createOperation,
      ...(await this._hooks.additionalOperationsOnCreate(this.ctx, processedData as ReliableCreateUserInput)),
    ];

    const [result] = await this.ctx.prisma.$transaction(operations as any); // todo: may I fix any

    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      // getDefaultValuesWithSearchJoined('processedData')
      //   ? `
      // update search. earlier we do not have id
      this.prismaService.update({
        where: {id: result.id},
        data: this.config.autogeneratedStringId ? {
          search: this.getSearchString(result),
        } : {},
      }),
      this.config.auditable ?
        this.ctx.service('auditLogs').addCreateOperation({
          entityTypeId: this.config.entityTypeId as EntityEnum, // todo: fix type
          entityId: result.id,
          actionData: data,
        }) : fakePromise,
      this.ctx.prisma.$transaction(await this.getPostOperations(result)),
    ]);

    await this._hooks.afterCreate(this.ctx, result as Entity);

    return result as Entity;
  };

  createMany = async (
    entries: StrictCreateArgsWithoutAutodefinable[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    // clear from fields forbidden for user
    const clearedData = byUser ? entries.map(data => R.omit(this.config.forbiddenForUserFields, data)) : entries;

    // Augment with default field
    const augmentedByDefault = await Promise.all(
      clearedData.map(el => this.augmentByDefault(el)),
    ) as unknown as StrictUpdateArgs[]; // todo: may I fix unknown

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
        skipDuplicates: true});
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
  };

  update = async (
    data: MutationUpdateArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Entity> => {
    // Get db version
    const dbVersion = await this.getRequired(data.id);

    // clear from fields forbidden for user
    const cleared = byUser ? R.omit(this.config.forbiddenForUserFields, data) : data;

    // Augment with default field
    const augmentedByDefault = await this.augmentByDefault(cleared);

    // augment data by fields from db
    const augmented = R.mergeLeft(augmentedByDefault, dbVersion) as StrictUpdateArgs;

    const processedData = await this._hooks.beforeUpdate(this.ctx, augmented);

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
        entityTypeId: this.config.entityTypeId as EntityEnum, // todo: fix type
        entityId: toLogId(data),
        actionData: data,
      }) : fakePromise,
      ...(await this._hooks.additionalOperationsOnUpdate(
        this.ctx,
        processedData as unknown as MutationUpdateArgs, // todo: fix type
      )),
      ...(await this.getPostOperations(processedData)),
    ];

    const [result] = await this.ctx.prisma.$transaction(operations as any); // todo: may I fix any

    if (!result) {
      throw new Error('There is no such entity');
    }

    await Promise.all([
      this._hooks.afterUpdate(this.ctx, result as any), // todo: may I fix any
    ]);

    return result as Entity;
  };

  upsert = async (
    data: PartialFieldsInRecord<MutationUpdateArgsWithoutAutodefinable, 'id'>,
    byUser = false,
  ): Promise<Entity> => {
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

    return result as unknown as Entity; // todo: may I fix unknown
  };

  upsertAdvanced = async (
    filter: QueryAllArgs['filter'],
    data: MutationCreateArgsWithoutAutodefinable,
    byUser = false,
  ): Promise<Entity> => {
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
  };

  delete = async (
    params: MutationRemoveArgs,
  ): Promise<Entity> => {
    await this._hooks.beforeDelete(this.ctx, params);

    const deleteOperation = this.prismaService.delete({
      where: {
        id: params.id,
      },
    });

    const operations = [
      deleteOperation,
      this.config.auditable ? this.ctx.service('auditLogs').addDeleteOperation({
        entityTypeId: this.config.entityTypeId as EntityEnum, // todo: fix type
        entityId: toLogId(params),
      }) : fakePromise,
      ...(await this._hooks.additionalOperationsOnDelete(this.ctx, params)),
      ...(await this.getUnPostOperations(params.id)),
    ];

    const entity = await this.get(params.id);

    if (!entity) {
      throw new Error(`There is no entity with "${params.id}" id`);
    }

    const [result] = await this.ctx.prisma.$transaction(operations as any); // todo: may I fix any

    if (!result) {
      throw new Error('There is no such entity');
    }

    await this._hooks.afterDelete(this.ctx, entity);

    return entity;
  };

  // fake methods for the document, they are populated in the next document class
  protected getPostOperations = async (_data: StrictUpdateArgs): Promise<PrismaPromise<any>[]> => [];
  protected getUnPostOperations = async (_id: Entity['id']): Promise<PrismaPromise<any>[]> => [];
}
