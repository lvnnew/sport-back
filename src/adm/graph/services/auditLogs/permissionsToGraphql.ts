import auditLogsBasePermissionToGraphql from './basePermissionsToGraphql';
import {AuditLogsService} from '../../../services/AuditLogsService/AuditLogsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const auditLogsPermissionToGraphql: Partial<PermissionToGraphql<AuditLogsService>> = {
  ...auditLogsBasePermissionToGraphql,
};

export default auditLogsPermissionToGraphql;
