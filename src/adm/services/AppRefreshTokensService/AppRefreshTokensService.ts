import {
  MutationCreateAppRefreshTokenArgs,
  MutationUpdateAppRefreshTokenArgs,
  MutationRemoveAppRefreshTokenArgs,
  QueryAllAppRefreshTokensArgs,
  AppRefreshToken,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableAppRefreshTokenKeys = never;
export type ForbidenForUserAppRefreshTokenKeys = never;
export type RequiredDbNotUserAppRefreshTokenKeys = never;

export type AutodefinableAppRefreshTokenPart = DefinedRecord<Pick<MutationCreateAppRefreshTokenArgs, AutodefinableAppRefreshTokenKeys>>;

export type ReliableAppRefreshTokenCreateUserInput =
  Omit<MutationCreateAppRefreshTokenArgs, ForbidenForUserAppRefreshTokenKeys>
  & AutodefinableAppRefreshTokenPart;

export type AllowedAppRefreshTokenForUserCreateInput = Omit<MutationCreateAppRefreshTokenArgs, ForbidenForUserAppRefreshTokenKeys>;

export type StrictCreateAppRefreshTokenArgs = DefinedFieldsInRecord<MutationCreateAppRefreshTokenArgs, RequiredDbNotUserAppRefreshTokenKeys> & AutodefinableAppRefreshTokenPart;
export type StrictUpdateAppRefreshTokenArgs = DefinedFieldsInRecord<MutationUpdateAppRefreshTokenArgs, RequiredDbNotUserAppRefreshTokenKeys> & AutodefinableAppRefreshTokenPart;

export type StrictCreateAppRefreshTokenArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateAppRefreshTokenArgs, AutodefinableAppRefreshTokenKeys>;
export type MutationCreateAppRefreshTokenArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateAppRefreshTokenArgs, AutodefinableAppRefreshTokenKeys>;
export type MutationUpdateAppRefreshTokenArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateAppRefreshTokenArgs, AutodefinableAppRefreshTokenKeys>;

export class AppRefreshTokensService extends BaseService<
  AppRefreshToken,
  MutationCreateAppRefreshTokenArgs,
  MutationUpdateAppRefreshTokenArgs,
  MutationRemoveAppRefreshTokenArgs,
  QueryAllAppRefreshTokensArgs,
  AutodefinableAppRefreshTokenKeys,
  ForbidenForUserAppRefreshTokenKeys,
  RequiredDbNotUserAppRefreshTokenKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.appRefreshToken, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }

  augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableAppRefreshTokenPart> => currentData as T & AutodefinableAppRefreshTokenPart;
}
