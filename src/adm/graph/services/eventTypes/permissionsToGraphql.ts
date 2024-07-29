import eventTypesBasePermissionToGraphql from './basePermissionsToGraphql';
import {EventTypesService} from '../../../services/EventTypesService/EventTypesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const eventTypesPermissionToGraphql:
  Partial<PermissionToGraphql<EventTypesService>> = {
    ...eventTypesBasePermissionToGraphql,
  };

export default eventTypesPermissionToGraphql;
