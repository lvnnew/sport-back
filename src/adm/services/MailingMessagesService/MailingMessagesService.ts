import {
  MutationCreateMailingMessageArgs,
  MutationUpdateMailingMessageArgs,
  MutationRemoveMailingMessageArgs,
  QueryAllMailingMessagesArgs,
  MailingMessage,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableMailingMessageKeys = never;
export type ForbidenForUserMailingMessageKeys = never;
export type RequiredDbNotUserMailingMessageKeys = never;

export type AutodefinableMailingMessagePart = DefinedRecord<Pick<MutationCreateMailingMessageArgs, AutodefinableMailingMessageKeys>>;

export type ReliableMailingMessageCreateUserInput =
  Omit<MutationCreateMailingMessageArgs, ForbidenForUserMailingMessageKeys>
  & AutodefinableMailingMessagePart;

export type AllowedMailingMessageForUserCreateInput = Omit<MutationCreateMailingMessageArgs, ForbidenForUserMailingMessageKeys>;

export type StrictCreateMailingMessageArgs = DefinedFieldsInRecord<MutationCreateMailingMessageArgs, RequiredDbNotUserMailingMessageKeys> & AutodefinableMailingMessagePart;
export type StrictUpdateMailingMessageArgs = DefinedFieldsInRecord<MutationUpdateMailingMessageArgs, RequiredDbNotUserMailingMessageKeys> & AutodefinableMailingMessagePart;

export type StrictCreateMailingMessageArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMailingMessageArgs, AutodefinableMailingMessageKeys>;
export type MutationCreateMailingMessageArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMailingMessageArgs, AutodefinableMailingMessageKeys>;
export type MutationUpdateMailingMessageArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMailingMessageArgs, AutodefinableMailingMessageKeys>;

export class MailingMessagesService extends BaseService<
  MailingMessage,
  MutationCreateMailingMessageArgs,
  MutationUpdateMailingMessageArgs,
  MutationRemoveMailingMessageArgs,
  QueryAllMailingMessagesArgs,
  AutodefinableMailingMessageKeys,
  ForbidenForUserMailingMessageKeys,
  RequiredDbNotUserMailingMessageKeys,
  Prisma.MailingMessageDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.mailingMessage, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
