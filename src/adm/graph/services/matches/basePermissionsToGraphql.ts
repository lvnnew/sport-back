import {MatchesService} from '../../../services/MatchesService/MatchesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const matchesBasePermissionToGraphql:
  Partial<PermissionToGraphql<MatchesService>> = {
    meta: '_allMatchesMeta',
    get: 'Match',
    all: 'allMatches',
    create: 'createMatch',
    update: 'updateMatch',
    delete: 'removeMatch',
  };

export default matchesBasePermissionToGraphql;
