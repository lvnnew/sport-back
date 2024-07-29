import {PeriodTypesService} from '../../../services/PeriodTypesService/PeriodTypesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const periodTypesBasePermissionToGraphql:
  Partial<PermissionToGraphql<PeriodTypesService>> = {
    meta: '_allPeriodTypesMeta',
    get: 'PeriodType',
    all: 'allPeriodTypes',
    create: 'createPeriodType',
    update: 'updatePeriodType',
    delete: 'removePeriodType',
  };

export default periodTypesBasePermissionToGraphql;
