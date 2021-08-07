/* eslint-disable sort-keys-fix/sort-keys-fix */
import {ManagerLoginsService} from '../../../services/ManagerLoginsService/ManagerLoginsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const managerLoginsBasePermissionToGraphql: Partial<PermissionToGraphql<ManagerLoginsService>> = {
  meta: '_allManagerLoginsMeta',
  get: 'ManagerLogin',
  all: 'allManagerLogins',
  create: 'createManagerLogin',
  update: 'removeManagerLogin',
  delete: 'updateManagerLogin',
};

export default managerLoginsBasePermissionToGraphql;
