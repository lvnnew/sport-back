import {
  MutationCreateEventTypeArgs,
  MutationUpdateEventTypeArgs,
  MutationRemoveEventTypeArgs,
  QueryAllEventTypesArgs,
  EventType,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableEventTypeKeys = never;
export type ForbidenForUserEventTypeKeys = never;
export type RequiredDbNotUserEventTypeKeys = never;

export type AutodefinableEventTypePart = DefinedRecord<Pick<MutationCreateEventTypeArgs, AutodefinableEventTypeKeys>>;

export type ReliableEventTypeCreateUserInput =
  Omit<MutationCreateEventTypeArgs, ForbidenForUserEventTypeKeys>
  & AutodefinableEventTypePart;

export type AllowedEventTypeForUserCreateInput = Omit<MutationCreateEventTypeArgs, ForbidenForUserEventTypeKeys>;

export type StrictCreateEventTypeArgs = DefinedFieldsInRecord<MutationCreateEventTypeArgs, RequiredDbNotUserEventTypeKeys> & AutodefinableEventTypePart;
export type StrictUpdateEventTypeArgs = DefinedFieldsInRecord<MutationUpdateEventTypeArgs, RequiredDbNotUserEventTypeKeys> & AutodefinableEventTypePart;

export type StrictCreateEventTypeArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateEventTypeArgs, AutodefinableEventTypeKeys>;
export type MutationCreateEventTypeArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateEventTypeArgs, AutodefinableEventTypeKeys>;
export type MutationUpdateEventTypeArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateEventTypeArgs, AutodefinableEventTypeKeys>;

export class EventTypesService extends BaseService<
  EventType,
  MutationCreateEventTypeArgs,
  MutationUpdateEventTypeArgs,
  MutationRemoveEventTypeArgs,
  QueryAllEventTypesArgs,
  AutodefinableEventTypeKeys,
  ForbidenForUserEventTypeKeys,
  RequiredDbNotUserEventTypeKeys,
  Prisma.EventTypeDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.eventType, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
