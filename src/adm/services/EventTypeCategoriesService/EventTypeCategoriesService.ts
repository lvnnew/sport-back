import {
  MutationCreateEventTypeCategoryArgs,
  MutationUpdateEventTypeCategoryArgs,
  MutationRemoveEventTypeCategoryArgs,
  QueryAllEventTypeCategoriesArgs,
  EventTypeCategory,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableEventTypeCategoryKeys = never;
export type ForbidenForUserEventTypeCategoryKeys = never;
export type RequiredDbNotUserEventTypeCategoryKeys = never;

export type AutodefinableEventTypeCategoryPart = DefinedRecord<Pick<MutationCreateEventTypeCategoryArgs, AutodefinableEventTypeCategoryKeys>>;

export type ReliableEventTypeCategoryCreateUserInput =
  Omit<MutationCreateEventTypeCategoryArgs, ForbidenForUserEventTypeCategoryKeys>
  & AutodefinableEventTypeCategoryPart;

export type AllowedEventTypeCategoryForUserCreateInput = Omit<MutationCreateEventTypeCategoryArgs, ForbidenForUserEventTypeCategoryKeys>;

export type StrictCreateEventTypeCategoryArgs = DefinedFieldsInRecord<MutationCreateEventTypeCategoryArgs, RequiredDbNotUserEventTypeCategoryKeys> & AutodefinableEventTypeCategoryPart;
export type StrictUpdateEventTypeCategoryArgs = DefinedFieldsInRecord<MutationUpdateEventTypeCategoryArgs, RequiredDbNotUserEventTypeCategoryKeys> & AutodefinableEventTypeCategoryPart;

export type StrictCreateEventTypeCategoryArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateEventTypeCategoryArgs, AutodefinableEventTypeCategoryKeys>;
export type MutationCreateEventTypeCategoryArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateEventTypeCategoryArgs, AutodefinableEventTypeCategoryKeys>;
export type MutationUpdateEventTypeCategoryArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateEventTypeCategoryArgs, AutodefinableEventTypeCategoryKeys>;

export class EventTypeCategoriesService extends BaseService<
  EventTypeCategory,
  MutationCreateEventTypeCategoryArgs,
  MutationUpdateEventTypeCategoryArgs,
  MutationRemoveEventTypeCategoryArgs,
  QueryAllEventTypeCategoriesArgs,
  AutodefinableEventTypeCategoryKeys,
  ForbidenForUserEventTypeCategoryKeys,
  RequiredDbNotUserEventTypeCategoryKeys,
  Prisma.EventTypeCategoryDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.eventTypeCategory, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
