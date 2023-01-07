import {MailingMessagesService} from './MailingMessagesService';
import {
  QuantityPerStatus,
} from '../../../generated/graphql';
import MailingMessageStatus from '../../../types/MailingMessageStatus';

export class AdditionalMailingMessagesService extends MailingMessagesService {
  getQuantityPerStatus = async (mailingCampaignId: number): Promise<QuantityPerStatus> => {
    const [draft, stopped, pending, sent, cancelled, errored] = await Promise.all([
      this.count({filter: {mailingCampaignId, mailingMessageStatusId: MailingMessageStatus.Draft}}),
      this.count({filter: {mailingCampaignId, mailingMessageStatusId: MailingMessageStatus.Stopped}}),
      this.count({filter: {mailingCampaignId, mailingMessageStatusId: MailingMessageStatus.Pending}}),
      this.count({filter: {mailingCampaignId, mailingMessageStatusId: MailingMessageStatus.Sent}}),
      this.count({filter: {mailingCampaignId, mailingMessageStatusId: MailingMessageStatus.Canceled}}),
      this.count({filter: {mailingCampaignId, mailingMessageStatusId: MailingMessageStatus.Errored}}),
    ]);

    return {
      draft,
      stopped,
      pending,
      sent,
      cancelled,
      errored,
    };
  };
}
