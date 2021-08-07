/* eslint-disable sort-keys-fix/sort-keys-fix */
import {RolesToPermissionsService} from '../../../services/RolesToPermissionsService/RolesToPermissionsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const rolesToPermissionsBasePermissionToGraphql: Partial<PermissionToGraphql<RolesToPermissionsService>> = {
  meta: '_allRolesToPermissionsMeta',
  get: 'RolesToPermission',
  all: 'allRolesToPermissions',
  create: 'createRolesToPermission',
  update: 'removeRolesToPermission',
  delete: 'updateRolesToPermission',
};

export default rolesToPermissionsBasePermissionToGraphql;
