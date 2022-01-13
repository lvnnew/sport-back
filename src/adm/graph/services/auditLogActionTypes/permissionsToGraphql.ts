import auditLogActionTypesBasePermissionToGraphql from './basePermissionsToGraphql';
import {AuditLogActionTypesService} from '../../../services/AuditLogActionTypesService/AuditLogActionTypesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const auditLogActionTypesPermissionToGraphql: Partial<PermissionToGraphql<AuditLogActionTypesService>> = {
  ...auditLogActionTypesBasePermissionToGraphql,
};

export default auditLogActionTypesPermissionToGraphql;
