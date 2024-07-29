import matchesBasePermissionToGraphql from './basePermissionsToGraphql';
import {MatchesService} from '../../../services/MatchesService/MatchesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const matchesPermissionToGraphql:
  Partial<PermissionToGraphql<MatchesService>> = {
    ...matchesBasePermissionToGraphql,
  };

export default matchesPermissionToGraphql;
