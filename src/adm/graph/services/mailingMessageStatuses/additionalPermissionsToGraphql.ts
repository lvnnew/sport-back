import mailingMessageStatusesBasePermissionToGraphql from './basePermissionsToGraphql';
import mailingMessageStatusesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {MailingMessageStatusesService} from '../../../services/MailingMessageStatusesService/MailingMessageStatusesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const mailingMessageStatusesPermissionToGraphql:
  Partial<PermissionToGraphql<MailingMessageStatusesService>> = {
    ...mailingMessageStatusesBasePermissionToGraphql,
    ...mailingMessageStatusesAdditionalPermissionToGraphql,
  };

export default mailingMessageStatusesPermissionToGraphql;
