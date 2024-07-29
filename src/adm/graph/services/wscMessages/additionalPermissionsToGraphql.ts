import wscMessagesBasePermissionToGraphql from './basePermissionsToGraphql';
import wscMessagesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {WscMessagesService} from '../../../services/WscMessagesService/WscMessagesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const wscMessagesPermissionToGraphql:
  Partial<PermissionToGraphql<WscMessagesService>> = {
    ...wscMessagesBasePermissionToGraphql,
    ...wscMessagesAdditionalPermissionToGraphql,
  };

export default wscMessagesPermissionToGraphql;
