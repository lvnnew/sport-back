import {FilesService} from '../../../services/FilesService/FilesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const filesBasePermissionToGraphql:
  Partial<PermissionToGraphql<FilesService>> = {
    meta: '_allFilesMeta',
    get: 'File',
    all: 'allFiles',
    create: 'createFile',
    update: 'updateFile',
    delete: 'removeFile',
  };

export default filesBasePermissionToGraphql;
