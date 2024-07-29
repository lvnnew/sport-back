import matchRequestsBasePermissionToGraphql from './basePermissionsToGraphql';
import matchRequestsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {MatchRequestsService} from '../../../services/MatchRequestsService/MatchRequestsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const matchRequestsPermissionToGraphql:
  Partial<PermissionToGraphql<MatchRequestsService>> = {
    ...matchRequestsBasePermissionToGraphql,
    ...matchRequestsAdditionalPermissionToGraphql,
  };

export default matchRequestsPermissionToGraphql;
