import {PlayerForTeamMatchListsService} from '../../../services/PlayerForTeamMatchListsService/PlayerForTeamMatchListsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerForTeamMatchListsBasePermissionToGraphql:
  Partial<PermissionToGraphql<PlayerForTeamMatchListsService>> = {
    meta: '_allPlayerForTeamMatchListsMeta',
    get: 'PlayerForTeamMatchList',
    all: 'allPlayerForTeamMatchLists',
    create: 'createPlayerForTeamMatchList',
    update: 'updatePlayerForTeamMatchList',
    delete: 'removePlayerForTeamMatchList',
  };

export default playerForTeamMatchListsBasePermissionToGraphql;
