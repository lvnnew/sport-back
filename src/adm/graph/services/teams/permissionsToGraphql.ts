import teamsBasePermissionToGraphql from './basePermissionsToGraphql';
import {TeamsService} from '../../../services/TeamsService/TeamsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const teamsPermissionToGraphql:
  Partial<PermissionToGraphql<TeamsService>> = {
    ...teamsBasePermissionToGraphql,
  };

export default teamsPermissionToGraphql;
