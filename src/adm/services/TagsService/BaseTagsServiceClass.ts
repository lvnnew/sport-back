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
import {Context} from '../types';
import {Prisma} from '@prisma/client';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import config from './config';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableTagKeys = never;
export type ForbidenForUserTagKeys = never;
export type RequiredDbNotUserTagKeys = never;

export type AutodefinableTagPart = DefinedRecord<Pick<MutationCreateTagArgs, AutodefinableTagKeys>>;

export type ReliableTagCreateUserInput =
  Omit<MutationCreateTagArgs, ForbidenForUserTagKeys>
  & AutodefinableTagPart;

export type AllowedTagForUserCreateInput = Omit<MutationCreateTagArgs, ForbidenForUserTagKeys>;

export type StrictCreateTagArgs = DefinedFieldsInRecord<MutationCreateTagArgs, RequiredDbNotUserTagKeys> & AutodefinableTagPart;
export type StrictUpdateTagArgs = DefinedFieldsInRecord<MutationUpdateTagArgs, RequiredDbNotUserTagKeys> & AutodefinableTagPart;

export type StrictCreateTagArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateTagArgs, AutodefinableTagKeys>;
export type MutationCreateTagArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateTagArgs, AutodefinableTagKeys>;
export type MutationUpdateTagArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateTagArgs, AutodefinableTagKeys>;

export interface BaseTagsMethods {
  get: (id: number) =>
    Promise<Tag | null>;
  getRequired: (id: number) =>
    Promise<Tag>;
  all: (params?: QueryAllTagsArgs) =>
    Promise<Tag[]>;
  findOne: (params?: QueryAllTagsArgs) =>
    Promise<Tag | null>;
  findOneRequired: (params?: QueryAllTagsArgs) =>
    Promise<Tag>;
  count: (params?: Query_AllTagsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllTagsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateTagArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<Tag>;
  createMany: (data: StrictCreateTagArgsWithoutAutodefinable[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateTagArgsWithoutAutodefinable, byUser?: boolean) =>
    Promise<Tag>;
  upsert: (
    data: PartialFieldsInRecord<MutationUpdateTagArgsWithoutAutodefinable, 'id'>,
    byUser?: boolean,
  ) =>
    Promise<Tag>;
  upsertAdvanced: (
    filter: TagFilter,
    data: MutationCreateTagArgsWithoutAutodefinable,
    byUser?: boolean,
  ) =>
    Promise<Tag>;
  delete: (params: MutationRemoveTagArgs) =>
    Promise<Tag>;
}

export class BaseTagsServiceClass extends BaseService<
  Tag,
  QueryAllTagsArgs,
  ReliableTagCreateUserInput,
  MutationUpdateTagArgs,
  MutationRemoveTagArgs,
  StrictCreateTagArgs,
  StrictUpdateTagArgs,
  AutodefinableTagPart,
  MutationCreateTagArgsWithoutAutodefinable,
  MutationUpdateTagArgsWithoutAutodefinable,
  StrictCreateTagArgsWithoutAutodefinable
> implements BaseTagsMethods {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.tag, config);
    initBuiltInHooks(this as any); // todo: fix
    initUserHooks(this as any); // todo: fix
  }

  augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableTagPart> => currentData as T & AutodefinableTagPart;
}
