import {PlayerForMatchRequestsService} from '../../../services/PlayerForMatchRequestsService/PlayerForMatchRequestsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerForMatchRequestsBasePermissionToGraphql:
  Partial<PermissionToGraphql<PlayerForMatchRequestsService>> = {
    meta: '_allPlayerForMatchRequestsMeta',
    get: 'PlayerForMatchRequest',
    all: 'allPlayerForMatchRequests',
    create: 'createPlayerForMatchRequest',
    update: 'updatePlayerForMatchRequest',
    delete: 'removePlayerForMatchRequest',
  };

export default playerForMatchRequestsBasePermissionToGraphql;
