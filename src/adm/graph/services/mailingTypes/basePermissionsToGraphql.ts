import {MailingTypesService} from '../../../services/MailingTypesService/MailingTypesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const mailingTypesBasePermissionToGraphql: Partial<PermissionToGraphql<MailingTypesService>> = {
  meta: '_allMailingTypesMeta',
  get: 'MailingType',
  all: 'allMailingTypes',
  create: 'createMailingType',
  update: 'updateMailingType',
  delete: 'removeMailingType',
};

export default mailingTypesBasePermissionToGraphql;
