import {TeamMatchListsService} from '../../../services/TeamMatchListsService/TeamMatchListsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const teamMatchListsBasePermissionToGraphql:
  Partial<PermissionToGraphql<TeamMatchListsService>> = {
    meta: '_allTeamMatchListsMeta',
    get: 'TeamMatchList',
    all: 'allTeamMatchLists',
    create: 'createTeamMatchList',
    update: 'updateTeamMatchList',
    delete: 'removeTeamMatchList',
  };

export default teamMatchListsBasePermissionToGraphql;
