import eventsBasePermissionToGraphql from './basePermissionsToGraphql';
import eventsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {EventsService} from '../../../services/EventsService/EventsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const eventsPermissionToGraphql:
  Partial<PermissionToGraphql<EventsService>> = {
    ...eventsBasePermissionToGraphql,
    ...eventsAdditionalPermissionToGraphql,
  };

export default eventsPermissionToGraphql;
