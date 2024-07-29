import competitionsBasePermissionToGraphql from './basePermissionsToGraphql';
import {CompetitionsService} from '../../../services/CompetitionsService/CompetitionsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const competitionsPermissionToGraphql:
  Partial<PermissionToGraphql<CompetitionsService>> = {
    ...competitionsBasePermissionToGraphql,
  };

export default competitionsPermissionToGraphql;
