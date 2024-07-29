import eventTypeCategoriesBasePermissionToGraphql from './basePermissionsToGraphql';
import {EventTypeCategoriesService} from '../../../services/EventTypeCategoriesService/EventTypeCategoriesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const eventTypeCategoriesPermissionToGraphql:
  Partial<PermissionToGraphql<EventTypeCategoriesService>> = {
    ...eventTypeCategoriesBasePermissionToGraphql,
  };

export default eventTypeCategoriesPermissionToGraphql;
