import {
  MutationCreateUserArgs,
  MutationUpdateUserArgs,
  MutationRemoveUserArgs,
  QueryAllUsersArgs,
  User,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableUserKeys = never;
export type ForbidenForUserUserKeys = 'tenantId';
export type RequiredDbNotUserUserKeys = never;

export type AutodefinableUserPart = DefinedRecord<Pick<MutationCreateUserArgs, AutodefinableUserKeys>>;

export type ReliableUserCreateUserInput =
  Omit<MutationCreateUserArgs, ForbidenForUserUserKeys>
  & AutodefinableUserPart;

export type AllowedUserForUserCreateInput = Omit<MutationCreateUserArgs, ForbidenForUserUserKeys>;

export type StrictCreateUserArgs = DefinedFieldsInRecord<MutationCreateUserArgs, RequiredDbNotUserUserKeys> & AutodefinableUserPart;
export type StrictUpdateUserArgs = DefinedFieldsInRecord<MutationUpdateUserArgs, RequiredDbNotUserUserKeys> & AutodefinableUserPart;

export type StrictCreateUserArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateUserArgs, AutodefinableUserKeys>;
export type MutationCreateUserArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateUserArgs, AutodefinableUserKeys>;
export type MutationUpdateUserArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateUserArgs, AutodefinableUserKeys>;

export class UsersService extends BaseService<
  User,
  MutationCreateUserArgs,
  MutationUpdateUserArgs,
  MutationRemoveUserArgs,
  QueryAllUsersArgs,
  AutodefinableUserKeys,
  ForbidenForUserUserKeys,
  RequiredDbNotUserUserKeys,
  Prisma.UserDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.user, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
