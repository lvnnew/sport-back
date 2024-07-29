import entitiesTrackingsBasePermissionToGraphql from './basePermissionsToGraphql';
import entitiesTrackingsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {EntitiesTrackingsService} from '../../../services/EntitiesTrackingsService/EntitiesTrackingsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const entitiesTrackingsPermissionToGraphql:
  Partial<PermissionToGraphql<EntitiesTrackingsService>> = {
    ...entitiesTrackingsBasePermissionToGraphql,
    ...entitiesTrackingsAdditionalPermissionToGraphql,
  };

export default entitiesTrackingsPermissionToGraphql;
