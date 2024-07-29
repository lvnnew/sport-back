import {EventTypesService} from '../../../services/EventTypesService/EventTypesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const eventTypesBasePermissionToGraphql:
  Partial<PermissionToGraphql<EventTypesService>> = {
    meta: '_allEventTypesMeta',
    get: 'EventType',
    all: 'allEventTypes',
    create: 'createEventType',
    update: 'updateEventType',
    delete: 'removeEventType',
  };

export default eventTypesBasePermissionToGraphql;
