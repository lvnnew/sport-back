import mailingTypesBasePermissionToGraphql from './basePermissionsToGraphql';
import mailingTypesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {MailingTypesService} from '../../../services/MailingTypesService/MailingTypesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const mailingTypesPermissionToGraphql:
  Partial<PermissionToGraphql<MailingTypesService>> = {
    ...mailingTypesBasePermissionToGraphql,
    ...mailingTypesAdditionalPermissionToGraphql,
  };

export default mailingTypesPermissionToGraphql;
