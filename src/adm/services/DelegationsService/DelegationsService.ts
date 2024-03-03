import {
  MutationCreateDelegationArgs,
  MutationUpdateDelegationArgs,
  MutationRemoveDelegationArgs,
  QueryAllDelegationsArgs,
  Delegation,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableDelegationKeys = never;
export type ForbidenForUserDelegationKeys = never;
export type RequiredDbNotUserDelegationKeys = never;

export type AutodefinableDelegationPart = DefinedRecord<Pick<MutationCreateDelegationArgs, AutodefinableDelegationKeys>>;

export type ReliableDelegationCreateUserInput =
  Omit<MutationCreateDelegationArgs, ForbidenForUserDelegationKeys>
  & AutodefinableDelegationPart;

export type AllowedDelegationForUserCreateInput = Omit<MutationCreateDelegationArgs, ForbidenForUserDelegationKeys>;

export type StrictCreateDelegationArgs = DefinedFieldsInRecord<MutationCreateDelegationArgs, RequiredDbNotUserDelegationKeys> & AutodefinableDelegationPart;
export type StrictUpdateDelegationArgs = DefinedFieldsInRecord<MutationUpdateDelegationArgs, RequiredDbNotUserDelegationKeys> & AutodefinableDelegationPart;

export type StrictCreateDelegationArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateDelegationArgs, AutodefinableDelegationKeys>;
export type MutationCreateDelegationArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateDelegationArgs, AutodefinableDelegationKeys>;
export type MutationUpdateDelegationArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateDelegationArgs, AutodefinableDelegationKeys>;

export class DelegationsService extends BaseService<
  Delegation,
  MutationCreateDelegationArgs,
  MutationUpdateDelegationArgs,
  MutationRemoveDelegationArgs,
  QueryAllDelegationsArgs,
  AutodefinableDelegationKeys,
  ForbidenForUserDelegationKeys,
  RequiredDbNotUserDelegationKeys,
  Prisma.DelegationDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.delegation, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
