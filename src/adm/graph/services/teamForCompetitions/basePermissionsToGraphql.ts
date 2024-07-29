import {TeamForCompetitionsService} from '../../../services/TeamForCompetitionsService/TeamForCompetitionsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const teamForCompetitionsBasePermissionToGraphql:
  Partial<PermissionToGraphql<TeamForCompetitionsService>> = {
    meta: '_allTeamForCompetitionsMeta',
    get: 'TeamForCompetition',
    all: 'allTeamForCompetitions',
    create: 'createTeamForCompetition',
    update: 'updateTeamForCompetition',
    delete: 'removeTeamForCompetition',
  };

export default teamForCompetitionsBasePermissionToGraphql;
