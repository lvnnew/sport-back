import parentsBasePermissionToGraphql from './basePermissionsToGraphql';
import parentsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {ParentsService} from '../../../services/ParentsService/ParentsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const parentsPermissionToGraphql:
  Partial<PermissionToGraphql<ParentsService>> = {
    ...parentsBasePermissionToGraphql,
    ...parentsAdditionalPermissionToGraphql,
  };

export default parentsPermissionToGraphql;
