import {ManagersService} from '../../../services/ManagersService/ManagersService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const managersBasePermissionToGraphql: Partial<PermissionToGraphql<ManagersService>> = {
  meta: '_allManagersMeta',
  get: 'Manager',
  all: 'allManagers',
  create: 'createManager',
  update: 'updateManager',
  delete: 'removeManager',
};

export default managersBasePermissionToGraphql;
