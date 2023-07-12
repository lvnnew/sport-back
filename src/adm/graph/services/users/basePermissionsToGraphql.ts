import {UsersService} from '../../../services/UsersService/UsersService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const usersBasePermissionToGraphql:
  Partial<PermissionToGraphql<UsersService>> = {
    meta: '_allUsersMeta',
    get: 'User',
    all: 'allUsers',
    create: 'createUser',
    update: 'updateUser',
    delete: 'removeUser',
  };

export default usersBasePermissionToGraphql;
