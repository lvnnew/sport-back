import tenantsBasePermissionToGraphql from './basePermissionsToGraphql';
import {TenantsService} from '../../../services/TenantsService/TenantsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const tenantsPermissionToGraphql: Partial<PermissionToGraphql<TenantsService>> = {
  ...tenantsBasePermissionToGraphql,
};

export default tenantsPermissionToGraphql;
