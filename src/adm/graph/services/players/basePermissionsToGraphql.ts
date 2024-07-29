import {PlayersService} from '../../../services/PlayersService/PlayersService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playersBasePermissionToGraphql:
  Partial<PermissionToGraphql<PlayersService>> = {
    meta: '_allPlayersMeta',
    get: 'Player',
    all: 'allPlayers',
    create: 'createPlayer',
    update: 'updatePlayer',
    delete: 'removePlayer',
  };

export default playersBasePermissionToGraphql;
