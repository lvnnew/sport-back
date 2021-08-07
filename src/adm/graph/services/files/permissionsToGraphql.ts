import filesBasePermissionToGraphql from './basePermissionsToGraphql';
import {FilesService} from '../../../services/FilesService/FilesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const filesPermissionToGraphql: Partial<PermissionToGraphql<FilesService>> = {
  ...filesBasePermissionToGraphql,
};

export default filesPermissionToGraphql;
