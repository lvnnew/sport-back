import {
  MutationCreateMatchStatusArgs,
  MutationUpdateMatchStatusArgs,
  MutationRemoveMatchStatusArgs,
  QueryAllMatchStatusesArgs,
  MatchStatus,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableMatchStatusKeys = never;
export type ForbidenForUserMatchStatusKeys = never;
export type RequiredDbNotUserMatchStatusKeys = never;

export type AutodefinableMatchStatusPart = DefinedRecord<Pick<MutationCreateMatchStatusArgs, AutodefinableMatchStatusKeys>>;

export type ReliableMatchStatusCreateUserInput =
  Omit<MutationCreateMatchStatusArgs, ForbidenForUserMatchStatusKeys>
  & AutodefinableMatchStatusPart;

export type AllowedMatchStatusForUserCreateInput = Omit<MutationCreateMatchStatusArgs, ForbidenForUserMatchStatusKeys>;

export type StrictCreateMatchStatusArgs = DefinedFieldsInRecord<MutationCreateMatchStatusArgs, RequiredDbNotUserMatchStatusKeys> & AutodefinableMatchStatusPart;
export type StrictUpdateMatchStatusArgs = DefinedFieldsInRecord<MutationUpdateMatchStatusArgs, RequiredDbNotUserMatchStatusKeys> & AutodefinableMatchStatusPart;

export type StrictCreateMatchStatusArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMatchStatusArgs, AutodefinableMatchStatusKeys>;
export type MutationCreateMatchStatusArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMatchStatusArgs, AutodefinableMatchStatusKeys>;
export type MutationUpdateMatchStatusArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMatchStatusArgs, AutodefinableMatchStatusKeys>;

export class MatchStatusesService extends BaseService<
  MatchStatus,
  MutationCreateMatchStatusArgs,
  MutationUpdateMatchStatusArgs,
  MutationRemoveMatchStatusArgs,
  QueryAllMatchStatusesArgs,
  AutodefinableMatchStatusKeys,
  ForbidenForUserMatchStatusKeys,
  RequiredDbNotUserMatchStatusKeys,
  Prisma.MatchStatusDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.matchStatus, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
