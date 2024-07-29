import playerForTeamMatchListsBasePermissionToGraphql from './basePermissionsToGraphql';
import playerForTeamMatchListsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {PlayerForTeamMatchListsService} from '../../../services/PlayerForTeamMatchListsService/PlayerForTeamMatchListsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const playerForTeamMatchListsPermissionToGraphql:
  Partial<PermissionToGraphql<PlayerForTeamMatchListsService>> = {
    ...playerForTeamMatchListsBasePermissionToGraphql,
    ...playerForTeamMatchListsAdditionalPermissionToGraphql,
  };

export default playerForTeamMatchListsPermissionToGraphql;
