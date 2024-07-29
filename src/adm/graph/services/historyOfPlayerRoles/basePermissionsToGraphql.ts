import {HistoryOfPlayerRolesService} from '../../../services/HistoryOfPlayerRolesService/HistoryOfPlayerRolesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const historyOfPlayerRolesBasePermissionToGraphql:
  Partial<PermissionToGraphql<HistoryOfPlayerRolesService>> = {
    meta: '_allHistoryOfPlayerRolesMeta',
    get: 'HistoryOfPlayerRole',
    all: 'allHistoryOfPlayerRoles',
    create: 'createHistoryOfPlayerRole',
    update: 'updateHistoryOfPlayerRole',
    delete: 'removeHistoryOfPlayerRole',
  };

export default historyOfPlayerRolesBasePermissionToGraphql;
