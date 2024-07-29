import teamMatchReportsBasePermissionToGraphql from './basePermissionsToGraphql';
import {TeamMatchReportsService} from '../../../services/TeamMatchReportsService/TeamMatchReportsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const teamMatchReportsPermissionToGraphql:
  Partial<PermissionToGraphql<TeamMatchReportsService>> = {
    ...teamMatchReportsBasePermissionToGraphql,
  };

export default teamMatchReportsPermissionToGraphql;
