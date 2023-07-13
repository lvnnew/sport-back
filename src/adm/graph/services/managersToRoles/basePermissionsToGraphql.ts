import {ManagersToRolesService} from '../../../services/ManagersToRolesService/ManagersToRolesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const managersToRolesBasePermissionToGraphql:
  Partial<PermissionToGraphql<ManagersToRolesService>> = {
    meta: '_allManagersToRolesMeta',
    get: 'ManagersToRole',
    all: 'allManagersToRoles',
    create: 'createManagersToRole',
    update: 'updateManagersToRole',
    delete: 'removeManagersToRole',
  };

export default managersToRolesBasePermissionToGraphql;
