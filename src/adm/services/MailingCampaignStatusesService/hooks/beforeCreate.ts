import {Context} from '../../types';
import {
  ReliableMailingCampaignStatusCreateUserInput,
  StrictCreateMailingCampaignStatusArgs,
} from '../MailingCampaignStatusesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableMailingCampaignStatusCreateUserInput,
): Promise<StrictCreateMailingCampaignStatusArgs> => data;
