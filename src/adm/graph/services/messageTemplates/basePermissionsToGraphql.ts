import {MessageTemplatesService} from '../../../services/MessageTemplatesService/MessageTemplatesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const messageTemplatesBasePermissionToGraphql:
  Partial<PermissionToGraphql<MessageTemplatesService>> = {
    meta: '_allMessageTemplatesMeta',
    get: 'MessageTemplate',
    all: 'allMessageTemplates',
    create: 'createMessageTemplate',
    update: 'updateMessageTemplate',
    delete: 'removeMessageTemplate',
  };

export default messageTemplatesBasePermissionToGraphql;
