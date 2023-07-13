import rolesToPermissionsBasePermissionToGraphql from './basePermissionsToGraphql';
import rolesToPermissionsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {RolesToPermissionsService} from '../../../services/RolesToPermissionsService/RolesToPermissionsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const rolesToPermissionsPermissionToGraphql:
  Partial<PermissionToGraphql<RolesToPermissionsService>> = {
    ...rolesToPermissionsBasePermissionToGraphql,
    ...rolesToPermissionsAdditionalPermissionToGraphql,
  };

export default rolesToPermissionsPermissionToGraphql;
