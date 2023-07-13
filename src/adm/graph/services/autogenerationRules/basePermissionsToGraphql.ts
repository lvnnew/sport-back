import {AutogenerationRulesService} from '../../../services/AutogenerationRulesService/AutogenerationRulesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const autogenerationRulesBasePermissionToGraphql:
  Partial<PermissionToGraphql<AutogenerationRulesService>> = {
    meta: '_allAutogenerationRulesMeta',
    get: 'AutogenerationRule',
    all: 'allAutogenerationRules',
    create: 'createAutogenerationRule',
    update: 'updateAutogenerationRule',
    delete: 'removeAutogenerationRule',
  };

export default autogenerationRulesBasePermissionToGraphql;
