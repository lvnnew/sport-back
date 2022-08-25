import messageTemplateLangVariantsBasePermissionToGraphql from './basePermissionsToGraphql';
import messageTemplateLangVariantsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {MessageTemplateLangVariantsService} from '../../../services/MessageTemplateLangVariantsService/MessageTemplateLangVariantsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const messageTemplateLangVariantsPermissionToGraphql: Partial<PermissionToGraphql<MessageTemplateLangVariantsService>> = {
  ...messageTemplateLangVariantsBasePermissionToGraphql,
  ...messageTemplateLangVariantsAdditionalPermissionToGraphql,
};

export default messageTemplateLangVariantsPermissionToGraphql;
