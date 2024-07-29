import eventTypesBasePermissionToGraphql from './basePermissionsToGraphql';
import eventTypesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {EventTypesService} from '../../../services/EventTypesService/EventTypesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const eventTypesPermissionToGraphql:
  Partial<PermissionToGraphql<EventTypesService>> = {
    ...eventTypesBasePermissionToGraphql,
    ...eventTypesAdditionalPermissionToGraphql,
  };

export default eventTypesPermissionToGraphql;
