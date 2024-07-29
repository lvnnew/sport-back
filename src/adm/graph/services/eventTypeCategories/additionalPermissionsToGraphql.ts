import eventTypeCategoriesBasePermissionToGraphql from './basePermissionsToGraphql';
import eventTypeCategoriesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {EventTypeCategoriesService} from '../../../services/EventTypeCategoriesService/EventTypeCategoriesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const eventTypeCategoriesPermissionToGraphql:
  Partial<PermissionToGraphql<EventTypeCategoriesService>> = {
    ...eventTypeCategoriesBasePermissionToGraphql,
    ...eventTypeCategoriesAdditionalPermissionToGraphql,
  };

export default eventTypeCategoriesPermissionToGraphql;
