import {Context} from '../../types';
import {
  ReliableMailingCampaignCreateUserInput,
  StrictCreateMailingCampaignArgs,
} from '../MailingCampaignsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableMailingCampaignCreateUserInput,
): Promise<StrictCreateMailingCampaignArgs> => data;
