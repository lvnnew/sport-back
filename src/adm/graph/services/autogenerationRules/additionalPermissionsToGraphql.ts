import autogenerationRulesBasePermissionToGraphql from './basePermissionsToGraphql';
import autogenerationRulesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {AutogenerationRulesService} from '../../../services/AutogenerationRulesService/AutogenerationRulesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const autogenerationRulesPermissionToGraphql:
  Partial<PermissionToGraphql<AutogenerationRulesService>> = {
    ...autogenerationRulesBasePermissionToGraphql,
    ...autogenerationRulesAdditionalPermissionToGraphql,
  };

export default autogenerationRulesPermissionToGraphql;
