import messageTemplatesBasePermissionToGraphql from './basePermissionsToGraphql';
import messageTemplatesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {MessageTemplatesService} from '../../../services/MessageTemplatesService/MessageTemplatesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const messageTemplatesPermissionToGraphql:
  Partial<PermissionToGraphql<MessageTemplatesService>> = {
    ...messageTemplatesBasePermissionToGraphql,
    ...messageTemplatesAdditionalPermissionToGraphql,
  };

export default messageTemplatesPermissionToGraphql;
