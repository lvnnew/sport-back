import managerLoginsBasePermissionToGraphql from './basePermissionsToGraphql';
import managerLoginsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {ManagerLoginsService} from '../../../services/ManagerLoginsService/ManagerLoginsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const managerLoginsPermissionToGraphql:
  Partial<PermissionToGraphql<ManagerLoginsService>> = {
    ...managerLoginsBasePermissionToGraphql,
    ...managerLoginsAdditionalPermissionToGraphql,
  };

export default managerLoginsPermissionToGraphql;
