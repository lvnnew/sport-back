import {
  MutationCreateMailingCampaignArgs,
  MutationUpdateMailingCampaignArgs,
  MutationRemoveMailingCampaignArgs,
  QueryAllMailingCampaignsArgs,
  MailingCampaign,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableMailingCampaignKeys = never;
export type ForbidenForUserMailingCampaignKeys = never;
export type RequiredDbNotUserMailingCampaignKeys = never;

export type AutodefinableMailingCampaignPart = DefinedRecord<Pick<MutationCreateMailingCampaignArgs, AutodefinableMailingCampaignKeys>>;

export type ReliableMailingCampaignCreateUserInput =
  Omit<MutationCreateMailingCampaignArgs, ForbidenForUserMailingCampaignKeys>
  & AutodefinableMailingCampaignPart;

export type AllowedMailingCampaignForUserCreateInput = Omit<MutationCreateMailingCampaignArgs, ForbidenForUserMailingCampaignKeys>;

export type StrictCreateMailingCampaignArgs = DefinedFieldsInRecord<MutationCreateMailingCampaignArgs, RequiredDbNotUserMailingCampaignKeys> & AutodefinableMailingCampaignPart;
export type StrictUpdateMailingCampaignArgs = DefinedFieldsInRecord<MutationUpdateMailingCampaignArgs, RequiredDbNotUserMailingCampaignKeys> & AutodefinableMailingCampaignPart;

export type StrictCreateMailingCampaignArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMailingCampaignArgs, AutodefinableMailingCampaignKeys>;
export type MutationCreateMailingCampaignArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMailingCampaignArgs, AutodefinableMailingCampaignKeys>;
export type MutationUpdateMailingCampaignArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMailingCampaignArgs, AutodefinableMailingCampaignKeys>;

export class MailingCampaignsService extends BaseService<
  MailingCampaign,
  MutationCreateMailingCampaignArgs,
  MutationUpdateMailingCampaignArgs,
  MutationRemoveMailingCampaignArgs,
  QueryAllMailingCampaignsArgs,
  AutodefinableMailingCampaignKeys,
  ForbidenForUserMailingCampaignKeys,
  RequiredDbNotUserMailingCampaignKeys,
  Prisma.MailingCampaignDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.mailingCampaign, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
