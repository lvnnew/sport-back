import playerMatchRatingsBasePermissionToGraphql from './basePermissionsToGraphql';
import {PlayerMatchRatingsService} from '../../../services/PlayerMatchRatingsService/PlayerMatchRatingsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerMatchRatingsPermissionToGraphql:
  Partial<PermissionToGraphql<PlayerMatchRatingsService>> = {
    ...playerMatchRatingsBasePermissionToGraphql,
  };

export default playerMatchRatingsPermissionToGraphql;
