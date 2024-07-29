import {ParentsService} from '../../../services/ParentsService/ParentsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const parentsBasePermissionToGraphql:
  Partial<PermissionToGraphql<ParentsService>> = {
    meta: '_allParentsMeta',
    get: 'Parent',
    all: 'allParents',
    create: 'createParent',
    update: 'updateParent',
    delete: 'removeParent',
  };

export default parentsBasePermissionToGraphql;
