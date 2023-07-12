import delegationsBasePermissionToGraphql from './basePermissionsToGraphql';
import delegationsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {DelegationsService} from '../../../services/DelegationsService/DelegationsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const delegationsPermissionToGraphql:
  Partial<PermissionToGraphql<DelegationsService>> = {
    ...delegationsBasePermissionToGraphql,
    ...delegationsAdditionalPermissionToGraphql,
  };

export default delegationsPermissionToGraphql;
