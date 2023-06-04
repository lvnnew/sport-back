import {
  MutationCreateTagArgs,
  MutationUpdateTagArgs,
  MutationRemoveTagArgs,
  QueryAllTagsArgs,
  Tag,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

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

export class TagsService extends BaseService<
  Tag,
  MutationCreateTagArgs,
  MutationUpdateTagArgs,
  MutationRemoveTagArgs,
  QueryAllTagsArgs,
  AutodefinableTagKeys,
  ForbidenForUserTagKeys,
  RequiredDbNotUserTagKeys,
  Prisma.TagDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.tag, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
