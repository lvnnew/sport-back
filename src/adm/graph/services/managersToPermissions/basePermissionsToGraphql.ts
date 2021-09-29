import {ManagersToPermissionsService} from '../../../services/ManagersToPermissionsService/ManagersToPermissionsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const managersToPermissionsBasePermissionToGraphql: Partial<PermissionToGraphql<ManagersToPermissionsService>> = {
  meta: '_allManagersToPermissionsMeta',
  get: 'ManagersToPermission',
  all: 'allManagersToPermissions',
  create: 'createManagersToPermission',
  update: 'removeManagersToPermission',
  delete: 'updateManagersToPermission',
};

export default managersToPermissionsBasePermissionToGraphql;
