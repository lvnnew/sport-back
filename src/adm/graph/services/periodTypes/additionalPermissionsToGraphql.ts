import periodTypesBasePermissionToGraphql from './basePermissionsToGraphql';
import periodTypesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {PeriodTypesService} from '../../../services/PeriodTypesService/PeriodTypesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const periodTypesPermissionToGraphql:
  Partial<PermissionToGraphql<PeriodTypesService>> = {
    ...periodTypesBasePermissionToGraphql,
    ...periodTypesAdditionalPermissionToGraphql,
  };

export default periodTypesPermissionToGraphql;
