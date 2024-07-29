import {MatchStatusesService} from '../../../services/MatchStatusesService/MatchStatusesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const matchStatusesBasePermissionToGraphql:
  Partial<PermissionToGraphql<MatchStatusesService>> = {
    meta: '_allMatchStatusesMeta',
    get: 'MatchStatus',
    all: 'allMatchStatuses',
    create: 'createMatchStatus',
    update: 'updateMatchStatus',
    delete: 'removeMatchStatus',
  };

export default matchStatusesBasePermissionToGraphql;
