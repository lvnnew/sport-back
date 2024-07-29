import playerRanksBasePermissionToGraphql from './basePermissionsToGraphql';
import playerRanksAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {PlayerRanksService} from '../../../services/PlayerRanksService/PlayerRanksService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerRanksPermissionToGraphql:
  Partial<PermissionToGraphql<PlayerRanksService>> = {
    ...playerRanksBasePermissionToGraphql,
    ...playerRanksAdditionalPermissionToGraphql,
  };

export default playerRanksPermissionToGraphql;
