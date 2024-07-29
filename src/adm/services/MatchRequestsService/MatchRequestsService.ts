import {
  MutationCreateMatchRequestArgs,
  MutationUpdateMatchRequestArgs,
  MutationRemoveMatchRequestArgs,
  QueryAllMatchRequestsArgs,
  MatchRequest,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableMatchRequestKeys = never;
export type ForbidenForUserMatchRequestKeys = never;
export type RequiredDbNotUserMatchRequestKeys = never;

export type AutodefinableMatchRequestPart = DefinedRecord<Pick<MutationCreateMatchRequestArgs, AutodefinableMatchRequestKeys>>;

export type ReliableMatchRequestCreateUserInput =
  Omit<MutationCreateMatchRequestArgs, ForbidenForUserMatchRequestKeys>
  & AutodefinableMatchRequestPart;

export type AllowedMatchRequestForUserCreateInput = Omit<MutationCreateMatchRequestArgs, ForbidenForUserMatchRequestKeys>;

export type StrictCreateMatchRequestArgs = DefinedFieldsInRecord<MutationCreateMatchRequestArgs, RequiredDbNotUserMatchRequestKeys> & AutodefinableMatchRequestPart;
export type StrictUpdateMatchRequestArgs = DefinedFieldsInRecord<MutationUpdateMatchRequestArgs, RequiredDbNotUserMatchRequestKeys> & AutodefinableMatchRequestPart;

export type StrictCreateMatchRequestArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMatchRequestArgs, AutodefinableMatchRequestKeys>;
export type MutationCreateMatchRequestArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMatchRequestArgs, AutodefinableMatchRequestKeys>;
export type MutationUpdateMatchRequestArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMatchRequestArgs, AutodefinableMatchRequestKeys>;

export class MatchRequestsService extends BaseService<
  MatchRequest,
  MutationCreateMatchRequestArgs,
  MutationUpdateMatchRequestArgs,
  MutationRemoveMatchRequestArgs,
  QueryAllMatchRequestsArgs,
  AutodefinableMatchRequestKeys,
  ForbidenForUserMatchRequestKeys,
  RequiredDbNotUserMatchRequestKeys,
  Prisma.MatchRequestDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.matchRequest, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
