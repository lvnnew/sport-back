import {ReportForOrganizationsService} from '../../../services/ReportForOrganizationsService/ReportForOrganizationsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const reportForOrganizationsBasePermissionToGraphql:
  Partial<PermissionToGraphql<ReportForOrganizationsService>> = {
    meta: '_allReportForOrganizationsMeta',
    get: 'ReportForOrganization',
    all: 'allReportForOrganizations',
    create: 'createReportForOrganization',
    update: 'updateReportForOrganization',
    delete: 'removeReportForOrganization',
  };

export default reportForOrganizationsBasePermissionToGraphql;
