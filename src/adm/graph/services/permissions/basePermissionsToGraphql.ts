import {PermissionsService} from '../../../services/PermissionsService/PermissionsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const permissionsBasePermissionToGraphql: Partial<PermissionToGraphql<PermissionsService>> = {
  meta: '_allPermissionsMeta',
  get: 'Permission',
  all: 'allPermissions',
  create: 'createPermission',
  update: 'updatePermission',
  delete: 'removePermission',
};

export default permissionsBasePermissionToGraphql;
