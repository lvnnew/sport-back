import {
  MutationCreatePeriodTypeArgs,
  MutationUpdatePeriodTypeArgs,
  MutationRemovePeriodTypeArgs,
  QueryAllPeriodTypesArgs,
  PeriodType,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinablePeriodTypeKeys = never;
export type ForbidenForUserPeriodTypeKeys = never;
export type RequiredDbNotUserPeriodTypeKeys = never;

export type AutodefinablePeriodTypePart = DefinedRecord<Pick<MutationCreatePeriodTypeArgs, AutodefinablePeriodTypeKeys>>;

export type ReliablePeriodTypeCreateUserInput =
  Omit<MutationCreatePeriodTypeArgs, ForbidenForUserPeriodTypeKeys>
  & AutodefinablePeriodTypePart;

export type AllowedPeriodTypeForUserCreateInput = Omit<MutationCreatePeriodTypeArgs, ForbidenForUserPeriodTypeKeys>;

export type StrictCreatePeriodTypeArgs = DefinedFieldsInRecord<MutationCreatePeriodTypeArgs, RequiredDbNotUserPeriodTypeKeys> & AutodefinablePeriodTypePart;
export type StrictUpdatePeriodTypeArgs = DefinedFieldsInRecord<MutationUpdatePeriodTypeArgs, RequiredDbNotUserPeriodTypeKeys> & AutodefinablePeriodTypePart;

export type StrictCreatePeriodTypeArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreatePeriodTypeArgs, AutodefinablePeriodTypeKeys>;
export type MutationCreatePeriodTypeArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreatePeriodTypeArgs, AutodefinablePeriodTypeKeys>;
export type MutationUpdatePeriodTypeArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdatePeriodTypeArgs, AutodefinablePeriodTypeKeys>;

export class PeriodTypesService extends BaseService<
  PeriodType,
  MutationCreatePeriodTypeArgs,
  MutationUpdatePeriodTypeArgs,
  MutationRemovePeriodTypeArgs,
  QueryAllPeriodTypesArgs,
  AutodefinablePeriodTypeKeys,
  ForbidenForUserPeriodTypeKeys,
  RequiredDbNotUserPeriodTypeKeys,
  Prisma.PeriodTypeDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.periodType, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
