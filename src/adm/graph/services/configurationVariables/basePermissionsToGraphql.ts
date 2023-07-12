import {ConfigurationVariablesService} from '../../../services/ConfigurationVariablesService/ConfigurationVariablesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const configurationVariablesBasePermissionToGraphql:
  Partial<PermissionToGraphql<ConfigurationVariablesService>> = {
    meta: '_allConfigurationVariablesMeta',
    get: 'ConfigurationVariable',
    all: 'allConfigurationVariables',
    create: 'createConfigurationVariable',
    update: 'updateConfigurationVariable',
    delete: 'removeConfigurationVariable',
  };

export default configurationVariablesBasePermissionToGraphql;
