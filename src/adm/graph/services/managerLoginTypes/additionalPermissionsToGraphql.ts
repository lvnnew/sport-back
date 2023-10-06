import managerLoginTypesBasePermissionToGraphql from './basePermissionsToGraphql';
import managerLoginTypesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {ManagerLoginTypesService} from '../../../services/ManagerLoginTypesService/ManagerLoginTypesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const managerLoginTypesPermissionToGraphql:
  Partial<PermissionToGraphql<ManagerLoginTypesService>> = {
    ...managerLoginTypesBasePermissionToGraphql,
    ...managerLoginTypesAdditionalPermissionToGraphql,
  };

export default managerLoginTypesPermissionToGraphql;
