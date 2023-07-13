import managersToRolesBasePermissionToGraphql from './basePermissionsToGraphql';
import managersToRolesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {ManagersToRolesService} from '../../../services/ManagersToRolesService/ManagersToRolesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const managersToRolesPermissionToGraphql:
  Partial<PermissionToGraphql<ManagersToRolesService>> = {
    ...managersToRolesBasePermissionToGraphql,
    ...managersToRolesAdditionalPermissionToGraphql,
  };

export default managersToRolesPermissionToGraphql;
