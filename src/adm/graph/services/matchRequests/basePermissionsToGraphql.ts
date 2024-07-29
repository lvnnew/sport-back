import {MatchRequestsService} from '../../../services/MatchRequestsService/MatchRequestsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const matchRequestsBasePermissionToGraphql:
  Partial<PermissionToGraphql<MatchRequestsService>> = {
    meta: '_allMatchRequestsMeta',
    get: 'MatchRequest',
    all: 'allMatchRequests',
    create: 'createMatchRequest',
    update: 'updateMatchRequest',
    delete: 'removeMatchRequest',
  };

export default matchRequestsBasePermissionToGraphql;
