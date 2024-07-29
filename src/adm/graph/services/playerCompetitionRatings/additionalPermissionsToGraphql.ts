import playerCompetitionRatingsBasePermissionToGraphql from './basePermissionsToGraphql';
import playerCompetitionRatingsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {PlayerCompetitionRatingsService} from '../../../services/PlayerCompetitionRatingsService/PlayerCompetitionRatingsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerCompetitionRatingsPermissionToGraphql:
  Partial<PermissionToGraphql<PlayerCompetitionRatingsService>> = {
    ...playerCompetitionRatingsBasePermissionToGraphql,
    ...playerCompetitionRatingsAdditionalPermissionToGraphql,
  };

export default playerCompetitionRatingsPermissionToGraphql;
