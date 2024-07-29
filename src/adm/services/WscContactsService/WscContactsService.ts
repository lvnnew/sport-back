import {
  MutationCreateWscContactArgs,
  MutationUpdateWscContactArgs,
  MutationRemoveWscContactArgs,
  QueryAllWscContactsArgs,
  WscContact,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableWscContactKeys = never;
export type ForbidenForUserWscContactKeys = never;
export type RequiredDbNotUserWscContactKeys = never;

export type AutodefinableWscContactPart = DefinedRecord<Pick<MutationCreateWscContactArgs, AutodefinableWscContactKeys>>;

export type ReliableWscContactCreateUserInput =
  Omit<MutationCreateWscContactArgs, ForbidenForUserWscContactKeys>
  & AutodefinableWscContactPart;

export type AllowedWscContactForUserCreateInput = Omit<MutationCreateWscContactArgs, ForbidenForUserWscContactKeys>;

export type StrictCreateWscContactArgs = DefinedFieldsInRecord<MutationCreateWscContactArgs, RequiredDbNotUserWscContactKeys> & AutodefinableWscContactPart;
export type StrictUpdateWscContactArgs = DefinedFieldsInRecord<MutationUpdateWscContactArgs, RequiredDbNotUserWscContactKeys> & AutodefinableWscContactPart;

export type StrictCreateWscContactArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateWscContactArgs, AutodefinableWscContactKeys>;
export type MutationCreateWscContactArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateWscContactArgs, AutodefinableWscContactKeys>;
export type MutationUpdateWscContactArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateWscContactArgs, AutodefinableWscContactKeys>;

export class WscContactsService extends BaseService<
  WscContact,
  MutationCreateWscContactArgs,
  MutationUpdateWscContactArgs,
  MutationRemoveWscContactArgs,
  QueryAllWscContactsArgs,
  AutodefinableWscContactKeys,
  ForbidenForUserWscContactKeys,
  RequiredDbNotUserWscContactKeys,
  Prisma.WscContactDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.wscContact, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
