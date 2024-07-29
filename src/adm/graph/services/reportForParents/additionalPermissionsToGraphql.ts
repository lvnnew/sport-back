import reportForParentsBasePermissionToGraphql from './basePermissionsToGraphql';
import reportForParentsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {ReportForParentsService} from '../../../services/ReportForParentsService/ReportForParentsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const reportForParentsPermissionToGraphql:
  Partial<PermissionToGraphql<ReportForParentsService>> = {
    ...reportForParentsBasePermissionToGraphql,
    ...reportForParentsAdditionalPermissionToGraphql,
  };

export default reportForParentsPermissionToGraphql;
