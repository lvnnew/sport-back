import reportForClubsBasePermissionToGraphql from './basePermissionsToGraphql';
import reportForClubsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {ReportForClubsService} from '../../../services/ReportForClubsService/ReportForClubsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const reportForClubsPermissionToGraphql:
  Partial<PermissionToGraphql<ReportForClubsService>> = {
    ...reportForClubsBasePermissionToGraphql,
    ...reportForClubsAdditionalPermissionToGraphql,
  };

export default reportForClubsPermissionToGraphql;
