import {AuditLogsService} from '../../../services/AuditLogsService/AuditLogsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const auditLogsBasePermissionToGraphql: Partial<PermissionToGraphql<AuditLogsService>> = {
  meta: '_allAuditLogsMeta',
  get: 'AuditLog',
  all: 'allAuditLogs',
  create: 'createAuditLog',
  update: 'removeAuditLog',
  delete: 'updateAuditLog',
};

export default auditLogsBasePermissionToGraphql;
