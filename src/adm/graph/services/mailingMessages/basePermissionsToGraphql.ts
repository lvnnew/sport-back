import {MailingMessagesService} from '../../../services/MailingMessagesService/MailingMessagesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const mailingMessagesBasePermissionToGraphql: Partial<PermissionToGraphql<MailingMessagesService>> = {
  meta: '_allMailingMessagesMeta',
  get: 'MailingMessage',
  all: 'allMailingMessages',
  create: 'createMailingMessage',
  update: 'updateMailingMessage',
  delete: 'removeMailingMessage',
};

export default mailingMessagesBasePermissionToGraphql;
