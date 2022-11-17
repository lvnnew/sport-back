import {
  StrictUpdateMailingCampaignStatusArgs,
} from '../MailingCampaignStatusesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateMailingCampaignStatusArgs,
): Promise<StrictUpdateMailingCampaignStatusArgs> => data;
