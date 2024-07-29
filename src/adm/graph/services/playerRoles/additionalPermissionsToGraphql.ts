import playerRolesBasePermissionToGraphql from './basePermissionsToGraphql';
import playerRolesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {PlayerRolesService} from '../../../services/PlayerRolesService/PlayerRolesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerRolesPermissionToGraphql:
  Partial<PermissionToGraphql<PlayerRolesService>> = {
    ...playerRolesBasePermissionToGraphql,
    ...playerRolesAdditionalPermissionToGraphql,
  };

export default playerRolesPermissionToGraphql;
