import {PlayerCompetitionRatingsService} from '../../../services/PlayerCompetitionRatingsService/PlayerCompetitionRatingsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerCompetitionRatingsBasePermissionToGraphql:
  Partial<PermissionToGraphql<PlayerCompetitionRatingsService>> = {
    meta: '_allPlayerCompetitionRatingsMeta',
    get: 'PlayerCompetitionRating',
    all: 'allPlayerCompetitionRatings',
    create: 'createPlayerCompetitionRating',
    update: 'updatePlayerCompetitionRating',
    delete: 'removePlayerCompetitionRating',
  };

export default playerCompetitionRatingsBasePermissionToGraphql;
