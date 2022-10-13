import {MailingCampaignsService} from '../../../services/MailingCampaignsService/MailingCampaignsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const mailingCampaignsBasePermissionToGraphql: Partial<PermissionToGraphql<MailingCampaignsService>> = {
  meta: '_allMailingCampaignsMeta',
  get: 'MailingCampaign',
  all: 'allMailingCampaigns',
  create: 'createMailingCampaign',
  update: 'removeMailingCampaign',
  delete: 'updateMailingCampaign',
};

export default mailingCampaignsBasePermissionToGraphql;
