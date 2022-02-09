import {MessageTypesService} from '../../../services/MessageTypesService/MessageTypesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const messageTypesBasePermissionToGraphql: Partial<PermissionToGraphql<MessageTypesService>> = {
  meta: '_allMessageTypesMeta',
  get: 'MessageType',
  all: 'allMessageTypes',
  create: 'createMessageType',
  update: 'removeMessageType',
  delete: 'updateMessageType',
};

export default messageTypesBasePermissionToGraphql;
