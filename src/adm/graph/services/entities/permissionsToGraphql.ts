import entitiesBasePermissionToGraphql from './basePermissionsToGraphql';
import {EntitiesService} from '../../../services/EntitiesService/EntitiesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const entitiesPermissionToGraphql:
  Partial<PermissionToGraphql<EntitiesService>> = {
    ...entitiesBasePermissionToGraphql,
  };

export default entitiesPermissionToGraphql;
