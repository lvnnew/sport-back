import {EventsService} from '../../../services/EventsService/EventsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const eventsBasePermissionToGraphql:
  Partial<PermissionToGraphql<EventsService>> = {
    meta: '_allEventsMeta',
    get: 'Event',
    all: 'allEvents',
    create: 'createEvent',
    update: 'updateEvent',
    delete: 'removeEvent',
  };

export default eventsBasePermissionToGraphql;
