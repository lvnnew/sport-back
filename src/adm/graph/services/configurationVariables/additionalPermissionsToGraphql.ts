import configurationVariablesBasePermissionToGraphql from './basePermissionsToGraphql';
import configurationVariablesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {ConfigurationVariablesService} from '../../../services/ConfigurationVariablesService/ConfigurationVariablesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const configurationVariablesPermissionToGraphql:
  Partial<PermissionToGraphql<ConfigurationVariablesService>> = {
    ...configurationVariablesBasePermissionToGraphql,
    ...configurationVariablesAdditionalPermissionToGraphql,
  };

export default configurationVariablesPermissionToGraphql;
