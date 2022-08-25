import {TemplateStylesService} from '../../../services/TemplateStylesService/TemplateStylesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const templateStylesBasePermissionToGraphql: Partial<PermissionToGraphql<TemplateStylesService>> = {
  meta: '_allTemplateStylesMeta',
  get: 'TemplateStyle',
  all: 'allTemplateStyles',
  create: 'createTemplateStyle',
  update: 'removeTemplateStyle',
  delete: 'updateTemplateStyle',
};

export default templateStylesBasePermissionToGraphql;
