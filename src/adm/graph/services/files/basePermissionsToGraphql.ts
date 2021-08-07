/* eslint-disable sort-keys-fix/sort-keys-fix */
import {FilesService} from '../../../services/FilesService/FilesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const filesBasePermissionToGraphql: Partial<PermissionToGraphql<FilesService>> = {
  meta: '_allFilesMeta',
  get: 'File',
  all: 'allFiles',
  create: 'createFile',
  update: 'removeFile',
  delete: 'updateFile',
};

export default filesBasePermissionToGraphql;
