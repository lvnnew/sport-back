import {MailingCampaignStatusesService} from '../../../services/MailingCampaignStatusesService/MailingCampaignStatusesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const mailingCampaignStatusesBasePermissionToGraphql: Partial<PermissionToGraphql<MailingCampaignStatusesService>> = {
  meta: '_allMailingCampaignStatusesMeta',
  get: 'MailingCampaignStatus',
  all: 'allMailingCampaignStatuses',
  create: 'createMailingCampaignStatus',
  update: 'updateMailingCampaignStatus',
  delete: 'removeMailingCampaignStatus',
};

export default mailingCampaignStatusesBasePermissionToGraphql;
