import {MailingCampaignsService} from '../../../services/MailingCampaignsService/MailingCampaignsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const mailingCampaignsBasePermissionToGraphql: Partial<PermissionToGraphql<MailingCampaignsService>> = {
  meta: '_allMailingCampaignsMeta',
  get: 'MailingCampaign',
  all: 'allMailingCampaigns',
  create: 'createMailingCampaign',
  update: 'updateMailingCampaign',
  delete: 'removeMailingCampaign',
};

export default mailingCampaignsBasePermissionToGraphql;
