/* eslint-disable sort-keys-fix/sort-keys-fix */
import {PermissionsService} from '../../../services/PermissionsService/PermissionsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const permissionsBasePermissionToGraphql: Partial<PermissionToGraphql<PermissionsService>> = {
  meta: '_allPermissionsMeta',
  get: 'Permission',
  all: 'allPermissions',
  create: 'createPermission',
  update: 'removePermission',
  delete: 'updatePermission',
};

export default permissionsBasePermissionToGraphql;
