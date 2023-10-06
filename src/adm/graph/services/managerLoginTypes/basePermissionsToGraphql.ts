import {ManagerLoginTypesService} from '../../../services/ManagerLoginTypesService/ManagerLoginTypesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const managerLoginTypesBasePermissionToGraphql:
  Partial<PermissionToGraphql<ManagerLoginTypesService>> = {
    meta: '_allManagerLoginTypesMeta',
    get: 'ManagerLoginType',
    all: 'allManagerLoginTypes',
    create: 'createManagerLoginType',
    update: 'updateManagerLoginType',
    delete: 'removeManagerLoginType',
  };

export default managerLoginTypesBasePermissionToGraphql;
