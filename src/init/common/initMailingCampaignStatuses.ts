import {Context} from '../../adm/services/types';
import MailingCampaignStatus from '../../types/MailingCampaignStatus';

// DO NOT EDIT! THIS IS GENERATED FILE

const initMailingCampaignStatuses = async (ctx: Context) => {
  await ctx.service('mailingCampaignStatuses').upsert({
    id: MailingCampaignStatus.Draft,
    title: 'Draft',
  });
  await ctx.service('mailingCampaignStatuses').upsert({
    id: MailingCampaignStatus.Preparing,
    title: 'Preparing',
  });
  await ctx.service('mailingCampaignStatuses').upsert({
    id: MailingCampaignStatus.Sending,
    title: 'Sending',
  });
  await ctx.service('mailingCampaignStatuses').upsert({
    id: MailingCampaignStatus.Finished,
    title: 'Finished',
  });
};

export default initMailingCampaignStatuses;
