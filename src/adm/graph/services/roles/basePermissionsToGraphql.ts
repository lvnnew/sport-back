import {RolesService} from '../../../services/RolesService/RolesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const rolesBasePermissionToGraphql:
  Partial<PermissionToGraphql<RolesService>> = {
    meta: '_allRolesMeta',
    get: 'Role',
    all: 'allRoles',
    create: 'createRole',
    update: 'updateRole',
    delete: 'removeRole',
  };

export default rolesBasePermissionToGraphql;
