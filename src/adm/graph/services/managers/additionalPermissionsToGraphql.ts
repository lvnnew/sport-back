import managersBasePermissionToGraphql from './basePermissionsToGraphql';
import managersAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {ManagersService} from '../../../services/ManagersService/ManagersService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const managersPermissionToGraphql:
  Partial<PermissionToGraphql<ManagersService>> = {
    ...managersBasePermissionToGraphql,
    ...managersAdditionalPermissionToGraphql,
  };

export default managersPermissionToGraphql;
