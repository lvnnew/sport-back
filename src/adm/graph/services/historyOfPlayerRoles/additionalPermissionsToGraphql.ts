import historyOfPlayerRolesBasePermissionToGraphql from './basePermissionsToGraphql';
import historyOfPlayerRolesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {HistoryOfPlayerRolesService} from '../../../services/HistoryOfPlayerRolesService/HistoryOfPlayerRolesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const historyOfPlayerRolesPermissionToGraphql:
  Partial<PermissionToGraphql<HistoryOfPlayerRolesService>> = {
    ...historyOfPlayerRolesBasePermissionToGraphql,
    ...historyOfPlayerRolesAdditionalPermissionToGraphql,
  };

export default historyOfPlayerRolesPermissionToGraphql;
