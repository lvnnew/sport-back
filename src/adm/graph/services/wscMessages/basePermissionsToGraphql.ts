import {WscMessagesService} from '../../../services/WscMessagesService/WscMessagesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const wscMessagesBasePermissionToGraphql:
  Partial<PermissionToGraphql<WscMessagesService>> = {
    meta: '_allWscMessagesMeta',
    get: 'WscMessage',
    all: 'allWscMessages',
    create: 'createWscMessage',
    update: 'updateWscMessage',
    delete: 'removeWscMessage',
  };

export default wscMessagesBasePermissionToGraphql;
