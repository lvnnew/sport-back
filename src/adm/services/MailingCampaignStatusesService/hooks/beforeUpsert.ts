import {Context} from '../../types';
import {
  StrictUpdateMailingCampaignStatusArgs,
  StrictCreateMailingCampaignStatusArgs,
  ReliableMailingCampaignStatusCreateUserInput,
} from '../MailingCampaignStatusesService';

type InputData = {
  createData: ReliableMailingCampaignStatusCreateUserInput,
  updateData: StrictUpdateMailingCampaignStatusArgs,
};
type ReturnData = {
  createData: StrictCreateMailingCampaignStatusArgs,
  updateData: StrictUpdateMailingCampaignStatusArgs,
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
