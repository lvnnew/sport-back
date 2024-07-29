import {EntitiesTrackingsService} from '../../../services/EntitiesTrackingsService/EntitiesTrackingsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const entitiesTrackingsBasePermissionToGraphql:
  Partial<PermissionToGraphql<EntitiesTrackingsService>> = {
    meta: '_allEntitiesTrackingsMeta',
    get: 'EntitiesTracking',
    all: 'allEntitiesTrackings',
    create: 'createEntitiesTracking',
    update: 'updateEntitiesTracking',
    delete: 'removeEntitiesTracking',
  };

export default entitiesTrackingsBasePermissionToGraphql;
