import statsBasePermissionToGraphql from './basePermissionsToGraphql';
import statsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {StatsService} from '../../../services/StatsService/StatsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const statsPermissionToGraphql: Partial<PermissionToGraphql<StatsService>> = {
  ...statsBasePermissionToGraphql,
  ...statsAdditionalPermissionToGraphql,
};

export default statsPermissionToGraphql;
