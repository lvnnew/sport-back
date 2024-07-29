import {PlayerForCompetitionTeamsService} from '../../../services/PlayerForCompetitionTeamsService/PlayerForCompetitionTeamsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerForCompetitionTeamsBasePermissionToGraphql:
  Partial<PermissionToGraphql<PlayerForCompetitionTeamsService>> = {
    meta: '_allPlayerForCompetitionTeamsMeta',
    get: 'PlayerForCompetitionTeam',
    all: 'allPlayerForCompetitionTeams',
    create: 'createPlayerForCompetitionTeam',
    update: 'updatePlayerForCompetitionTeam',
    delete: 'removePlayerForCompetitionTeam',
  };

export default playerForCompetitionTeamsBasePermissionToGraphql;
