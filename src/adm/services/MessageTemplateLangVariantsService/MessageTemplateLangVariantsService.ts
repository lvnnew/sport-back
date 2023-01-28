import {
  MutationCreateMessageTemplateLangVariantArgs,
  MutationUpdateMessageTemplateLangVariantArgs,
  MutationRemoveMessageTemplateLangVariantArgs,
  QueryAllMessageTemplateLangVariantsArgs,
  MessageTemplateLangVariant,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableMessageTemplateLangVariantKeys = never;
export type ForbidenForUserMessageTemplateLangVariantKeys = never;
export type RequiredDbNotUserMessageTemplateLangVariantKeys = never;

export type AutodefinableMessageTemplateLangVariantPart = DefinedRecord<Pick<MutationCreateMessageTemplateLangVariantArgs, AutodefinableMessageTemplateLangVariantKeys>>;

export type ReliableMessageTemplateLangVariantCreateUserInput =
  Omit<MutationCreateMessageTemplateLangVariantArgs, ForbidenForUserMessageTemplateLangVariantKeys>
  & AutodefinableMessageTemplateLangVariantPart;

export type AllowedMessageTemplateLangVariantForUserCreateInput = Omit<MutationCreateMessageTemplateLangVariantArgs, ForbidenForUserMessageTemplateLangVariantKeys>;

export type StrictCreateMessageTemplateLangVariantArgs = DefinedFieldsInRecord<MutationCreateMessageTemplateLangVariantArgs, RequiredDbNotUserMessageTemplateLangVariantKeys> & AutodefinableMessageTemplateLangVariantPart;
export type StrictUpdateMessageTemplateLangVariantArgs = DefinedFieldsInRecord<MutationUpdateMessageTemplateLangVariantArgs, RequiredDbNotUserMessageTemplateLangVariantKeys> & AutodefinableMessageTemplateLangVariantPart;

export type StrictCreateMessageTemplateLangVariantArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMessageTemplateLangVariantArgs, AutodefinableMessageTemplateLangVariantKeys>;
export type MutationCreateMessageTemplateLangVariantArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMessageTemplateLangVariantArgs, AutodefinableMessageTemplateLangVariantKeys>;
export type MutationUpdateMessageTemplateLangVariantArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMessageTemplateLangVariantArgs, AutodefinableMessageTemplateLangVariantKeys>;

export class MessageTemplateLangVariantsService extends BaseService<
  MessageTemplateLangVariant,
  MutationCreateMessageTemplateLangVariantArgs,
  MutationUpdateMessageTemplateLangVariantArgs,
  MutationRemoveMessageTemplateLangVariantArgs,
  QueryAllMessageTemplateLangVariantsArgs,
  AutodefinableMessageTemplateLangVariantKeys,
  ForbidenForUserMessageTemplateLangVariantKeys,
  RequiredDbNotUserMessageTemplateLangVariantKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.messageTemplateLangVariant, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
