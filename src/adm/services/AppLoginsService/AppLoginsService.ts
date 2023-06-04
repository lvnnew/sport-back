import {
  MutationCreateAppLoginArgs,
  MutationUpdateAppLoginArgs,
  MutationRemoveAppLoginArgs,
  QueryAllAppLoginsArgs,
  AppLogin,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableAppLoginKeys = never;
export type ForbidenForUserAppLoginKeys = never;
export type RequiredDbNotUserAppLoginKeys = never;

export type AutodefinableAppLoginPart = DefinedRecord<Pick<MutationCreateAppLoginArgs, AutodefinableAppLoginKeys>>;

export type ReliableAppLoginCreateUserInput =
  Omit<MutationCreateAppLoginArgs, ForbidenForUserAppLoginKeys>
  & AutodefinableAppLoginPart;

export type AllowedAppLoginForUserCreateInput = Omit<MutationCreateAppLoginArgs, ForbidenForUserAppLoginKeys>;

export type StrictCreateAppLoginArgs = DefinedFieldsInRecord<MutationCreateAppLoginArgs, RequiredDbNotUserAppLoginKeys> & AutodefinableAppLoginPart;
export type StrictUpdateAppLoginArgs = DefinedFieldsInRecord<MutationUpdateAppLoginArgs, RequiredDbNotUserAppLoginKeys> & AutodefinableAppLoginPart;

export type StrictCreateAppLoginArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateAppLoginArgs, AutodefinableAppLoginKeys>;
export type MutationCreateAppLoginArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateAppLoginArgs, AutodefinableAppLoginKeys>;
export type MutationUpdateAppLoginArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateAppLoginArgs, AutodefinableAppLoginKeys>;

export class AppLoginsService extends BaseService<
  AppLogin,
  MutationCreateAppLoginArgs,
  MutationUpdateAppLoginArgs,
  MutationRemoveAppLoginArgs,
  QueryAllAppLoginsArgs,
  AutodefinableAppLoginKeys,
  ForbidenForUserAppLoginKeys,
  RequiredDbNotUserAppLoginKeys,
  Prisma.AppLoginDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.appLogin, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
