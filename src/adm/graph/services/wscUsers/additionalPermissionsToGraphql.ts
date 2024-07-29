import wscUsersBasePermissionToGraphql from './basePermissionsToGraphql';
import wscUsersAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {WscUsersService} from '../../../services/WscUsersService/WscUsersService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const wscUsersPermissionToGraphql:
  Partial<PermissionToGraphql<WscUsersService>> = {
    ...wscUsersBasePermissionToGraphql,
    ...wscUsersAdditionalPermissionToGraphql,
  };

export default wscUsersPermissionToGraphql;
