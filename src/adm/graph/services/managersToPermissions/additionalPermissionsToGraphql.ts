import managersToPermissionsBasePermissionToGraphql from './basePermissionsToGraphql';
import managersToPermissionsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {ManagersToPermissionsService} from '../../../services/ManagersToPermissionsService/ManagersToPermissionsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const managersToPermissionsPermissionToGraphql: Partial<PermissionToGraphql<ManagersToPermissionsService>> = {
  ...managersToPermissionsBasePermissionToGraphql,
  ...managersToPermissionsAdditionalPermissionToGraphql,
};

export default managersToPermissionsPermissionToGraphql;
