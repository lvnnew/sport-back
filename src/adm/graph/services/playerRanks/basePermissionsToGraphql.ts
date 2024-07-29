import {PlayerRanksService} from '../../../services/PlayerRanksService/PlayerRanksService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerRanksBasePermissionToGraphql:
  Partial<PermissionToGraphql<PlayerRanksService>> = {
    meta: '_allPlayerRanksMeta',
    get: 'PlayerRank',
    all: 'allPlayerRanks',
    create: 'createPlayerRank',
    update: 'updatePlayerRank',
    delete: 'removePlayerRank',
  };

export default playerRanksBasePermissionToGraphql;
