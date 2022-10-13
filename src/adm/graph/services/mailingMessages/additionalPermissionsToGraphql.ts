import mailingMessagesBasePermissionToGraphql from './basePermissionsToGraphql';
import mailingMessagesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {MailingMessagesService} from '../../../services/MailingMessagesService/MailingMessagesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const mailingMessagesPermissionToGraphql: Partial<PermissionToGraphql<MailingMessagesService>> = {
  ...mailingMessagesBasePermissionToGraphql,
  ...mailingMessagesAdditionalPermissionToGraphql,
};

export default mailingMessagesPermissionToGraphql;
