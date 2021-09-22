import unitsBasePermissionToGraphql from './basePermissionsToGraphql';
import unitsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {UnitsService} from '../../../services/UnitsService/UnitsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const unitsPermissionToGraphql: Partial<PermissionToGraphql<UnitsService>> = {
  ...unitsBasePermissionToGraphql,
  ...unitsAdditionalPermissionToGraphql,
};

export default unitsPermissionToGraphql;
