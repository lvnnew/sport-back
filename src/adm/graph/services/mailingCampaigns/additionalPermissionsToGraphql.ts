import mailingCampaignsBasePermissionToGraphql from './basePermissionsToGraphql';
import mailingCampaignsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {MailingCampaignsService} from '../../../services/MailingCampaignsService/MailingCampaignsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const mailingCampaignsPermissionToGraphql: Partial<PermissionToGraphql<MailingCampaignsService>> = {
  ...mailingCampaignsBasePermissionToGraphql,
  ...mailingCampaignsAdditionalPermissionToGraphql,
};

export default mailingCampaignsPermissionToGraphql;
