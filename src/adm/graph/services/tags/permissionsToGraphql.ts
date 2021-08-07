import tagsBasePermissionToGraphql from './basePermissionsToGraphql';
import {TagsService} from '../../../services/TagsService/TagsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const tagsPermissionToGraphql: Partial<PermissionToGraphql<TagsService>> = {
  ...tagsBasePermissionToGraphql,
};

export default tagsPermissionToGraphql;
