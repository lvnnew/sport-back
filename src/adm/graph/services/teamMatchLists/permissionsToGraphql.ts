import teamMatchListsBasePermissionToGraphql from './basePermissionsToGraphql';
import {TeamMatchListsService} from '../../../services/TeamMatchListsService/TeamMatchListsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const teamMatchListsPermissionToGraphql:
  Partial<PermissionToGraphql<TeamMatchListsService>> = {
    ...teamMatchListsBasePermissionToGraphql,
  };

export default teamMatchListsPermissionToGraphql;
