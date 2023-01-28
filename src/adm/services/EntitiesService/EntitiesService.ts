import {
  MutationCreateEntityArgs,
  MutationUpdateEntityArgs,
  MutationRemoveEntityArgs,
  QueryAllEntitiesArgs,
  Entity,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableEntityKeys = never;
export type ForbidenForUserEntityKeys = never;
export type RequiredDbNotUserEntityKeys = never;

export type AutodefinableEntityPart = DefinedRecord<Pick<MutationCreateEntityArgs, AutodefinableEntityKeys>>;

export type ReliableEntityCreateUserInput =
  Omit<MutationCreateEntityArgs, ForbidenForUserEntityKeys>
  & AutodefinableEntityPart;

export type AllowedEntityForUserCreateInput = Omit<MutationCreateEntityArgs, ForbidenForUserEntityKeys>;

export type StrictCreateEntityArgs = DefinedFieldsInRecord<MutationCreateEntityArgs, RequiredDbNotUserEntityKeys> & AutodefinableEntityPart;
export type StrictUpdateEntityArgs = DefinedFieldsInRecord<MutationUpdateEntityArgs, RequiredDbNotUserEntityKeys> & AutodefinableEntityPart;

export type StrictCreateEntityArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateEntityArgs, AutodefinableEntityKeys>;
export type MutationCreateEntityArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateEntityArgs, AutodefinableEntityKeys>;
export type MutationUpdateEntityArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateEntityArgs, AutodefinableEntityKeys>;

export class EntitiesService extends BaseService<
  Entity,
  MutationCreateEntityArgs,
  MutationUpdateEntityArgs,
  MutationRemoveEntityArgs,
  QueryAllEntitiesArgs,
  AutodefinableEntityKeys,
  ForbidenForUserEntityKeys,
  RequiredDbNotUserEntityKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.entity, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
