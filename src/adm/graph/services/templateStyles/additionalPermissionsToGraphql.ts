import templateStylesBasePermissionToGraphql from './basePermissionsToGraphql';
import templateStylesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {TemplateStylesService} from '../../../services/TemplateStylesService/TemplateStylesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const templateStylesPermissionToGraphql:
  Partial<PermissionToGraphql<TemplateStylesService>> = {
    ...templateStylesBasePermissionToGraphql,
    ...templateStylesAdditionalPermissionToGraphql,
  };

export default templateStylesPermissionToGraphql;
