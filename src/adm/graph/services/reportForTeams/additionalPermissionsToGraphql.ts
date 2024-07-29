import reportForTeamsBasePermissionToGraphql from './basePermissionsToGraphql';
import reportForTeamsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {ReportForTeamsService} from '../../../services/ReportForTeamsService/ReportForTeamsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const reportForTeamsPermissionToGraphql:
  Partial<PermissionToGraphql<ReportForTeamsService>> = {
    ...reportForTeamsBasePermissionToGraphql,
    ...reportForTeamsAdditionalPermissionToGraphql,
  };

export default reportForTeamsPermissionToGraphql;
