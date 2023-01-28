import {
  MutationCreateAggregateTrackingArgs,
  MutationUpdateAggregateTrackingArgs,
  MutationRemoveAggregateTrackingArgs,
  QueryAllAggregateTrackingsArgs,
  AggregateTracking,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {InfoRegistryService} from '../utils/class/InfoRegistryService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableAggregateTrackingKeys = never;
export type ForbidenForUserAggregateTrackingKeys = never;
export type RequiredDbNotUserAggregateTrackingKeys = never;

export type AutodefinableAggregateTrackingPart = DefinedRecord<Pick<MutationCreateAggregateTrackingArgs, AutodefinableAggregateTrackingKeys>>;

export type ReliableAggregateTrackingCreateUserInput =
  Omit<MutationCreateAggregateTrackingArgs, ForbidenForUserAggregateTrackingKeys>
  & AutodefinableAggregateTrackingPart;

export type AllowedAggregateTrackingForUserCreateInput = Omit<MutationCreateAggregateTrackingArgs, ForbidenForUserAggregateTrackingKeys>;

export type StrictCreateAggregateTrackingArgs = DefinedFieldsInRecord<MutationCreateAggregateTrackingArgs, RequiredDbNotUserAggregateTrackingKeys> & AutodefinableAggregateTrackingPart;
export type StrictUpdateAggregateTrackingArgs = DefinedFieldsInRecord<MutationUpdateAggregateTrackingArgs, RequiredDbNotUserAggregateTrackingKeys> & AutodefinableAggregateTrackingPart;

export type StrictCreateAggregateTrackingArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateAggregateTrackingArgs, AutodefinableAggregateTrackingKeys>;
export type MutationCreateAggregateTrackingArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateAggregateTrackingArgs, AutodefinableAggregateTrackingKeys>;
export type MutationUpdateAggregateTrackingArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateAggregateTrackingArgs, AutodefinableAggregateTrackingKeys>;

export class AggregateTrackingsService extends InfoRegistryService<
  AggregateTracking,
  MutationCreateAggregateTrackingArgs,
  MutationUpdateAggregateTrackingArgs,
  MutationRemoveAggregateTrackingArgs,
  QueryAllAggregateTrackingsArgs,
  AutodefinableAggregateTrackingKeys,
  ForbidenForUserAggregateTrackingKeys,
  RequiredDbNotUserAggregateTrackingKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.aggregateTracking, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
