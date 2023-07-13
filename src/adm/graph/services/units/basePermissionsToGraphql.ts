import {UnitsService} from '../../../services/UnitsService/UnitsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const unitsBasePermissionToGraphql:
  Partial<PermissionToGraphql<UnitsService>> = {
    meta: '_allUnitsMeta',
    get: 'Unit',
    all: 'allUnits',
    create: 'createUnit',
    update: 'updateUnit',
    delete: 'removeUnit',
  };

export default unitsBasePermissionToGraphql;
