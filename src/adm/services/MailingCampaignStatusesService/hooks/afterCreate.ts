/* eslint-disable @typescript-eslint/no-empty-function */
import {
  MailingCampaignStatus,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const afterCreate = async (
  _ctx: Context,
  _data: MailingCampaignStatus,
): Promise<void> => {};
