import {TeamsService} from '../../../services/TeamsService/TeamsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const teamsBasePermissionToGraphql:
  Partial<PermissionToGraphql<TeamsService>> = {
    meta: '_allTeamsMeta',
    get: 'Team',
    all: 'allTeams',
    create: 'createTeam',
    update: 'updateTeam',
    delete: 'removeTeam',
  };

export default teamsBasePermissionToGraphql;
