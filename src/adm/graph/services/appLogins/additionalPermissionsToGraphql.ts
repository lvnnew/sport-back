import appLoginsBasePermissionToGraphql from './basePermissionsToGraphql';
import appLoginsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {AppLoginsService} from '../../../services/AppLoginsService/AppLoginsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const appLoginsPermissionToGraphql:
  Partial<PermissionToGraphql<AppLoginsService>> = {
    ...appLoginsBasePermissionToGraphql,
    ...appLoginsAdditionalPermissionToGraphql,
  };

export default appLoginsPermissionToGraphql;
