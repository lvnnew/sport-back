import playersBasePermissionToGraphql from './basePermissionsToGraphql';
import {PlayersService} from '../../../services/PlayersService/PlayersService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playersPermissionToGraphql:
  Partial<PermissionToGraphql<PlayersService>> = {
    ...playersBasePermissionToGraphql,
  };

export default playersPermissionToGraphql;
