import {WscUsersService} from '../../../services/WscUsersService/WscUsersService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const wscUsersBasePermissionToGraphql:
  Partial<PermissionToGraphql<WscUsersService>> = {
    meta: '_allWscUsersMeta',
    get: 'WscUser',
    all: 'allWscUsers',
    create: 'createWscUser',
    update: 'updateWscUser',
    delete: 'removeWscUser',
  };

export default wscUsersBasePermissionToGraphql;
