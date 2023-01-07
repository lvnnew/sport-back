import {
  MutationCreateUnitArgs,
  MutationUpdateUnitArgs,
  MutationRemoveUnitArgs,
  QueryAllUnitsArgs,
  Unit,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableUnitKeys = never;
export type ForbidenForUserUnitKeys = never;
export type RequiredDbNotUserUnitKeys = never;

export type AutodefinableUnitPart = DefinedRecord<Pick<MutationCreateUnitArgs, AutodefinableUnitKeys>>;

export type ReliableUnitCreateUserInput =
  Omit<MutationCreateUnitArgs, ForbidenForUserUnitKeys>
  & AutodefinableUnitPart;

export type AllowedUnitForUserCreateInput = Omit<MutationCreateUnitArgs, ForbidenForUserUnitKeys>;

export type StrictCreateUnitArgs = DefinedFieldsInRecord<MutationCreateUnitArgs, RequiredDbNotUserUnitKeys> & AutodefinableUnitPart;
export type StrictUpdateUnitArgs = DefinedFieldsInRecord<MutationUpdateUnitArgs, RequiredDbNotUserUnitKeys> & AutodefinableUnitPart;

export type StrictCreateUnitArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateUnitArgs, AutodefinableUnitKeys>;
export type MutationCreateUnitArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateUnitArgs, AutodefinableUnitKeys>;
export type MutationUpdateUnitArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateUnitArgs, AutodefinableUnitKeys>;

export class UnitsService extends BaseService<
  Unit,
  MutationCreateUnitArgs,
  MutationUpdateUnitArgs,
  MutationRemoveUnitArgs,
  QueryAllUnitsArgs,
  AutodefinableUnitKeys,
  ForbidenForUserUnitKeys,
  RequiredDbNotUserUnitKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.unit, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }

  augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableUnitPart> => currentData as T & AutodefinableUnitPart;
}
