import {TenantsService} from '../../../services/TenantsService/TenantsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const tenantsBasePermissionToGraphql: Partial<PermissionToGraphql<TenantsService>> = {
  meta: '_allTenantsMeta',
  get: 'Tenant',
  all: 'allTenants',
  create: 'createTenant',
  update: 'removeTenant',
  delete: 'updateTenant',
};

export default tenantsBasePermissionToGraphql;
