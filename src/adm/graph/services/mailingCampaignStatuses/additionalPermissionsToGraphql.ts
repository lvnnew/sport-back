import mailingCampaignStatusesBasePermissionToGraphql from './basePermissionsToGraphql';
import mailingCampaignStatusesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {MailingCampaignStatusesService} from '../../../services/MailingCampaignStatusesService/MailingCampaignStatusesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const mailingCampaignStatusesPermissionToGraphql:
  Partial<PermissionToGraphql<MailingCampaignStatusesService>> = {
    ...mailingCampaignStatusesBasePermissionToGraphql,
    ...mailingCampaignStatusesAdditionalPermissionToGraphql,
  };

export default mailingCampaignStatusesPermissionToGraphql;
