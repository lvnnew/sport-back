import {PlayerAggregatedRolesService} from '../../../services/PlayerAggregatedRolesService/PlayerAggregatedRolesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerAggregatedRolesBasePermissionToGraphql:
  Partial<PermissionToGraphql<PlayerAggregatedRolesService>> = {
    meta: '_allPlayerAggregatedRolesMeta',
    get: 'PlayerAggregatedRole',
    all: 'allPlayerAggregatedRoles',
    create: 'createPlayerAggregatedRole',
    update: 'updatePlayerAggregatedRole',
    delete: 'removePlayerAggregatedRole',
  };

export default playerAggregatedRolesBasePermissionToGraphql;
