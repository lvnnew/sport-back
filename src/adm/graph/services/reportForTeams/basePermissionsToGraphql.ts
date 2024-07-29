import {ReportForTeamsService} from '../../../services/ReportForTeamsService/ReportForTeamsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const reportForTeamsBasePermissionToGraphql:
  Partial<PermissionToGraphql<ReportForTeamsService>> = {
    meta: '_allReportForTeamsMeta',
    get: 'ReportForTeam',
    all: 'allReportForTeams',
    create: 'createReportForTeam',
    update: 'updateReportForTeam',
    delete: 'removeReportForTeam',
  };

export default reportForTeamsBasePermissionToGraphql;
