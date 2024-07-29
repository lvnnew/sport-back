import eventsBasePermissionToGraphql from './basePermissionsToGraphql';
import {EventsService} from '../../../services/EventsService/EventsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const eventsPermissionToGraphql:
  Partial<PermissionToGraphql<EventsService>> = {
    ...eventsBasePermissionToGraphql,
  };

export default eventsPermissionToGraphql;
