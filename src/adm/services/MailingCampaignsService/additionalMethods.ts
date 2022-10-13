import {Context} from '../types';
import {BaseMailingCampaignsMethods} from './MailingCampaignsService';

export interface AdditionalMailingCampaignsMethods {}

export const getAdditionalMethods = (_ctx: Context, _baseMethods: BaseMailingCampaignsMethods): AdditionalMailingCampaignsMethods => ({});
