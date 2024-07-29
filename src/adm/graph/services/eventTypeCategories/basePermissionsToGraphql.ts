import {EventTypeCategoriesService} from '../../../services/EventTypeCategoriesService/EventTypeCategoriesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const eventTypeCategoriesBasePermissionToGraphql:
  Partial<PermissionToGraphql<EventTypeCategoriesService>> = {
    meta: '_allEventTypeCategoriesMeta',
    get: 'EventTypeCategory',
    all: 'allEventTypeCategories',
    create: 'createEventTypeCategory',
    update: 'updateEventTypeCategory',
    delete: 'removeEventTypeCategory',
  };

export default eventTypeCategoriesBasePermissionToGraphql;
