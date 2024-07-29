import playerRolesBasePermissionToGraphql from './basePermissionsToGraphql';
import {PlayerRolesService} from '../../../services/PlayerRolesService/PlayerRolesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerRolesPermissionToGraphql:
  Partial<PermissionToGraphql<PlayerRolesService>> = {
    ...playerRolesBasePermissionToGraphql,
  };

export default playerRolesPermissionToGraphql;
