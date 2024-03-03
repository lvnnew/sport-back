import {
  MutationCreateMailingMessageStatusArgs,
  MutationUpdateMailingMessageStatusArgs,
  MutationRemoveMailingMessageStatusArgs,
  QueryAllMailingMessageStatusesArgs,
  MailingMessageStatus,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableMailingMessageStatusKeys = never;
export type ForbidenForUserMailingMessageStatusKeys = never;
export type RequiredDbNotUserMailingMessageStatusKeys = never;

export type AutodefinableMailingMessageStatusPart = DefinedRecord<Pick<MutationCreateMailingMessageStatusArgs, AutodefinableMailingMessageStatusKeys>>;

export type ReliableMailingMessageStatusCreateUserInput =
  Omit<MutationCreateMailingMessageStatusArgs, ForbidenForUserMailingMessageStatusKeys>
  & AutodefinableMailingMessageStatusPart;

export type AllowedMailingMessageStatusForUserCreateInput = Omit<MutationCreateMailingMessageStatusArgs, ForbidenForUserMailingMessageStatusKeys>;

export type StrictCreateMailingMessageStatusArgs = DefinedFieldsInRecord<MutationCreateMailingMessageStatusArgs, RequiredDbNotUserMailingMessageStatusKeys> & AutodefinableMailingMessageStatusPart;
export type StrictUpdateMailingMessageStatusArgs = DefinedFieldsInRecord<MutationUpdateMailingMessageStatusArgs, RequiredDbNotUserMailingMessageStatusKeys> & AutodefinableMailingMessageStatusPart;

export type StrictCreateMailingMessageStatusArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMailingMessageStatusArgs, AutodefinableMailingMessageStatusKeys>;
export type MutationCreateMailingMessageStatusArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMailingMessageStatusArgs, AutodefinableMailingMessageStatusKeys>;
export type MutationUpdateMailingMessageStatusArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMailingMessageStatusArgs, AutodefinableMailingMessageStatusKeys>;

export class MailingMessageStatusesService extends BaseService<
  MailingMessageStatus,
  MutationCreateMailingMessageStatusArgs,
  MutationUpdateMailingMessageStatusArgs,
  MutationRemoveMailingMessageStatusArgs,
  QueryAllMailingMessageStatusesArgs,
  AutodefinableMailingMessageStatusKeys,
  ForbidenForUserMailingMessageStatusKeys,
  RequiredDbNotUserMailingMessageStatusKeys,
  Prisma.MailingMessageStatusDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.mailingMessageStatus, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
