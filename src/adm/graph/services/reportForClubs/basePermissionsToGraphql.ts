import {ReportForClubsService} from '../../../services/ReportForClubsService/ReportForClubsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const reportForClubsBasePermissionToGraphql:
  Partial<PermissionToGraphql<ReportForClubsService>> = {
    meta: '_allReportForClubsMeta',
    get: 'ReportForClub',
    all: 'allReportForClubs',
    create: 'createReportForClub',
    update: 'updateReportForClub',
    delete: 'removeReportForClub',
  };

export default reportForClubsBasePermissionToGraphql;
