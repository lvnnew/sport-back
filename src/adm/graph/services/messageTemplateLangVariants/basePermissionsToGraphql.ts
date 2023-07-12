import {MessageTemplateLangVariantsService} from '../../../services/MessageTemplateLangVariantsService/MessageTemplateLangVariantsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const messageTemplateLangVariantsBasePermissionToGraphql:
  Partial<PermissionToGraphql<MessageTemplateLangVariantsService>> = {
    meta: '_allMessageTemplateLangVariantsMeta',
    get: 'MessageTemplateLangVariant',
    all: 'allMessageTemplateLangVariants',
    create: 'createMessageTemplateLangVariant',
    update: 'updateMessageTemplateLangVariant',
    delete: 'removeMessageTemplateLangVariant',
  };

export default messageTemplateLangVariantsBasePermissionToGraphql;
