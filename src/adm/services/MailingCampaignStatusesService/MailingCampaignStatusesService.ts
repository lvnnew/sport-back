import {
  MutationCreateMailingCampaignStatusArgs,
  MutationUpdateMailingCampaignStatusArgs,
  MutationRemoveMailingCampaignStatusArgs,
  QueryAllMailingCampaignStatusesArgs,
  MailingCampaignStatus,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableMailingCampaignStatusKeys = never;
export type ForbidenForUserMailingCampaignStatusKeys = never;
export type RequiredDbNotUserMailingCampaignStatusKeys = never;

export type AutodefinableMailingCampaignStatusPart = DefinedRecord<Pick<MutationCreateMailingCampaignStatusArgs, AutodefinableMailingCampaignStatusKeys>>;

export type ReliableMailingCampaignStatusCreateUserInput =
  Omit<MutationCreateMailingCampaignStatusArgs, ForbidenForUserMailingCampaignStatusKeys>
  & AutodefinableMailingCampaignStatusPart;

export type AllowedMailingCampaignStatusForUserCreateInput = Omit<MutationCreateMailingCampaignStatusArgs, ForbidenForUserMailingCampaignStatusKeys>;

export type StrictCreateMailingCampaignStatusArgs = DefinedFieldsInRecord<MutationCreateMailingCampaignStatusArgs, RequiredDbNotUserMailingCampaignStatusKeys> & AutodefinableMailingCampaignStatusPart;
export type StrictUpdateMailingCampaignStatusArgs = DefinedFieldsInRecord<MutationUpdateMailingCampaignStatusArgs, RequiredDbNotUserMailingCampaignStatusKeys> & AutodefinableMailingCampaignStatusPart;

export type StrictCreateMailingCampaignStatusArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMailingCampaignStatusArgs, AutodefinableMailingCampaignStatusKeys>;
export type MutationCreateMailingCampaignStatusArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMailingCampaignStatusArgs, AutodefinableMailingCampaignStatusKeys>;
export type MutationUpdateMailingCampaignStatusArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMailingCampaignStatusArgs, AutodefinableMailingCampaignStatusKeys>;

export class MailingCampaignStatusesService extends BaseService<
  MailingCampaignStatus,
  MutationCreateMailingCampaignStatusArgs,
  MutationUpdateMailingCampaignStatusArgs,
  MutationRemoveMailingCampaignStatusArgs,
  QueryAllMailingCampaignStatusesArgs,
  AutodefinableMailingCampaignStatusKeys,
  ForbidenForUserMailingCampaignStatusKeys,
  RequiredDbNotUserMailingCampaignStatusKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.mailingCampaignStatus, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }

  augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableMailingCampaignStatusPart> => currentData as T & AutodefinableMailingCampaignStatusPart;
}
