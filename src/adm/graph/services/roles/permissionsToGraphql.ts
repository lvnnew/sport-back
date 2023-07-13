import rolesBasePermissionToGraphql from './basePermissionsToGraphql';
import {RolesService} from '../../../services/RolesService/RolesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const rolesPermissionToGraphql:
  Partial<PermissionToGraphql<RolesService>> = {
    ...rolesBasePermissionToGraphql,
  };

export default rolesPermissionToGraphql;
