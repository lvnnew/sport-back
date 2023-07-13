import entitiesBasePermissionToGraphql from './basePermissionsToGraphql';
import entitiesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {EntitiesService} from '../../../services/EntitiesService/EntitiesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const entitiesPermissionToGraphql:
  Partial<PermissionToGraphql<EntitiesService>> = {
    ...entitiesBasePermissionToGraphql,
    ...entitiesAdditionalPermissionToGraphql,
  };

export default entitiesPermissionToGraphql;
