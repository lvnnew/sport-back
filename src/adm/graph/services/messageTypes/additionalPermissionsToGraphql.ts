import messageTypesBasePermissionToGraphql from './basePermissionsToGraphql';
import messageTypesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {MessageTypesService} from '../../../services/MessageTypesService/MessageTypesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const messageTypesPermissionToGraphql:
  Partial<PermissionToGraphql<MessageTypesService>> = {
    ...messageTypesBasePermissionToGraphql,
    ...messageTypesAdditionalPermissionToGraphql,
  };

export default messageTypesPermissionToGraphql;
