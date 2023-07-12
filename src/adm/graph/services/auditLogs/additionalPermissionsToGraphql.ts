import auditLogsBasePermissionToGraphql from './basePermissionsToGraphql';
import auditLogsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {AuditLogsService} from '../../../services/AuditLogsService/AuditLogsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const auditLogsPermissionToGraphql:
  Partial<PermissionToGraphql<AuditLogsService>> = {
    ...auditLogsBasePermissionToGraphql,
    ...auditLogsAdditionalPermissionToGraphql,
  };

export default auditLogsPermissionToGraphql;
