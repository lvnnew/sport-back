import organizatorsBasePermissionToGraphql from './basePermissionsToGraphql';
import {OrganizatorsService} from '../../../services/OrganizatorsService/OrganizatorsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const organizatorsPermissionToGraphql:
  Partial<PermissionToGraphql<OrganizatorsService>> = {
    ...organizatorsBasePermissionToGraphql,
  };

export default organizatorsPermissionToGraphql;
