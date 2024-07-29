import organizatorsBasePermissionToGraphql from './basePermissionsToGraphql';
import organizatorsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {OrganizatorsService} from '../../../services/OrganizatorsService/OrganizatorsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const organizatorsPermissionToGraphql:
  Partial<PermissionToGraphql<OrganizatorsService>> = {
    ...organizatorsBasePermissionToGraphql,
    ...organizatorsAdditionalPermissionToGraphql,
  };

export default organizatorsPermissionToGraphql;
