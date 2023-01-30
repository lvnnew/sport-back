import {Context} from '../../adm/services/types';
import MailingCampaignStatus from '../../types/MailingCampaignStatus';

// DO NOT EDIT! THIS IS GENERATED FILE

const initMailingCampaignStatuses = async (ctx: Context) => {
  await ctx.service('mailingCampaignStatuses').createMany([
    {
      id: MailingCampaignStatus.Draft,
      title: 'Draft',
    },
    {
      id: MailingCampaignStatus.Preparing,
      title: 'Preparing',
    },
    {
      id: MailingCampaignStatus.Sending,
      title: 'Sending',
    },
    {
      id: MailingCampaignStatus.Finished,
      title: 'Finished',
    },
  ]);
};

export default initMailingCampaignStatuses;
