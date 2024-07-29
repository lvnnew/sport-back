import {PlayerMatchRatingsService} from '../../../services/PlayerMatchRatingsService/PlayerMatchRatingsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerMatchRatingsBasePermissionToGraphql:
  Partial<PermissionToGraphql<PlayerMatchRatingsService>> = {
    meta: '_allPlayerMatchRatingsMeta',
    get: 'PlayerMatchRating',
    all: 'allPlayerMatchRatings',
    create: 'createPlayerMatchRating',
    update: 'updatePlayerMatchRating',
    delete: 'removePlayerMatchRating',
  };

export default playerMatchRatingsBasePermissionToGraphql;
