import teamsBasePermissionToGraphql from './basePermissionsToGraphql';
import teamsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {TeamsService} from '../../../services/TeamsService/TeamsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const teamsPermissionToGraphql:
  Partial<PermissionToGraphql<TeamsService>> = {
    ...teamsBasePermissionToGraphql,
    ...teamsAdditionalPermissionToGraphql,
  };

export default teamsPermissionToGraphql;
