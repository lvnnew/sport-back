import {TagsService} from '../../../services/TagsService/TagsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const tagsBasePermissionToGraphql:
  Partial<PermissionToGraphql<TagsService>> = {
    meta: '_allTagsMeta',
    get: 'Tag',
    all: 'allTags',
    create: 'createTag',
    update: 'updateTag',
    delete: 'removeTag',
  };

export default tagsBasePermissionToGraphql;
