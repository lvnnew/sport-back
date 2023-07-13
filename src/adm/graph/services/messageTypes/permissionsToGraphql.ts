import messageTypesBasePermissionToGraphql from './basePermissionsToGraphql';
import {MessageTypesService} from '../../../services/MessageTypesService/MessageTypesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const messageTypesPermissionToGraphql:
  Partial<PermissionToGraphql<MessageTypesService>> = {
    ...messageTypesBasePermissionToGraphql,
  };

export default messageTypesPermissionToGraphql;
