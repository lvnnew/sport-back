import playerForMatchRequestsBasePermissionToGraphql from './basePermissionsToGraphql';
import playerForMatchRequestsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {PlayerForMatchRequestsService} from '../../../services/PlayerForMatchRequestsService/PlayerForMatchRequestsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerForMatchRequestsPermissionToGraphql:
  Partial<PermissionToGraphql<PlayerForMatchRequestsService>> = {
    ...playerForMatchRequestsBasePermissionToGraphql,
    ...playerForMatchRequestsAdditionalPermissionToGraphql,
  };

export default playerForMatchRequestsPermissionToGraphql;
