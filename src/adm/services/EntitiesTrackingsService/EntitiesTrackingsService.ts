import {
  MutationCreateEntitiesTrackingArgs,
  MutationUpdateEntitiesTrackingArgs,
  MutationRemoveEntitiesTrackingArgs,
  QueryAllEntitiesTrackingsArgs,
  EntitiesTracking,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableEntitiesTrackingKeys = never;
export type ForbidenForUserEntitiesTrackingKeys = never;
export type RequiredDbNotUserEntitiesTrackingKeys = never;

export type AutodefinableEntitiesTrackingPart = DefinedRecord<Pick<MutationCreateEntitiesTrackingArgs, AutodefinableEntitiesTrackingKeys>>;

export type ReliableEntitiesTrackingCreateUserInput =
  Omit<MutationCreateEntitiesTrackingArgs, ForbidenForUserEntitiesTrackingKeys>
  & AutodefinableEntitiesTrackingPart;

export type AllowedEntitiesTrackingForUserCreateInput = Omit<MutationCreateEntitiesTrackingArgs, ForbidenForUserEntitiesTrackingKeys>;

export type StrictCreateEntitiesTrackingArgs = DefinedFieldsInRecord<MutationCreateEntitiesTrackingArgs, RequiredDbNotUserEntitiesTrackingKeys> & AutodefinableEntitiesTrackingPart;
export type StrictUpdateEntitiesTrackingArgs = DefinedFieldsInRecord<MutationUpdateEntitiesTrackingArgs, RequiredDbNotUserEntitiesTrackingKeys> & AutodefinableEntitiesTrackingPart;

export type StrictCreateEntitiesTrackingArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateEntitiesTrackingArgs, AutodefinableEntitiesTrackingKeys>;
export type MutationCreateEntitiesTrackingArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateEntitiesTrackingArgs, AutodefinableEntitiesTrackingKeys>;
export type MutationUpdateEntitiesTrackingArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateEntitiesTrackingArgs, AutodefinableEntitiesTrackingKeys>;

export class EntitiesTrackingsService extends BaseService<
  EntitiesTracking,
  MutationCreateEntitiesTrackingArgs,
  MutationUpdateEntitiesTrackingArgs,
  MutationRemoveEntitiesTrackingArgs,
  QueryAllEntitiesTrackingsArgs,
  AutodefinableEntitiesTrackingKeys,
  ForbidenForUserEntitiesTrackingKeys,
  RequiredDbNotUserEntitiesTrackingKeys,
  Prisma.EntitiesTrackingDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.entitiesTracking, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
