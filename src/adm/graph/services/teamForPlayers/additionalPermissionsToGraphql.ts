import teamForPlayersBasePermissionToGraphql from './basePermissionsToGraphql';
import teamForPlayersAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {TeamForPlayersService} from '../../../services/TeamForPlayersService/TeamForPlayersService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const teamForPlayersPermissionToGraphql:
  Partial<PermissionToGraphql<TeamForPlayersService>> = {
    ...teamForPlayersBasePermissionToGraphql,
    ...teamForPlayersAdditionalPermissionToGraphql,
  };

export default teamForPlayersPermissionToGraphql;
