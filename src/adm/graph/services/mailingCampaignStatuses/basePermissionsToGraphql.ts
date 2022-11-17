import {MailingCampaignStatusesService} from '../../../services/MailingCampaignStatusesService/MailingCampaignStatusesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const mailingCampaignStatusesBasePermissionToGraphql: Partial<PermissionToGraphql<MailingCampaignStatusesService>> = {
  meta: '_allMailingCampaignStatusesMeta',
  get: 'MailingCampaignStatus',
  all: 'allMailingCampaignStatuses',
  create: 'createMailingCampaignStatus',
  update: 'removeMailingCampaignStatus',
  delete: 'updateMailingCampaignStatus',
};

export default mailingCampaignStatusesBasePermissionToGraphql;
