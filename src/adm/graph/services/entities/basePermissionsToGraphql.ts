import {EntitiesService} from '../../../services/EntitiesService/EntitiesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const entitiesBasePermissionToGraphql: Partial<PermissionToGraphql<EntitiesService>> = {
  meta: '_allEntitiesMeta',
  get: 'Entity',
  all: 'allEntities',
  create: 'createEntity',
  update: 'updateEntity',
  delete: 'removeEntity',
};

export default entitiesBasePermissionToGraphql;
