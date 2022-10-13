import {Context} from '../../types';
import {
  StrictUpdateMailingCampaignArgs,
  StrictCreateMailingCampaignArgs,
  ReliableMailingCampaignCreateUserInput,
} from '../MailingCampaignsService';

type InputData = {
  createData: ReliableMailingCampaignCreateUserInput,
  updateData: StrictUpdateMailingCampaignArgs,
};
type ReturnData = {
  createData: StrictCreateMailingCampaignArgs,
  updateData: StrictUpdateMailingCampaignArgs,
};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: InputData,
): Promise<ReturnData> => {
  return {
    createData,
    updateData,
  };
};
