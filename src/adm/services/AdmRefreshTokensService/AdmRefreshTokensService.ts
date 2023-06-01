import {
  MutationCreateAdmRefreshTokenArgs,
  MutationUpdateAdmRefreshTokenArgs,
  MutationRemoveAdmRefreshTokenArgs,
  QueryAllAdmRefreshTokensArgs,
  AdmRefreshToken,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableAdmRefreshTokenKeys = never;
export type ForbidenForUserAdmRefreshTokenKeys = never;
export type RequiredDbNotUserAdmRefreshTokenKeys = never;

export type AutodefinableAdmRefreshTokenPart = DefinedRecord<Pick<MutationCreateAdmRefreshTokenArgs, AutodefinableAdmRefreshTokenKeys>>;

export type ReliableAdmRefreshTokenCreateUserInput =
  Omit<MutationCreateAdmRefreshTokenArgs, ForbidenForUserAdmRefreshTokenKeys>
  & AutodefinableAdmRefreshTokenPart;

export type AllowedAdmRefreshTokenForUserCreateInput = Omit<MutationCreateAdmRefreshTokenArgs, ForbidenForUserAdmRefreshTokenKeys>;

export type StrictCreateAdmRefreshTokenArgs = DefinedFieldsInRecord<MutationCreateAdmRefreshTokenArgs, RequiredDbNotUserAdmRefreshTokenKeys> & AutodefinableAdmRefreshTokenPart;
export type StrictUpdateAdmRefreshTokenArgs = DefinedFieldsInRecord<MutationUpdateAdmRefreshTokenArgs, RequiredDbNotUserAdmRefreshTokenKeys> & AutodefinableAdmRefreshTokenPart;

export type StrictCreateAdmRefreshTokenArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateAdmRefreshTokenArgs, AutodefinableAdmRefreshTokenKeys>;
export type MutationCreateAdmRefreshTokenArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateAdmRefreshTokenArgs, AutodefinableAdmRefreshTokenKeys>;
export type MutationUpdateAdmRefreshTokenArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateAdmRefreshTokenArgs, AutodefinableAdmRefreshTokenKeys>;

export class AdmRefreshTokensService extends BaseService<
  AdmRefreshToken,
  MutationCreateAdmRefreshTokenArgs,
  MutationUpdateAdmRefreshTokenArgs,
  MutationRemoveAdmRefreshTokenArgs,
  QueryAllAdmRefreshTokensArgs,
  AutodefinableAdmRefreshTokenKeys,
  ForbidenForUserAdmRefreshTokenKeys,
  RequiredDbNotUserAdmRefreshTokenKeys,
  Prisma.AdmRefreshTokenDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.admRefreshToken, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
