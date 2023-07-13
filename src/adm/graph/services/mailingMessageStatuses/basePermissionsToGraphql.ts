import {MailingMessageStatusesService} from '../../../services/MailingMessageStatusesService/MailingMessageStatusesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const mailingMessageStatusesBasePermissionToGraphql:
  Partial<PermissionToGraphql<MailingMessageStatusesService>> = {
    meta: '_allMailingMessageStatusesMeta',
    get: 'MailingMessageStatus',
    all: 'allMailingMessageStatuses',
    create: 'createMailingMessageStatus',
    update: 'updateMailingMessageStatus',
    delete: 'removeMailingMessageStatus',
  };

export default mailingMessageStatusesBasePermissionToGraphql;
