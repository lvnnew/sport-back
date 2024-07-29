import {
  MutationCreateWscUserArgs,
  MutationUpdateWscUserArgs,
  MutationRemoveWscUserArgs,
  QueryAllWscUsersArgs,
  WscUser,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableWscUserKeys = never;
export type ForbidenForUserWscUserKeys = 'accessToken';
export type RequiredDbNotUserWscUserKeys = never;

export type AutodefinableWscUserPart = DefinedRecord<Pick<MutationCreateWscUserArgs, AutodefinableWscUserKeys>>;

export type ReliableWscUserCreateUserInput =
  Omit<MutationCreateWscUserArgs, ForbidenForUserWscUserKeys>
  & AutodefinableWscUserPart;

export type AllowedWscUserForUserCreateInput = Omit<MutationCreateWscUserArgs, ForbidenForUserWscUserKeys>;

export type StrictCreateWscUserArgs = DefinedFieldsInRecord<MutationCreateWscUserArgs, RequiredDbNotUserWscUserKeys> & AutodefinableWscUserPart;
export type StrictUpdateWscUserArgs = DefinedFieldsInRecord<MutationUpdateWscUserArgs, RequiredDbNotUserWscUserKeys> & AutodefinableWscUserPart;

export type StrictCreateWscUserArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateWscUserArgs, AutodefinableWscUserKeys>;
export type MutationCreateWscUserArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateWscUserArgs, AutodefinableWscUserKeys>;
export type MutationUpdateWscUserArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateWscUserArgs, AutodefinableWscUserKeys>;

export class WscUsersService extends BaseService<
  WscUser,
  MutationCreateWscUserArgs,
  MutationUpdateWscUserArgs,
  MutationRemoveWscUserArgs,
  QueryAllWscUsersArgs,
  AutodefinableWscUserKeys,
  ForbidenForUserWscUserKeys,
  RequiredDbNotUserWscUserKeys,
  Prisma.WscUserDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.wscUser, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
