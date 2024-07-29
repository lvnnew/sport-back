import matchStatusesBasePermissionToGraphql from './basePermissionsToGraphql';
import {MatchStatusesService} from '../../../services/MatchStatusesService/MatchStatusesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const matchStatusesPermissionToGraphql:
  Partial<PermissionToGraphql<MatchStatusesService>> = {
    ...matchStatusesBasePermissionToGraphql,
  };

export default matchStatusesPermissionToGraphql;
