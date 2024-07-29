import {WscContactsService} from '../../../services/WscContactsService/WscContactsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const wscContactsBasePermissionToGraphql:
  Partial<PermissionToGraphql<WscContactsService>> = {
    meta: '_allWscContactsMeta',
    get: 'WscContact',
    all: 'allWscContacts',
    create: 'createWscContact',
    update: 'updateWscContact',
    delete: 'removeWscContact',
  };

export default wscContactsBasePermissionToGraphql;
