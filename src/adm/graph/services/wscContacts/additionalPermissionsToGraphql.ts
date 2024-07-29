import wscContactsBasePermissionToGraphql from './basePermissionsToGraphql';
import wscContactsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {WscContactsService} from '../../../services/WscContactsService/WscContactsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const wscContactsPermissionToGraphql:
  Partial<PermissionToGraphql<WscContactsService>> = {
    ...wscContactsBasePermissionToGraphql,
    ...wscContactsAdditionalPermissionToGraphql,
  };

export default wscContactsPermissionToGraphql;
