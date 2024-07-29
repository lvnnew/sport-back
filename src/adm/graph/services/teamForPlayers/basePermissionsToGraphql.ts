import {TeamForPlayersService} from '../../../services/TeamForPlayersService/TeamForPlayersService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const teamForPlayersBasePermissionToGraphql:
  Partial<PermissionToGraphql<TeamForPlayersService>> = {
    meta: '_allTeamForPlayersMeta',
    get: 'TeamForPlayer',
    all: 'allTeamForPlayers',
    create: 'createTeamForPlayer',
    update: 'updateTeamForPlayer',
    delete: 'removeTeamForPlayer',
  };

export default teamForPlayersBasePermissionToGraphql;
