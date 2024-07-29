import {PlayerRolesService} from '../../../services/PlayerRolesService/PlayerRolesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerRolesBasePermissionToGraphql:
  Partial<PermissionToGraphql<PlayerRolesService>> = {
    meta: '_allPlayerRolesMeta',
    get: 'PlayerRole',
    all: 'allPlayerRoles',
    create: 'createPlayerRole',
    update: 'updatePlayerRole',
    delete: 'removePlayerRole',
  };

export default playerRolesBasePermissionToGraphql;
