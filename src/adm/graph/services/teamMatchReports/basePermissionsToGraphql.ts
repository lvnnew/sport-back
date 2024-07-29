import {TeamMatchReportsService} from '../../../services/TeamMatchReportsService/TeamMatchReportsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const teamMatchReportsBasePermissionToGraphql:
  Partial<PermissionToGraphql<TeamMatchReportsService>> = {
    meta: '_allTeamMatchReportsMeta',
    get: 'TeamMatchReport',
    all: 'allTeamMatchReports',
    create: 'createTeamMatchReport',
    update: 'updateTeamMatchReport',
    delete: 'removeTeamMatchReport',
  };

export default teamMatchReportsBasePermissionToGraphql;
