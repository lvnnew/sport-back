import {
  MutationCreateMatchPeriodMarkupArgs,
  MutationUpdateMatchPeriodMarkupArgs,
  MutationRemoveMatchPeriodMarkupArgs,
  QueryAllMatchPeriodMarkupsArgs,
  MatchPeriodMarkup,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableMatchPeriodMarkupKeys = never;
export type ForbidenForUserMatchPeriodMarkupKeys = never;
export type RequiredDbNotUserMatchPeriodMarkupKeys = never;

export type AutodefinableMatchPeriodMarkupPart = DefinedRecord<Pick<MutationCreateMatchPeriodMarkupArgs, AutodefinableMatchPeriodMarkupKeys>>;

export type ReliableMatchPeriodMarkupCreateUserInput =
  Omit<MutationCreateMatchPeriodMarkupArgs, ForbidenForUserMatchPeriodMarkupKeys>
  & AutodefinableMatchPeriodMarkupPart;

export type AllowedMatchPeriodMarkupForUserCreateInput = Omit<MutationCreateMatchPeriodMarkupArgs, ForbidenForUserMatchPeriodMarkupKeys>;

export type StrictCreateMatchPeriodMarkupArgs = DefinedFieldsInRecord<MutationCreateMatchPeriodMarkupArgs, RequiredDbNotUserMatchPeriodMarkupKeys> & AutodefinableMatchPeriodMarkupPart;
export type StrictUpdateMatchPeriodMarkupArgs = DefinedFieldsInRecord<MutationUpdateMatchPeriodMarkupArgs, RequiredDbNotUserMatchPeriodMarkupKeys> & AutodefinableMatchPeriodMarkupPart;

export type StrictCreateMatchPeriodMarkupArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMatchPeriodMarkupArgs, AutodefinableMatchPeriodMarkupKeys>;
export type MutationCreateMatchPeriodMarkupArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMatchPeriodMarkupArgs, AutodefinableMatchPeriodMarkupKeys>;
export type MutationUpdateMatchPeriodMarkupArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMatchPeriodMarkupArgs, AutodefinableMatchPeriodMarkupKeys>;

export class MatchPeriodMarkupsService extends BaseService<
  MatchPeriodMarkup,
  MutationCreateMatchPeriodMarkupArgs,
  MutationUpdateMatchPeriodMarkupArgs,
  MutationRemoveMatchPeriodMarkupArgs,
  QueryAllMatchPeriodMarkupsArgs,
  AutodefinableMatchPeriodMarkupKeys,
  ForbidenForUserMatchPeriodMarkupKeys,
  RequiredDbNotUserMatchPeriodMarkupKeys,
  Prisma.MatchPeriodMarkupDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.matchPeriodMarkup, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
