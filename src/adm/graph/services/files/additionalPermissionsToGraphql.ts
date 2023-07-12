import filesBasePermissionToGraphql from './basePermissionsToGraphql';
import filesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {FilesService} from '../../../services/FilesService/FilesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const filesPermissionToGraphql:
  Partial<PermissionToGraphql<FilesService>> = {
    ...filesBasePermissionToGraphql,
    ...filesAdditionalPermissionToGraphql,
  };

export default filesPermissionToGraphql;
