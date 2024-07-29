import {ReportForParentsService} from '../../../services/ReportForParentsService/ReportForParentsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const reportForParentsBasePermissionToGraphql:
  Partial<PermissionToGraphql<ReportForParentsService>> = {
    meta: '_allReportForParentsMeta',
    get: 'ReportForParent',
    all: 'allReportForParents',
    create: 'createReportForParent',
    update: 'updateReportForParent',
    delete: 'removeReportForParent',
  };

export default reportForParentsBasePermissionToGraphql;
