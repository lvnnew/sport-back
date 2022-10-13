import {
  StrictUpdateMailingCampaignArgs,
} from '../MailingCampaignsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateMailingCampaignArgs,
): Promise<StrictUpdateMailingCampaignArgs> => data;
