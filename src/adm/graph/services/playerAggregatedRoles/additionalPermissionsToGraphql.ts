import playerAggregatedRolesBasePermissionToGraphql from './basePermissionsToGraphql';
import playerAggregatedRolesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {PlayerAggregatedRolesService} from '../../../services/PlayerAggregatedRolesService/PlayerAggregatedRolesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerAggregatedRolesPermissionToGraphql:
  Partial<PermissionToGraphql<PlayerAggregatedRolesService>> = {
    ...playerAggregatedRolesBasePermissionToGraphql,
    ...playerAggregatedRolesAdditionalPermissionToGraphql,
  };

export default playerAggregatedRolesPermissionToGraphql;
