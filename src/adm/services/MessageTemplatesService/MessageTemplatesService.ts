import {
  MutationCreateMessageTemplateArgs,
  MutationUpdateMessageTemplateArgs,
  MutationRemoveMessageTemplateArgs,
  QueryAllMessageTemplatesArgs,
  MessageTemplate,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableMessageTemplateKeys = never;
export type ForbidenForUserMessageTemplateKeys = never;
export type RequiredDbNotUserMessageTemplateKeys = never;

export type AutodefinableMessageTemplatePart = DefinedRecord<Pick<MutationCreateMessageTemplateArgs, AutodefinableMessageTemplateKeys>>;

export type ReliableMessageTemplateCreateUserInput =
  Omit<MutationCreateMessageTemplateArgs, ForbidenForUserMessageTemplateKeys>
  & AutodefinableMessageTemplatePart;

export type AllowedMessageTemplateForUserCreateInput = Omit<MutationCreateMessageTemplateArgs, ForbidenForUserMessageTemplateKeys>;

export type StrictCreateMessageTemplateArgs = DefinedFieldsInRecord<MutationCreateMessageTemplateArgs, RequiredDbNotUserMessageTemplateKeys> & AutodefinableMessageTemplatePart;
export type StrictUpdateMessageTemplateArgs = DefinedFieldsInRecord<MutationUpdateMessageTemplateArgs, RequiredDbNotUserMessageTemplateKeys> & AutodefinableMessageTemplatePart;

export type StrictCreateMessageTemplateArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMessageTemplateArgs, AutodefinableMessageTemplateKeys>;
export type MutationCreateMessageTemplateArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMessageTemplateArgs, AutodefinableMessageTemplateKeys>;
export type MutationUpdateMessageTemplateArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMessageTemplateArgs, AutodefinableMessageTemplateKeys>;

export class MessageTemplatesService extends BaseService<
  MessageTemplate,
  MutationCreateMessageTemplateArgs,
  MutationUpdateMessageTemplateArgs,
  MutationRemoveMessageTemplateArgs,
  QueryAllMessageTemplatesArgs,
  AutodefinableMessageTemplateKeys,
  ForbidenForUserMessageTemplateKeys,
  RequiredDbNotUserMessageTemplateKeys,
  Prisma.MessageTemplateDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.messageTemplate, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
