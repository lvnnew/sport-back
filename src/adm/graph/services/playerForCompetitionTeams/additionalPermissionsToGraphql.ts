import playerForCompetitionTeamsBasePermissionToGraphql from './basePermissionsToGraphql';
import playerForCompetitionTeamsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {PlayerForCompetitionTeamsService} from '../../../services/PlayerForCompetitionTeamsService/PlayerForCompetitionTeamsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerForCompetitionTeamsPermissionToGraphql:
  Partial<PermissionToGraphql<PlayerForCompetitionTeamsService>> = {
    ...playerForCompetitionTeamsBasePermissionToGraphql,
    ...playerForCompetitionTeamsAdditionalPermissionToGraphql,
  };

export default playerForCompetitionTeamsPermissionToGraphql;
