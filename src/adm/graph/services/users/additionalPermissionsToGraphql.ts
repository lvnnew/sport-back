import usersBasePermissionToGraphql from './basePermissionsToGraphql';
import usersAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {UsersService} from '../../../services/UsersService/UsersService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const usersPermissionToGraphql:
  Partial<PermissionToGraphql<UsersService>> = {
    ...usersBasePermissionToGraphql,
    ...usersAdditionalPermissionToGraphql,
  };

export default usersPermissionToGraphql;
