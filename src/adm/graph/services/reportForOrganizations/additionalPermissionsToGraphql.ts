import reportForOrganizationsBasePermissionToGraphql from './basePermissionsToGraphql';
import reportForOrganizationsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {ReportForOrganizationsService} from '../../../services/ReportForOrganizationsService/ReportForOrganizationsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const reportForOrganizationsPermissionToGraphql:
  Partial<PermissionToGraphql<ReportForOrganizationsService>> = {
    ...reportForOrganizationsBasePermissionToGraphql,
    ...reportForOrganizationsAdditionalPermissionToGraphql,
  };

export default reportForOrganizationsPermissionToGraphql;
