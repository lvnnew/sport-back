import {
  MutationCreateLanguageArgs,
  MutationUpdateLanguageArgs,
  MutationRemoveLanguageArgs,
  QueryAllLanguagesArgs,
  Language,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableLanguageKeys = never;
export type ForbidenForUserLanguageKeys = never;
export type RequiredDbNotUserLanguageKeys = never;

export type AutodefinableLanguagePart = DefinedRecord<Pick<MutationCreateLanguageArgs, AutodefinableLanguageKeys>>;

export type ReliableLanguageCreateUserInput =
  Omit<MutationCreateLanguageArgs, ForbidenForUserLanguageKeys>
  & AutodefinableLanguagePart;

export type AllowedLanguageForUserCreateInput = Omit<MutationCreateLanguageArgs, ForbidenForUserLanguageKeys>;

export type StrictCreateLanguageArgs = DefinedFieldsInRecord<MutationCreateLanguageArgs, RequiredDbNotUserLanguageKeys> & AutodefinableLanguagePart;
export type StrictUpdateLanguageArgs = DefinedFieldsInRecord<MutationUpdateLanguageArgs, RequiredDbNotUserLanguageKeys> & AutodefinableLanguagePart;

export type StrictCreateLanguageArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateLanguageArgs, AutodefinableLanguageKeys>;
export type MutationCreateLanguageArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateLanguageArgs, AutodefinableLanguageKeys>;
export type MutationUpdateLanguageArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateLanguageArgs, AutodefinableLanguageKeys>;

export class LanguagesService extends BaseService<
  Language,
  MutationCreateLanguageArgs,
  MutationUpdateLanguageArgs,
  MutationRemoveLanguageArgs,
  QueryAllLanguagesArgs,
  AutodefinableLanguageKeys,
  ForbidenForUserLanguageKeys,
  RequiredDbNotUserLanguageKeys,
  Prisma.LanguageDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.language, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
