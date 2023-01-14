import {AppLoginsService} from '../../../services/AppLoginsService/AppLoginsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const appLoginsBasePermissionToGraphql: Partial<PermissionToGraphql<AppLoginsService>> = {
  meta: '_allAppLoginsMeta',
  get: 'AppLogin',
  all: 'allAppLogins',
  create: 'createAppLogin',
  update: 'updateAppLogin',
  delete: 'removeAppLogin',
};

export default appLoginsBasePermissionToGraphql;
