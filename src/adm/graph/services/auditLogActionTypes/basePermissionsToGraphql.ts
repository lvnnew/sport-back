import {AuditLogActionTypesService} from '../../../services/AuditLogActionTypesService/AuditLogActionTypesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const auditLogActionTypesBasePermissionToGraphql: Partial<PermissionToGraphql<AuditLogActionTypesService>> = {
  meta: '_allAuditLogActionTypesMeta',
  get: 'AuditLogActionType',
  all: 'allAuditLogActionTypes',
  create: 'createAuditLogActionType',
  update: 'removeAuditLogActionType',
  delete: 'updateAuditLogActionType',
};

export default auditLogActionTypesBasePermissionToGraphql;
