import permissionsBasePermissionToGraphql from './basePermissionsToGraphql';
import permissionsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {PermissionsService} from '../../../services/PermissionsService/PermissionsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const permissionsPermissionToGraphql: Partial<PermissionToGraphql<PermissionsService>> = {
  ...permissionsBasePermissionToGraphql,
  ...permissionsAdditionalPermissionToGraphql,
};

export default permissionsPermissionToGraphql;
